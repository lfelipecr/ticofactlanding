/**
 * Plans Section Component
 * Planes de precios con comparativa
 * Diseño: Minimalismo Corporativo Moderno
 * - Fondo blanco
 * - Tarjetas destacadas con sombra
 * - Plan recomendado con borde azul
 * - Tipografía clara y jerarquizada
 */

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plan 25",
    price: "18",
    period: "anual",
    description: "Perfecto para emprendedores",
    documents: "Hasta 25 documentos al año",
    features: [
      "Firma digital integrada",
      "Envío automático a Hacienda",
      "PDF y XML generados",
      "Soporte por correo",
      "Acceso web",
    ],
    highlighted: false,
  },
  {
    name: "Plan 60",
    price: "28",
    period: "anual",
    description: "Para negocios en crecimiento",
    documents: "Hasta 60 documentos al año",
    features: [
      "Firma digital integrada",
      "Envío automático a Hacienda",
      "PDF y XML generados",
      "Soporte por correo",
      "Acceso web",
      "Gestión de clientes",
      "Reportes básicos",
    ],
    highlighted: true,
  },
  {
    name: "Plan Plus Ilimitado",
    price: "70",
    period: "anual",
    description: "Sin límites de documentos",
    documents: "Documentos ilimitados",
    features: [
      "Firma digital integrada",
      "Envío automático a Hacienda",
      "PDF y XML generados",
      "Soporte prioritario",
      "Acceso web y móvil",
      "Gestión completa de clientes",
      "Reportes avanzados",
      "Integración API",
    ],
    highlighted: false,
  },
];

export default function PlansSection() {
  return (
    <section id="plans" className="bg-white py-20 md:py-32 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Planes Transparentes
          </h2>
          <p className="text-xl text-gray-600">
            Elige el plan que mejor se adapte a tu negocio. Sin sorpresas, sin contratos ocultos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const isHighlighted = plan.highlighted;
            return (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  isHighlighted
                    ? "border-2 border-blue-600 shadow-xl md:scale-105"
                    : "border border-gray-200 hover:shadow-lg"
                }`}
              >
                {/* Card Content */}
                <div className={`p-8 ${isHighlighted ? "bg-gradient-to-b from-blue-50 to-white" : "bg-white"}`}>
                  {/* Badge */}
                  {isHighlighted && (
                    <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      MÁS POPULAR
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">₡{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                    <p className="text-sm text-gray-500 mt-2">+ IVA</p>
                  </div>

                  {/* Documents */}
                  <p className="text-gray-700 font-medium mb-6 pb-6 border-b border-gray-200">
                    {plan.documents}
                  </p>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mb-8 py-6 text-lg font-medium ${
                      isHighlighted
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                    variant={isHighlighted ? "default" : "outline"}
                  >
                    Comenzar
                  </Button>

                  {/* Features List */}
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Incluye:</p>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas algo personalizado?</h3>
          <p className="text-gray-600 mb-6">
            Para volúmenes especiales o integraciones empresariales, contáctanos para un plan personalizado.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  );
}
