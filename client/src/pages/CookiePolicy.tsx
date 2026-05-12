/**
 * Página: Política de Cookies
 * Factico.net - Facturación Electrónica para Costa Rica
 */

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Política de Cookies</h1>
          <p className="text-gray-500 mt-2">Última actualización: Mayo 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. ¿Qué son las Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, teléfono o tablet) cuando visita un sitio web. Permiten que el sitio recuerde sus preferencias y acciones durante un período de tiempo, para que no tenga que volver a introducir esa información cada vez que visite el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Tipos de Cookies que Utilizamos</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Cookies Estrictamente Necesarias</h3>
                  <span className="text-xs text-blue-600 font-medium">Siempre activas</span>
                </div>
                <div className="px-4 py-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Son esenciales para el funcionamiento básico del sitio web y la plataforma. Incluyen cookies de sesión para mantener al usuario autenticado, preferencias de idioma y configuraciones de seguridad. Sin estas cookies, el servicio no puede funcionar correctamente.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Cookies de Rendimiento y Analítica</h3>
                  <span className="text-xs text-gray-500 font-medium">Requieren consentimiento</span>
                </div>
                <div className="px-4 py-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Nos permiten contar las visitas y fuentes de tráfico para medir y mejorar el rendimiento del sitio. Toda la información que recopilan estas cookies es agregada y, por lo tanto, anónima. Utilizamos herramientas de analítica web para entender cómo los usuarios interactúan con nuestro sitio.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Cookies de Funcionalidad</h3>
                  <span className="text-xs text-gray-500 font-medium">Requieren consentimiento</span>
                </div>
                <div className="px-4 py-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Permiten que el sitio recuerde las elecciones que realiza el usuario (como su nombre de usuario, idioma o región) y proporcione características mejoradas y más personalizadas. También pueden utilizarse para recordar cambios realizados en el tamaño del texto, fuentes y otras partes de las páginas web que puede personalizar.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cookies de Terceros</h2>
            <p className="text-gray-700 leading-relaxed">
              Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas. Estos servicios pueden incluir herramientas de análisis web. Estos terceros tienen sus propias políticas de privacidad y factico.net no tiene control sobre las cookies que estos servicios puedan instalar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Duración de las Cookies</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Tipo</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Duración</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Descripción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Sesión</td>
                    <td className="px-4 py-3 text-gray-700">Al cerrar el navegador</td>
                    <td className="px-4 py-3 text-gray-600">Se eliminan automáticamente cuando cierra el navegador</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Persistentes</td>
                    <td className="px-4 py-3 text-gray-700">Hasta 1 año</td>
                    <td className="px-4 py-3 text-gray-600">Permanecen en su dispositivo hasta que expiran o las elimina manualmente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cómo Gestionar las Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su dispositivo y configurar la mayoría de los navegadores para que no las acepten. Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Para gestionar las cookies en su navegador, consulte la ayuda de su navegador específico:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
              <li>Mozilla Firefox: Opciones → Privacidad y Seguridad</li>
              <li>Safari: Preferencias → Privacidad</li>
              <li>Microsoft Edge: Configuración → Privacidad, búsqueda y servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cambios en esta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o reglamentarias. Le recomendamos que revise esta política regularmente para estar informado sobre nuestro uso de cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Si tiene alguna pregunta sobre nuestro uso de cookies, puede contactarnos en:{" "}
              <a href="mailto:info@factico.net" className="text-blue-600 hover:underline">info@factico.net</a>
            </p>
          </section>

        </div>

        {/* Footer navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link href="/terms" className="text-blue-600 hover:underline font-medium">Términos y Condiciones</Link>
          <Link href="/privacy" className="text-blue-600 hover:underline font-medium">Política de Privacidad</Link>
          <Link href="/" className="text-blue-600 hover:underline font-medium">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
