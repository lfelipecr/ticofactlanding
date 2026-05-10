import type { VercelRequest, VercelResponse } from "@vercel/node";

import nodemailer from "nodemailer";

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
