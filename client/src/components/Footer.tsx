/**
 * Footer Component
 * Pie de página con información de contacto y enlaces
 * Diseño: Minimalismo Corporativo Moderno
 * - Fondo azul profundo
 * - Texto blanco con jerarquía clara
 * - Espaciado generoso
 */

import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-800">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Fáctico</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              La solución más simple para factura electrónica en Costa Rica. Desde 2017 ayudando a empresas y trabajadores independientes.
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
                <Link href="/factico-api" className="text-gray-400 hover:text-white transition-colors">
                  Fáctico API
                </Link>
              </li>
              <li>
                <Link href="/factico-pro" className="text-gray-400 hover:text-white transition-colors">
                  Fáctico PRO
                </Link>
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
                <span className="text-gray-400">+506 8610 9613</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">info@factico.net</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Fáctico. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
