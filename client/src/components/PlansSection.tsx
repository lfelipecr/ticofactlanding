/**
 * Plans Section Component - Versión Simplificada
 * Un solo plan simple
 * Diseño: Minimalismo Corporativo Moderno
 */

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PlansSection() {
  return (
    <section id="plans" className="bg-white py-20 md:py-32 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plan Simple y Directo
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas para facturación electrónica profesional en Costa Rica.
          </p>
        </div>

        {/* Single Plan Card */}
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-blue-600 rounded-lg overflow-hidden shadow-lg">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-8">
              <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                PLAN ÚNICO
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">Factico Basic</h3>
              <p className="text-gray-600 text-lg mb-6">La solución perfecta para trabajadores independientes y pequeños negocios</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-900">₡3,500</span>
                <span className="text-gray-600 ml-2">/mes</span>
                <p className="text-sm text-gray-500 mt-2">IVA incluido</p>
              </div>

              {/* CTA Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold mb-6">
                Comenzar Ahora
              </Button>

              {/* Features List */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Incluye:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Emisión ilimitada de facturas electrónicas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Firma digital integrada y segura</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Envío automático al Ministerio de Hacienda</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Generación de PDF y XML</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Acceso desde web y dispositivos móviles</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Soporte técnico por correo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestión de clientes y productos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                ¿Necesitas funcionalidades avanzadas? <a href="#contact" className="text-blue-600 font-semibold hover:underline">Contáctanos</a> para conocer nuestras otras soluciones de software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
