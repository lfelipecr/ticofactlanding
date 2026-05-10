import path from "path";
import { fileURLToPath } from "url";

import { config as loadEnv } from "dotenv";
import express from "express";
import { createServer } from "http";

import { handleContactSalesRequest } from "./contact-sales-handler.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** Local / Node propio: carga `.env` en la raíz del repo. En Vercel no aplica (env inyectado). */
loadEnv({ path: path.resolve(__dirname, "../.env") });

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "64kb" }));

  app.post("/api/contact-sales", async (req, res) => {
    try {
      const result = await handleContactSalesRequest(req.body);
      res.status(result.status).json(result.body);
    } catch (e) {
      console.error("POST /api/contact-sales", e);
      res.status(500).json({
        error: "Error interno al procesar la solicitud.",
      });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
