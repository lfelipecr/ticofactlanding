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
  const domain = (process.env.ZOHO_DOMAIN || "com").trim();

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Zoho no configurado (ZOHO_CLIENT_ID/SECRET/REFRESH_TOKEN)");
  }

  const tokenUrl = new URL(`https://accounts.zoho.${domain}/oauth/v2/token`);
  tokenUrl.searchParams.set("refresh_token", refreshToken);
  tokenUrl.searchParams.set("client_id", clientId);
  tokenUrl.searchParams.set("client_secret", clientSecret);
  tokenUrl.searchParams.set("grant_type", "refresh_token");

  const resp = await fetch(tokenUrl.toString(), { method: "POST" });
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
  const domain = (process.env.ZOHO_DOMAIN || "com").trim();
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

  const url = `https://www.zohoapis.${domain}/crm/v2/Leads`;
  const resp = await fetch(url, {
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
