/**
 * Footer Component
 * Pie de página con información de contacto y enlaces
 * Diseño: Minimalismo Corporativo Moderno
 * - Fondo azul profundo
 * - Texto blanco con jerarquía clara
 * - Espaciado generoso
 */

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-800">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FE</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Factura CR</h3>
                <p className="text-xs text-gray-400">Electrónica</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solución profesional de factura electrónica para Costa Rica con cumplimiento normativo garantizado.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-white transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+506 2291-9100</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">info@facturacr.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">San José, Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Factura CR. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
