/**
 * Features Section Component
 * Características principales con iconografía
 * Diseño: Minimalismo Corporativo Moderno
 * - Fondo gris claro alternado
 * - Grid de 3 columnas (responsive)
 * - Tarjetas con sombras suaves
 * - Iconografía minimalista
 */

import { Cloud, Lock, Smartphone, FileText, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "En la Nube",
    description: "Accede desde cualquier dispositivo, en cualquier momento. Sin instalaciones complicadas.",
  },
  {
    icon: Lock,
    title: "Seguridad Garantizada",
    description: "Firma digital integrada y encriptación de datos. Cumple con estándares internacionales.",
  },
  {
    icon: Smartphone,
    title: "Móvil Optimizado",
    description: "Interfaz responsiva diseñada para trabajar perfectamente en teléfonos y tablets.",
  },
  {
    icon: FileText,
    title: "Documentos XML y PDF",
    description: "Genera automáticamente ambos formatos. Listo para enviar a clientes y Hacienda.",
  },
  {
    icon: Zap,
    title: "Integración Automática",
    description: "Gestión automática ante el Ministerio de Hacienda. Sin trámites manuales.",
  },
  {
    icon: BarChart3,
    title: "Reportes y Análisis",
    description: "Visualiza tus ventas, ingresos y documentos emitidos en tiempo real.",
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
