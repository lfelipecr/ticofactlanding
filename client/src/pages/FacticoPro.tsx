/**
 * Fáctico PRO Page
 * La versión más avanzada de Fáctico, orientada a pymes costarricenses.
 * Diseño: Minimalismo Corporativo Moderno
 * - Paleta: Azul profundo (#0052CC), verde esmeralda, grises neutros
 * - Tipografía: Poppins (headings) + Inter (body)
 */

import { Link } from "wouter";
import {
  ArrowLeft,
  Package,
  BookOpen,
  FileText,
  ShoppingCart,
  Users,
  UserCheck,
  Building2,
  Warehouse,
  Landmark,
  BarChart3,
  CheckCircle2,
  Mail,
  Cloud,
  ShieldCheck,
  HardDriveDownload,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalesContactDialog from "@/components/SalesContactDialog";

const modules = [
  {
    icon: Package,
    title: "Manejo de Inventario",
    description:
      "Controla tus productos, existencias y movimientos en tiempo real. Alertas de stock mínimo, trazabilidad por lote y ajustes de inventario sin complicaciones.",
  },
  {
    icon: BookOpen,
    title: "Módulo Contable",
    description:
      "Contabilidad integrada con tu operación diaria. Asientos automáticos, catálogo de cuentas configurable y estados financieros listos para tu contador.",
  },
  {
    icon: FileText,
    title: "Cotizaciones",
    description:
      "Genera cotizaciones profesionales en segundos, conviértelas en facturas con un clic y dale seguimiento al estado de cada propuesta.",
  },
  {
    icon: ShoppingCart,
    title: "Órdenes de Compra",
    description:
      "Gestiona tus proveedores y órdenes de compra desde un solo lugar. Recibe mercadería, controla costos y mantén tu inventario siempre actualizado.",
  },
  {
    icon: Users,
    title: "Nómina",
    description:
      "Calcula planillas, deducciones y cargas sociales conforme a la legislación costarricense. Genera los reportes para la CCSS y el Ministerio de Hacienda.",
  },
  {
    icon: UserCheck,
    title: "Recursos Humanos",
    description:
      "Administra tu equipo: expedientes digitales, vacaciones, permisos, evaluaciones y toda la información de tus colaboradores en un solo sistema.",
  },
  {
    icon: Building2,
    title: "Multiusuario y Multisucursal",
    description:
      "Agrega tantos usuarios y sucursales como necesites. Cada usuario tiene su propio perfil de acceso y permisos según su rol en la empresa.",
  },
  {
    icon: Warehouse,
    title: "Multibodega",
    description:
      "Gestiona el inventario de varias bodegas de forma independiente o consolidada. Traslados entre bodegas, reportes por ubicación y control total.",
  },
  {
    icon: Landmark,
    title: "Bancos",
    description:
      "Registra tus cuentas bancarias, concilia movimientos y lleva el control de tus flujos de caja sin salir del sistema.",
  },
  {
    icon: BarChart3,
    title: "Reportería Avanzada",
    description:
      "Dashboards y reportes detallados de ventas, inventario, finanzas y más. Toma decisiones basadas en datos reales de tu negocio.",
  },
  {
    icon: Wrench,
    title: "Módulos a la Medida",
    description:
      "Si tu negocio tiene una necesidad muy específica que los módulos estándar no cubren, desarrollamos funcionalidades personalizadas para adaptarnos exactamente a tu operación.",
  },
];

const cloudFeatures = [
  {
    icon: Cloud,
    title: "100% en la nube",
    description:
      "Accedé a Fáctico PRO desde cualquier dispositivo con conexión a internet: computadora, tablet o celular. Sin instalaciones, sin servidores propios.",
  },
  {
    icon: HardDriveDownload,
    title: "Respaldos automáticos",
    description:
      "Tu información se respalda automáticamente todos los días. Nunca perdés datos por un fallo de hardware o un error humano.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad robusta",
    description:
      "Conexiones cifradas, control de acceso por roles y auditoría de cambios. Tu información financiera y operativa siempre protegida.",
  },
];

const differentiators = [
  {
    title: "Pensado para pymes",
    description:
      "No es un ERP complejo ni está diseñado para grandes corporaciones. Fáctico PRO está hecho para que una pyme costarricense lo adopte sin necesitar un equipo de TI.",
  },
  {
    title: "Fácil de usar",
    description:
      "Interfaz intuitiva que cualquier colaborador puede aprender en horas, no en semanas. Menos tiempo capacitando, más tiempo produciendo.",
  },
  {
    title: "Todo integrado",
    description:
      "Facturación electrónica, inventario, contabilidad y nómina en un solo sistema. Sin exportar archivos entre programas ni duplicar información.",
  },
  {
    title: "Planes a la medida",
    description:
      "Pagás solo por los módulos que necesitás. Si tu negocio crece, Fáctico PRO crece con vos.",
  },
];

export default function FacticoPro() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003d99] via-[#0052CC] to-[#0066ff] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
              Software de Gestión para Pymes
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fáctico PRO
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed">
              El control total de tu pyme, sin complicaciones.
            </p>
            <p className="text-lg text-blue-200 mb-10 leading-relaxed">
              Inventario, contabilidad, nómina, RRHH, compras y más — todo integrado en la nube, sin la complejidad de un ERP, con la facilidad que tu equipo necesita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <SalesContactDialog>
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg">
                  Pedir información
                </Button>
              </SalesContactDialog>
              <a href="#modules">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
                >
                  Ver módulos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Not an ERP banner */}
      <section className="py-14 bg-emerald-50 border-y border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl font-bold text-gray-900 mb-3">
              Potente como un ERP. Simple como debe ser.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fáctico PRO no es un ERP pensado para grandes corporaciones. Es un sistema de gestión diseñado específicamente para <strong>pymes costarricenses</strong> que quieren tener el control de sus finanzas y operaciones sin complicarse: fácil de adoptar, fácil de usar y con todo lo que realmente necesitás.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud / Security / Backups */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cloudFeatures.map((cf) => {
              const Icon = cf.icon;
              return (
                <div key={cf.title} className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{cf.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cf.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Módulos disponibles
            </h2>
            <p className="text-lg text-gray-600">
              Cada módulo está integrado con los demás. No importa por dónde empieces, todo trabaja junto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modules.map((mod) => {
              const Icon = mod.icon;
              const isCustom = mod.title === "Módulos a la Medida";
              return (
                <div
                  key={mod.title}
                  className={`p-6 border rounded-xl hover:shadow-md transition-all duration-200 group ${
                    isCustom
                      ? "border-emerald-200 bg-emerald-50 hover:border-emerald-300"
                      : "border-gray-200 bg-white hover:border-blue-200"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                      isCustom
                        ? "bg-emerald-100 group-hover:bg-emerald-200"
                        : "bg-blue-50 group-hover:bg-blue-100"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isCustom ? "text-emerald-600" : "text-blue-600"}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{mod.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{mod.description}</p>
                  {isCustom && (
                    <span className="inline-block mt-3 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Desarrollo personalizado
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué Fáctico PRO?
            </h2>
            <p className="text-lg text-gray-600">
              Hay muchas opciones en el mercado. Estas son las razones por las que Fáctico PRO es diferente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{d.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planes a la medida
            </h2>
            <p className="text-lg text-gray-600">
              Cada negocio es diferente. Contáctanos y armamos un plan con los módulos que necesitás, al precio que se ajusta a tu realidad.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Plan personalizado</h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Seleccionás los módulos que necesitás hoy y agregás más cuando tu negocio lo requiera. Sin pagar por funcionalidades que no usás.
            </p>
            <ul className="text-left space-y-3 mb-10 max-w-sm mx-auto">
              {[
                "Módulos seleccionables",
                "Usuarios ilimitados",
                "Soporte incluido",
                "Capacitación inicial",
                "Actualizaciones continuas",
                "Módulos personalizados disponibles",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
            <SalesContactDialog>
              <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-10 py-6 text-lg w-full sm:w-auto">
                Pedir información
              </Button>
            </SalesContactDialog>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tomá el control de tu pyme, sin complicaciones
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Contáctanos y te mostramos cómo Fáctico PRO puede adaptarse a tu negocio. Sin compromisos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SalesContactDialog>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Pedir información
              </Button>
            </SalesContactDialog>
            <a href="tel:+50686109613">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold px-8 py-6 text-lg"
              >
                +506 8610 9613
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
