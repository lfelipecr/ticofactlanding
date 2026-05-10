import type { VercelRequest, VercelResponse } from "@vercel/node";

import nodemailer from "nodemailer";

import { contactSalesSchema } from "../shared/contact-sales.ts";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  console.log("Cuerpo recibido:", req.body);

  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const parsed = contactSalesSchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Datos inválidos";
    res.status(400).json({ error: first });
    return;
  }

  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const from = process.env.SMTP_FROM?.trim();
  const to = (process.env.SALES_EMAIL_TO || "ventas@factico.net").trim();

  if (!smtpUser || !smtpPass || !from) {
    res.status(503).json({ error: "SMTP no configurado" });
    return;
  }

  const data = parsed.data;

  const transporter = nodemailer.createTransport({
    host: "smtp.zeptomail.com",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const text = [
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
  ].join("\n");

  const commentsHtml = data.comments?.trim()
    ? escapeHtml(data.comments.trim()).replace(/\n/g, "<br/>")
    : "<em>(sin comentarios)</em>";

  const html = `
    <p><strong>Nuevo contacto desde factico.net</strong></p>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0;"><strong>Nombre</strong></td><td>${escapeHtml(data.fullName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Empresa</strong></td><td>${escapeHtml(data.companyName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Correo</strong></td><td>${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>WhatsApp</strong></td><td>${escapeHtml(data.whatsapp)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Tipo de negocio</strong></td><td>${escapeHtml(data.businessType)}</td></tr>
    </table>
    <p><strong>Comentarios</strong></p>
    <p>${commentsHtml}</p>
  `;

  try {
    // MUY IMPORTANTE: no respondemos 200 hasta que el correo termine de enviarse.
    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject: `Contacto ventas — ${data.companyName}`,
      text,
      html,
    });

    res.status(200).json({ ok: true });
  } catch (e) {
    console.error("api/contact-sales sendMail error", e);
    res.status(500).json({ error: "No se pudo enviar el correo." });
  }
}
