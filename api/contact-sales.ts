import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log("Petición recibida en /api/contact-sales");
  console.log("Método:", req.method);
  return res.status(200).json({ mensaje: "API viva" });
}
