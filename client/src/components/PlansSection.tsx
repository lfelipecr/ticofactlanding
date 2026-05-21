/**
 * Plans Section Component
 * Tres planes: Pre-pago, Fáctico Basic (plan principal) y Personal (a la medida)
 * Diseño: Minimalismo Corporativo Moderno
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import SalesContactDialog from "@/components/SalesContactDialog";

export default function PlansSection() {
  return (
    <section id="plans" className="bg-white py-20 md:py-32 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas para facturación electrónica profesional en Costa Rica.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* Plan Pre-pago */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
            <div className="bg-white p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pre-pago</h3>
              <p className="text-gray-600 mb-6">Ideal para volúmenes pequeños con pago único anual</p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">₡11,300</span>
                <span className="text-gray-600 ml-2">/año</span>
                <p className="text-sm text-gray-500 mt-2">IVA incluido · 50 comprobantes</p>
              </div>

              <SalesContactDialog>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-6 text-base font-semibold mb-6">
                  Solicitar acceso
                </Button>
              </SalesContactDialog>

              <div className="space-y-3 mt-auto">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Incluye:</p>
                {[
                  "50 comprobantes anuales",
                  "Todos los tipos de comprobante",
                  "Firma digital integrada y segura",
                  "Envío automático al Ministerio de Hacienda",
                  "Generación de PDF y XML",
                  "Acceso desde web y dispositivos móviles",
                  "Soporte técnico por correo",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan Fáctico Basic — destacado */}
          <div className="border-2 border-blue-600 rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 flex flex-col flex-1">
              <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                MÁS POPULAR
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fáctico Basic</h3>
              <p className="text-gray-600 mb-6">La solución perfecta para trabajadores independientes y pequeños negocios</p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">₡6,950</span>
                <span className="text-gray-600 ml-2">/mes</span>
                <p className="text-sm text-gray-500 mt-2">IVA incluido</p>
              </div>

              <a href="https://login.factico.net/signup" className="block mb-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-semibold">
                  Comenzar Ahora
                </Button>
              </a>

              <div className="space-y-3 mt-auto">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Incluye:</p>
                {[
                  "Emisión ilimitada de facturas electrónicas",
                  "Firma digital integrada y segura",
                  "Envío automático al Ministerio de Hacienda",
                  "Generación de PDF y XML",
                  "Acceso desde web y dispositivos móviles",
                  "Soporte técnico por correo",
                  "Gestión de clientes y productos",
                  "Recepción de facturas de compra desde el correo",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan Personal */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
            <div className="bg-white p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal</h3>
              <p className="text-gray-600 mb-6">Define tu presupuesto y necesidades, nosotros hacemos una propuesta a tu medida</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">A tu medida</span>
                <p className="text-sm text-gray-500 mt-2">Precio según tu necesidad</p>
              </div>

              <SalesContactDialog>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-6 text-base font-semibold mb-6">
                  Pedir información
                </Button>
              </SalesContactDialog>

              <div className="space-y-3 mt-auto">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Incluye:</p>
                {[
                  "Comprobantes según tu volumen",
                  "Todos los tipos de comprobante",
                  "Firma digital integrada y segura",
                  "Envío automático al Ministerio de Hacienda",
                  "Generación de PDF y XML",
                  "Acceso desde web y dispositivos móviles",
                  "Soporte dedicado",
                  "Propuesta ajustada a tu presupuesto",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer note */}
        <div className="max-w-5xl mx-auto mt-8 text-center">
          <p className="text-gray-500 text-sm">
            ¿Necesitas funcionalidades avanzadas de gestión empresarial?{" "}
            <Link href="/factico-pro" className="text-blue-600 font-semibold hover:underline">Conoce Fáctico PRO</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
