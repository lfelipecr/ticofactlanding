import type { VercelRequest, VercelResponse } from "@vercel/node";

import { handleContactSalesRequest } from "../server/contact-sales-handler.ts";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    let body: unknown;
    if (typeof req.body === "string") {
      try {
        body = req.body.trim() ? JSON.parse(req.body) : {};
      } catch {
        res.status(400).json({ error: "JSON inválido" });
        return;
      }
    } else {
      body = req.body ?? {};
    }

    const result = await handleContactSalesRequest(body);
    res.status(result.status).json(result.body);
  } catch (e) {
    console.error("api/contact-sales", e);
    res.status(500).json({
      error: "Error interno al procesar la solicitud.",
    });
  }
}
