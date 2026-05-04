/**
 * Header Component
 * Navegación principal con logo y CTA
 * Diseño: Minimalismo Corporativo Moderno
 * - Fondo blanco con borde inferior sutil
 * - Tipografía clara y jerarquizada
 * - Espaciado generoso
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663539613072/SgpIsLtXZCiWhrKz.png"
            alt="Factico.net"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Características
          </button>
          <button
            onClick={() => scrollToSection("plans")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Planes
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Contacto
          </button>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex gap-3">
          <a href="https://login.factico.net/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Acceder
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
            >
              Planes
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
            >
              Contacto
            </button>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <a href="https://login.factico.net/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Acceder
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
