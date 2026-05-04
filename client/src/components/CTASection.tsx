/**
 * CTA Section Component
 * Llamada a la acción final
 * Diseño: Minimalismo Corporativo Moderno
 * - Fondo azul profundo con gradiente
 * - Texto blanco con contraste alto
 * - Botones destacados
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Comienza tu Facturación Electrónica Hoy
            </h2>
            <p className="text-xl text-blue-100">
              Únete a más de 100 empresas y trabajadores independientes en Costa Rica que confían en Factico.net.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg font-semibold flex items-center gap-2 justify-center">
              Registrarse Gratis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-blue-600 px-8 py-6 text-lg rounded-lg font-semibold"
            >
              Contactar Ventas
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 border-t border-blue-500">
            <div className="text-center">
              <p className="text-blue-100 text-sm">✓ Conforme con Hacienda</p>
            </div>
            <div className="text-center">
              <p className="text-blue-100 text-sm">✓ Desde 2017</p>
            </div>
            <div className="text-center">
              <p className="text-blue-100 text-sm">✓ 100+ clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
