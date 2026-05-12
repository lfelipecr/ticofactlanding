/**
 * Features Section Component
 * Características principales con iconografía
 * Diseño: Minimalismo Corporativo Moderno
 * - Fondo gris claro alternado
 * - Grid de 3 columnas (responsive)
 * - Tarjetas con sombras suaves
 * - Iconografía minimalista
 */

import {
  Smartphone,
  BarChart3,
  Share2,
  Mail,
  Inbox,
  HeadphonesIcon,
  Building2,
  Search,
  FileCheck,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Instálala como APP",
    description:
      "Factico.net es una PWA. Instálala en tu celular o computadora como si fuera una app nativa, sin pasar por tiendas de aplicaciones.",
  },
  {
    icon: BarChart3,
    title: "Reportes de IVA",
    description:
      "Genera reportes de IVA de ventas y compras listos para presentar tu declaración ante el Ministerio de Hacienda sin complicaciones.",
  },
  {
    icon: Share2,
    title: "Comparte tus Facturas",
    description:
      "Cada factura tiene un enlace único que puedes compartir directamente por WhatsApp o correo electrónico con tus clientes.",
  },
  {
    icon: Mail,
    title: "Envío y Reenvío por Correo",
    description:
      "Envía y reenvía comprobantes electrónicos directamente desde el sistema al correo de tus clientes con un solo clic.",
  },
  {
    icon: Inbox,
    title: "Recepción de Facturas de Compras",
    description:
      "Recibe y gestiona automáticamente las facturas de compras que te envían tus proveedores directamente desde tu correo.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Humano y Rápido",
    description:
      "Nuestro soporte es atendido por personas reales, no por bots. Respuestas rápidas y oportunas cuando más lo necesitas.",
  },
  {
    icon: Building2,
    title: "Múltiples Actividades Económicas",
    description:
      "Gestiona varias actividades económicas desde una sola cuenta, cada una con su propio logo personalizado.",
  },
  {
    icon: Search,
    title: "Búsqueda Automática de Clientes",
    description:
      "Al crear un cliente, el sistema busca automáticamente sus datos con solo ingresar su cédula o número de identificación.",
  },
  {
    icon: FileCheck,
    title: "Facturas con Exoneración",
    description:
      "Emite facturas electrónicas con exoneración de IVA de forma sencilla, cumpliendo con la normativa vigente de Hacienda.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-20 md:py-32 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas para facturación electrónica profesional en un solo lugar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
