import path from "node:path";
import { fileURLToPath } from "node:url";

import { config as loadEnv } from "dotenv";
import nodemailer from "nodemailer";

import {
  type ContactSalesPayload,
  contactSalesSchema,
} from "../shared/contact-sales.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** Raíz del repo: `.env` sin prefijo VITE_ (Vite no inyecta estas vars en el middleware de Node). */
loadEnv({ path: path.resolve(__dirname, "../.env") });

export type ContactSalesHandlerResult =
  | { status: 200; body: { ok: true } }
  | { status: 400; body: { error: string } }
  | { status: 503; body: { error: string } }
  | { status: 500; body: { error: string } };

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildPlainText(data: ContactSalesPayload): string {
  const lines = [
    "Nuevo contacto desde factico.net",
    "",
    `Nombre: ${data.fullName}`,
    `Empresa: ${data.companyName}`,
    `Correo: ${data.email}`,
    `WhatsApp: ${data.whatsapp}`,
    `Tipo de negocio: ${data.businessType}`,
    "",
    "Comentarios:",
    data.comments?.trim() ? data.comments.trim() : "(sin comentarios)",
  ];
  return lines.join("\n");
}

function buildHtml(data: ContactSalesPayload): string {
  const c = data.comments?.trim()
    ? escapeHtml(data.comments.trim()).replace(/\n/g, "<br/>")
    : "<em>(sin comentarios)</em>";
  return `
    <p><strong>Nuevo contacto desde factico.net</strong></p>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0;"><strong>Nombre</strong></td><td>${escapeHtml(data.fullName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Empresa</strong></td><td>${escapeHtml(data.companyName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Correo</strong></td><td>${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>WhatsApp</strong></td><td>${escapeHtml(data.whatsapp)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Tipo de negocio</strong></td><td>${escapeHtml(data.businessType)}</td></tr>
    </table>
    <p><strong>Comentarios</strong></p>
    <p>${c}</p>
  `;
}

function getSmtpConfig():
  | { ok: true; config: { host: string; port: number; secure: boolean; user: string; pass: string } }
  | { ok: false; reason: string } {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!host || !user || !pass) {
    return { ok: false, reason: "SMTP no configurado" };
  }
  const port = Number(process.env.SMTP_PORT || "587");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;
  return { ok: true, config: { host, port, secure, user, pass } };
}

async function sendSalesEmail(data: ContactSalesPayload): Promise<void> {
  const smtp = getSmtpConfig();
  if (!smtp.ok) {
    throw new Error(smtp.reason);
  }

  const { host, port, secure, user, pass } = smtp.config;
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const to = (process.env.SALES_EMAIL_TO || "ventas@factico.net").trim();
  const from =
    (process.env.SMTP_FROM || user).trim() ||
    `"Factico.net" <${user}>`;

  await transporter.sendMail({
    from,
    to,
    replyTo: data.email,
    subject: `Contacto ventas — ${data.companyName}`,
    text: buildPlainText(data),
    html: buildHtml(data),
  });
}

export async function handleContactSalesRequest(
  rawBody: unknown
): Promise<ContactSalesHandlerResult> {
  const parsed = contactSalesSchema.safeParse(rawBody);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Datos inválidos";
    return { status: 400, body: { error: first } };
  }

  try {
    await sendSalesEmail(parsed.data);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg.includes("SMTP no configurado")) {
      console.error("contact-sales: SMTP no configurado (variables SMTP_*)");
      return {
        status: 503,
        body: { error: "El servicio de correo no está configurado." },
      };
    }
    console.error("contact-sales: error al enviar correo", e);
    return {
      status: 500,
      body: {
        error:
          "No se pudo enviar el mensaje en este momento. Intente de nuevo más tarde.",
      },
    };
  }

  return { status: 200, body: { ok: true } };
}
