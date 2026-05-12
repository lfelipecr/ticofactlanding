/**
 * Componente: CookieConsent
 * Pop-up de consentimiento de cookies y políticas legales
 * Se muestra solo la primera vez que el usuario visita el sitio
 * Factico.net - Facturación Electrónica para Costa Rica
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Cookie, X, ChevronDown, ChevronUp } from "lucide-react";

const CONSENT_KEY = "factico_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Pequeño delay para no interrumpir la carga inicial
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ accepted: true, date: new Date().toISOString() }));
    setVisible(false);
  };

  const handleRejectOptional = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ accepted: false, date: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cookie className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">Privacidad y Cookies</span>
          </div>
          <button
            onClick={handleRejectOptional}
            className="text-blue-200 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="text-gray-700 text-sm leading-relaxed">
            Al utilizar <strong>factico.net</strong>, acepta nuestros{" "}
            <Link href="/terms" className="text-blue-600 hover:underline font-medium">
              Términos y Condiciones
            </Link>
            ,{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline font-medium">
              Política de Privacidad
            </Link>{" "}
            y el uso de cookies necesarias para el funcionamiento del servicio. Sus datos son tratados conforme a la{" "}
            <strong>Ley N° 8968</strong> de Costa Rica.
          </p>

          {/* Expandible detail */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 mt-3 transition-colors"
          >
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {expanded ? "Ver menos" : "Ver más detalles"}
          </button>

          {expanded && (
            <div className="mt-3 space-y-2 text-xs text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                <p><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio. Siempre activas.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                <p><strong>Cookies de analítica:</strong> Nos ayudan a mejorar el servicio midiendo el uso del sitio de forma anónima.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400 mt-1 flex-shrink-0" />
                <p><strong>Transferencia de datos:</strong> Sus datos se almacenan en servidores en México y Estados Unidos bajo estrictos acuerdos de confidencialidad.</p>
              </div>
              <p className="mt-2">
                Puede ejercer sus derechos ARCO escribiendo a{" "}
                <a href="mailto:info@factico.net" className="text-blue-600 hover:underline">info@factico.net</a>.
                Consulte nuestra{" "}
                <Link href="/cookies" className="text-blue-600 hover:underline">Política de Cookies</Link>{" "}
                para más información.
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="px-6 pb-5 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-colors"
          >
            Aceptar todo
          </button>
          <button
            onClick={handleRejectOptional}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg text-sm transition-colors"
          >
            Solo esenciales
          </button>
        </div>
      </div>
    </div>
  );
}
