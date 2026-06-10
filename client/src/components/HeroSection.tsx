/**
 * Hero Section Component
 * Propuesta de valor principal con CTA
 * Diseño: Minimalismo Corporativo Moderno
 * - Layout asimétrico: contenido izquierda, espacio derecha
 * - Tipografía grande y audaz (Poppins)
 * - Espacios en blanco generosos
 * - Fondo blanco con línea divisoria sutil
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white py-20 md:py-32 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido Izquierdo */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                En el mercado desde 2017
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                El Asistente Digital de su Empresa
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fáctico le ayuda a emitir facturas electrónicas conformes con el Ministerio de Hacienda. Desde cualquier dispositivo, sin complicaciones.
              </p>
            </div>

            {/* Fático - Mobile */}
            <div className="flex md:hidden justify-center">
              <img
                src="/fatico-saludando.png"
                alt="Fático, el asistente digital de su empresa"
                className="max-h-64 w-auto"
              />
            </div>

            {/* Beneficios Rápidos */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Firma digital integrada y segura</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Gestión automática ante Hacienda</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Disponible en web y dispositivos móviles</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Borrador de declaración de IVA mensual</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Recepción de facturas de compra desde el correo</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://login.factico.net/signup">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                  Comenzar Ahora
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://go.screenpal.com/watch/cOhh0BntexM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-6 text-lg rounded-lg"
                >
                  Ver Demo
                </Button>
              </a>
            </div>

            {/* Estadísticas */}
            <div className="flex gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-blue-600">7+</p>
                <p className="text-sm text-gray-600">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">100+</p>
                <p className="text-sm text-gray-600">Clientes satisfechos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">100%</p>
                <p className="text-sm text-gray-600">Conformidad legal</p>
              </div>
            </div>
          </div>

          {/* Lado Derecho - Imagen Hero */}
          <div className="hidden md:flex justify-center">
            <img
              src="/fatico-saludando.png"
              alt="Fático, el asistente digital de su empresa"
              className="max-h-[520px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
