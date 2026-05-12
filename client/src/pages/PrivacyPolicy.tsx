/**
 * Página: Política de Privacidad
 * Factico.net - Facturación Electrónica para Costa Rica
 */

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
          <p className="text-gray-500 mt-2">Última actualización: Mayo 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable de la Base de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              El responsable del tratamiento de los datos es <strong>Dagoberto Montero Araya</strong>, con cédula de identidad 2-0228-0986 y domicilio ubicado 100 m este de Correos de Costa Rica, Alajuela Centro, Costa Rica.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Recopilación de Datos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para el uso de la plataforma factico.net, recopilamos los siguientes datos:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-1">Datos de la cuenta</h3>
                <p className="text-gray-700 text-sm">Nombre, número de identificación (física o jurídica), correo electrónico y números de teléfono.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-1">Datos técnicos y operativos</h3>
                <p className="text-gray-700 text-sm">Llaves criptográficas emitidas por el Ministerio de Hacienda para la emisión de comprobantes electrónicos.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-1">Datos de terceros</h3>
                <p className="text-gray-700 text-sm">Información comercial de los clientes del usuario (nombres, identificaciones, correos) estrictamente necesaria para generar la facturación.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Finalidad del Tratamiento</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Los datos recopilados se utilizan exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Proveer el servicio de facturación electrónica.</li>
              <li>Conectar y transmitir los comprobantes al Ministerio de Hacienda.</li>
              <li>Proveer soporte técnico y servicio al cliente.</li>
              <li>Gestión de cobro y facturación del servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Almacenamiento y Transferencia Transfronteriza</h2>
            <p className="text-gray-700 leading-relaxed">
              La base de datos se almacena en servidores ubicados en México y Estados Unidos. Al aceptar esta política, el usuario otorga su consentimiento informado y expreso para la transferencia transfronteriza de sus datos a estas jurisdicciones, manteniendo los mismos estándares de seguridad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Compartición con Terceros</h2>
            <p className="text-gray-700 leading-relaxed">
              factico.net no vende, alquila ni comercializa datos personales. Los datos se comparten únicamente con proveedores de infraestructura tecnológica (alojamiento en la nube) necesarios para la operatividad del sistema. Nos reservamos el nombre de dichos proveedores por razones de seguridad perimetral. Todo proveedor opera bajo estrictos acuerdos de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Seguridad de los Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas técnicas y organizativas para proteger la información contra acceso no autorizado, alteración o destrucción. Sin embargo, ningún sistema es infalible, por lo que el usuario también asume la responsabilidad de proteger sus credenciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Derechos ARCO</h2>
            <p className="text-gray-700 leading-relaxed">
              Conforme a la <strong>Ley N° 8968</strong>, el usuario es el titular de sus datos y puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) enviando una solicitud formal al correo electrónico:{" "}
              <a href="mailto:info@factico.net" className="text-blue-600 hover:underline">info@factico.net</a>
            </p>
          </section>

        </div>

        {/* Footer navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link href="/terms" className="text-blue-600 hover:underline font-medium">Términos y Condiciones</Link>
          <Link href="/cookies" className="text-blue-600 hover:underline font-medium">Política de Cookies</Link>
          <Link href="/" className="text-blue-600 hover:underline font-medium">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
