import type { VercelRequest, VercelResponse } from "@vercel/node";

import nodemailer from "nodemailer";

type JsonObject = Record<string, unknown>;

let zohoTokenCache:
  | { accessToken: string; expiresAtMs: number }
  | null = null;

function asObject(input: unknown): JsonObject {
  if (input && typeof input === "object" && !Array.isArray(input)) {
    return input as JsonObject;
  }
  return {};
}

async function getZohoAccessToken(): Promise<string> {
  const now = Date.now();
  if (zohoTokenCache && zohoTokenCache.expiresAtMs > now + 30_000) {
    return zohoTokenCache.accessToken;
  }

  const clientId = process.env.ZOHO_CLIENT_ID?.trim();
  const clientSecret = process.env.ZOHO_CLIENT_SECRET?.trim();
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN?.trim();

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Zoho no configurado (ZOHO_CLIENT_ID/SECRET/REFRESH_TOKEN)");
  }

  const params = new URLSearchParams();
  params.set("client_id", clientId);
  params.set("client_secret", clientSecret);
  params.set("refresh_token", refreshToken);
  params.set("grant_type", "refresh_token");

  const resp = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: params.toString(),
  });
  const json = (await resp.json().catch(() => ({}))) as {
    access_token?: string;
    expires_in?: number;
    error?: string;
    error_description?: string;
  };

  if (!resp.ok || !json.access_token) {
    throw new Error(
      json.error_description ||
        json.error ||
        `Zoho token error (HTTP ${resp.status})`
    );
  }

  const expiresInSec = typeof json.expires_in === "number" ? json.expires_in : 3600;
  zohoTokenCache = {
    accessToken: json.access_token,
    expiresAtMs: now + expiresInSec * 1000,
  };

  return json.access_token;
}

async function sendToZohoLead(rawBody: unknown): Promise<void> {
  const accessToken = await getZohoAccessToken();

  const bodyObj = asObject(rawBody);

  // Zoho requiere Last_Name. Instrucción: Last_Name = req.body.name
  const nameValue =
    (typeof bodyObj.name === "string" && bodyObj.name.trim()) ||
    (typeof bodyObj.fullName === "string" && bodyObj.fullName.trim()) ||
    "Contacto Landing";

  const leadPayload: JsonObject = {
    ...bodyObj, // enviar TODOS los campos tal cual vienen
    Last_Name: nameValue,
    Lead_Source: "Landing Page Factico",
  };

  const resp = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [leadPayload] }),
  });

  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    throw new Error(`Zoho CRM error (HTTP ${resp.status}): ${text}`);
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log("Petición recibida en /api/contact-sales");
  console.log("Método:", req.method);
  console.log("Cuerpo recibido:", req.body);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // 1) Intentar CRM primero (NO bloquear confirmación al usuario si falla).
  try {
    await sendToZohoLead(req.body);
  } catch (e) {
    console.error("Zoho CRM falló (se continuará con correo):", e);
  }

  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const from = process.env.SMTP_FROM?.trim();

  if (!smtpUser || !smtpPass || !from) {
    return res.status(503).json({ error: "SMTP no configurado" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zeptomail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from,
      to: "ventas@factico.net",
      subject: "Nuevo contacto ventas (factico.net)",
      text: JSON.stringify(req.body ?? {}, null, 2),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Error enviando correo:", error);
    return res.status(500).json({ error: message });
  }
}
