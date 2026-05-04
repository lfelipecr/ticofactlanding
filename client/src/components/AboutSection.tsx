/**
 * About Section Component
 * Información sobre la empresa y confianza
 * Diseño: Minimalismo Corporativo Moderno
 * - Fondo gris claro
 * - Contenido asimétrico
 * - Énfasis en valores y certificaciones
 */

import { Award, Users, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20 md:py-32 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido Izquierdo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Confianza y Experiencia
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Con más de 11 años en el mercado costarricense, hemos ayudado a miles de empresas y trabajadores independientes a cumplir con sus obligaciones fiscales de forma segura y eficiente.
              </p>
            </div>

            {/* Valores */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Certificado y Validado</h3>
                  <p className="text-gray-600">
                    Validado por GS1 Costa Rica. Cumple 100% con la Resolución 4.4 del Ministerio de Hacienda.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Soporte Dedicado</h3>
                  <p className="text-gray-600">
                    Equipo de soporte técnico disponible para resolver tus dudas y problemas rápidamente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">En Constante Evolución</h3>
                  <p className="text-gray-600">
                    Actualizamos regularmente nuestro sistema para mantener compatibilidad con nuevas resoluciones.
                  </p>
                </div>
              </div>
            </div>

            {/* Misión y Visión */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Nuestro Compromiso</h4>
              <p className="text-gray-700 leading-relaxed">
                Generar soluciones tecnológicas eficientes, confiables y seguras que agreguen valor a tu negocio. Buscamos ser tu mejor aliado en facturación electrónica.
              </p>
            </div>
          </div>

          {/* Lado Derecho - Estadísticas */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-5xl font-bold text-blue-600 mb-2">11+</p>
              <p className="text-gray-600 text-lg">Años de experiencia en el mercado</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-5xl font-bold text-blue-600 mb-2">1000+</p>
              <p className="text-gray-600 text-lg">Clientes activos y satisfechos</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-5xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-gray-600 text-lg">Conformidad con normativa legal</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-white">
              <h4 className="text-lg font-bold mb-4">Certificado Resolución 4.4</h4>
              <p className="text-blue-100 mb-6">
                Nuestro sistema ha sido validado por GS1 Costa Rica, cumpliendo al 100% con la normativa del Ministerio de Hacienda.
              </p>
              <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium">
                ✓ Validado y Certificado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
