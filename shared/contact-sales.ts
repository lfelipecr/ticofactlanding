import { z } from "zod";

export const BUSINESS_TYPES = [
  "Restaurante o comida",
  "Comercio retail / tienda",
  "Servicios profesionales",
  "Salud / bienestar",
  "Construcción",
  "Agricultura / agro",
  "Tecnología / software",
  "Transporte / logística",
  "Manufactura",
  "Otro",
] as const;

export type BusinessType = (typeof BUSINESS_TYPES)[number];

function isBusinessType(v: string): v is BusinessType {
  return (BUSINESS_TYPES as readonly string[]).includes(v);
}

export const contactSalesSchema = z.object({
  fullName: z.string().trim().min(2, "Ingrese su nombre").max(120),
  companyName: z.string().trim().min(2, "Ingrese el nombre de la empresa").max(200),
  email: z.string().trim().email("Correo electrónico inválido").max(254),
  whatsapp: z.string().trim().min(8, "Ingrese un número de WhatsApp válido").max(40),
  businessType: z
    .string()
    .min(1, "Seleccione el tipo de negocio")
    .refine(isBusinessType, { message: "Tipo de negocio inválido" }),
  comments: z.string().trim().max(4000).optional(),
});

export type ContactSalesPayload = z.infer<typeof contactSalesSchema>;
