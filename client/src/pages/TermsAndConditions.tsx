/**
 * Página: Términos y Condiciones
 * Factico.net - Facturación Electrónica para Costa Rica
 */

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Términos y Condiciones del Servicio</h1>
          <p className="text-gray-500 mt-2">Última actualización: Mayo 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 leading-relaxed">
              Al registrarse y utilizar factico.net, el usuario acepta estos términos, regulados bajo las leyes de la República de Costa Rica, incluyendo la Ley N° 7472.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Descripción del Servicio</h2>
            <p className="text-gray-700 leading-relaxed">
              factico.net es un software como servicio (SaaS) que facilita la emisión y recepción de comprobantes electrónicos validados por el Ministerio de Hacienda de Costa Rica.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Obligaciones del Usuario</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Seguridad</h3>
                <p className="text-gray-700 leading-relaxed">
                  El usuario es responsable de mantener la confidencialidad de su cuenta y crear contraseñas fuertes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Uso Lícito</h3>
                <p className="text-gray-700 leading-relaxed">
                  La plataforma debe utilizarse exclusivamente para fines lícitos. Está prohibido el uso para fraudes fiscales, suplantación de identidad o lavado de dinero.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Custodia de Llaves</h3>
                <p className="text-gray-700 leading-relaxed">
                  El usuario no debe compartir sus llaves criptográficas ni credenciales del Ministerio de Hacienda con personas ajenas a su operación comercial.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Pagos y Facturación</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>El acceso al servicio se rige por un modelo de suscripción.</li>
              <li>Los métodos de pago aceptados son: tarjeta de crédito/débito, SINPE y transferencias bancarias.</li>
              <li>
                <strong>Puntualidad y Fondos:</strong> El usuario se compromete a realizar el pago puntual del servicio. En caso de autorizar cargos automáticos a tarjetas de crédito o débito, el usuario asume la responsabilidad de asegurar que la tarjeta vinculada cuente con los fondos suficientes en la fecha de cobro programada.
              </li>
              <li>La falta de pago, la insuficiencia de fondos o el rechazo del cargo facultará a factico.net para suspender el servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo el código, diseño, logotipos y arquitectura de factico.net son propiedad exclusiva de Dagoberto Montero Araya. Se otorga una licencia de uso temporal, no exclusiva e intransferible mientras la suscripción esté activa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitación de Responsabilidad</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>factico.net no asume responsabilidad por la intermitencia en los servidores del Ministerio de Hacienda.</li>
              <li>En caso de fallo comprobable atribuible exclusivamente a la plataforma factico.net que resulte en una pérdida para el usuario, la responsabilidad máxima económica a indemnizar se limitará al monto total pagado por el cliente por concepto de suscripciones durante un (1) año de servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Suspensión y Terminación</h2>
            <p className="text-gray-700 leading-relaxed">
              factico.net se reserva el derecho de suspender o cancelar cuentas que incumplan estos Términos, sin derecho a reembolso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Legislación y Jurisdicción</h2>
            <p className="text-gray-700 leading-relaxed">
              Cualquier disputa relacionada con estos términos se someterá a la jurisdicción de los tribunales competentes de la República de Costa Rica.
            </p>
          </section>

        </div>

        {/* Footer navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link href="/privacy" className="text-blue-600 hover:underline font-medium">Política de Privacidad</Link>
          <Link href="/cookies" className="text-blue-600 hover:underline font-medium">Política de Cookies</Link>
          <Link href="/" className="text-blue-600 hover:underline font-medium">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
