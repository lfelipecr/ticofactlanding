/**
 * Fáctico Sites — Página de producto
 * E-commerce y catálogos en línea para pymes costarricenses
 * SEO optimizado para búsquedas de e-commerce, tienda en línea, páginas web Costa Rica
 */

import { Link } from "wouter";
import {
  ArrowLeft,
  ShoppingCart,
  CreditCard,
  MessageCircle,
  Share2,
  FileText,
  Smartphone,
  Palette,
  BarChart3,
  Zap,
  Globe,
  Package,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalesContactDialog from "@/components/SalesContactDialog";
import { useSEO } from "@/hooks/useSEO";

const features = [
  {
    icon: ShoppingCart,
    title: "Tienda en línea completa",
    description:
      "Vende tus productos 24/7 con un catálogo atractivo, carrito de compras y proceso de pago fluido. Sin conocimientos técnicos.",
  },
  {
    icon: CreditCard,
    title: "Pagos con pasarelas locales",
    description:
      "Integración con las principales pasarelas de pago costarricenses: SINPE Móvil, tarjetas de crédito/débito y más. Tus clientes pagan como prefieren.",
  },
  {
    icon: FileText,
    title: "Facturación electrónica integrada",
    description:
      "Cada venta genera automáticamente su factura electrónica conforme al Ministerio de Hacienda. Sin trabajo extra, sin errores.",
  },
  {
    icon: MessageCircle,
    title: "Integración con WhatsApp",
    description:
      "Recibe pedidos y notificaciones directamente en WhatsApp. Tus clientes pueden consultar, pedir y pagar sin salir de la app.",
  },
  {
    icon: Share2,
    title: "Conectado a redes sociales",
    description:
      "Sincroniza tu catálogo con Facebook e Instagram. Vende donde están tus clientes con un solo clic.",
  },
  {
    icon: Smartphone,
    title: "100% responsive y móvil",
    description:
      "Tu tienda se ve perfecta en celulares, tablets y computadoras. La mayoría de tus clientes compran desde el teléfono.",
  },
  {
    icon: Palette,
    title: "Diseño personalizable",
    description:
      "Elige colores, logo y estilo que reflejen tu marca. Sin necesidad de diseñador ni programador.",
  },
  {
    icon: Package,
    title: "Gestión de inventario",
    description:
      "Control de stock en tiempo real. Cuando un producto se agota, se actualiza automáticamente en tu tienda.",
  },
  {
    icon: BarChart3,
    title: "Reportes de ventas",
    description:
      "Visualiza tus ventas, productos más populares y comportamiento de tus clientes desde un panel sencillo.",
  },
];

const useCases = [
  {
    icon: ShoppingCart,
    title: "Tienda en línea",
    description:
      "Vende productos físicos con carrito, checkout y pagos integrados. Ideal para ropa, accesorios, alimentos, artesanías y más.",
  },
  {
    icon: Globe,
    title: "Catálogo digital",
    description:
      "Muestra tus productos o servicios con precios y fotos. Tus clientes consultan y te contactan por WhatsApp para cerrar la venta.",
  },
  {
    icon: Zap,
    title: "Landing page de producto",
    description:
      "Una página enfocada en un solo producto o servicio, optimizada para convertir visitantes en clientes.",
  },
];

const integrations = [
  { name: "WhatsApp Business", color: "bg-green-100 text-green-700" },
  { name: "Facebook Shop", color: "bg-blue-100 text-blue-700" },
  { name: "Instagram Shopping", color: "bg-pink-100 text-pink-700" },
  { name: "SINPE Móvil", color: "bg-orange-100 text-orange-700" },
  { name: "Tarjetas de crédito", color: "bg-indigo-100 text-indigo-700" },
  { name: "Factura Electrónica", color: "bg-teal-100 text-teal-700" },
  { name: "Google Analytics", color: "bg-yellow-100 text-yellow-700" },
  { name: "Correo electrónico", color: "bg-gray-100 text-gray-700" },
];

export default function FacticoSites() {
  useSEO({
    title: "Fáctico Sites | Tiendas en Línea y E-commerce para Costa Rica",
    description:
      "Crea tu tienda en línea o catálogo digital en Costa Rica con facturación electrónica integrada, pagos con pasarelas locales, WhatsApp, Facebook e Instagram. Fácil de usar, sin programar.",
    canonical: "https://factico.net/factico-sites",
    ogTitle: "Fáctico Sites — Tu tienda en línea lista para vender en Costa Rica",
    ogDescription:
      "E-commerce y catálogos digitales para pymes costarricenses. Pagos locales, facturación electrónica automática, WhatsApp y redes sociales integradas.",
    keywords:
      "tienda en línea costa rica, e-commerce costa rica, crear tienda virtual costa rica, catálogo digital, pagina web para vender, ecommerce pymes costa rica, tienda online costa rica, facturación electrónica ecommerce",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#0D2137] to-[#0A3D62] text-white py-20 md:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm mb-6 block"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <div className="inline-block bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
              E-commerce y Catálogos Digitales
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fáctico{" "}
              <span className="text-cyan-400">Sites</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
              Tu tienda en línea lista para vender, sin complicaciones.
            </p>

            <p className="text-lg text-blue-200 mb-10 max-w-2xl">
              Crea tu e-commerce o catálogo digital con pagos locales, facturación electrónica automática e integración con WhatsApp, Facebook e Instagram. Sin programar, sin contratar desarrolladores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <SalesContactDialog>
                <Button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-6 text-base rounded-lg">
                  Pedir información
                </Button>
              </SalesContactDialog>
              <a href="#features">
                <Button
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base rounded-lg"
                >
                  Ver características
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="bg-cyan-50 border-y border-cyan-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Vende en línea como las grandes empresas, con la simplicidad que necesita tu pyme.
            </h2>
            <p className="text-gray-600 text-lg">
              Fáctico Sites no es solo una página web — es tu canal de ventas digital completo, conectado con tu inventario, tu facturación electrónica y tus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para vender en línea
            </h2>
            <p className="text-gray-600 text-lg">
              Una solución completa diseñada para pymes costarricenses que quieren vender más sin complicarse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué tipo de sitio puedo crear?
            </h2>
            <p className="text-gray-600 text-lg">
              Desde una tienda completa hasta un catálogo sencillo — elige el formato que mejor se adapte a tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((uc, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <uc.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{uc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrado con las herramientas que ya usas
            </h2>
            <p className="text-gray-600 text-lg">
              Conectamos tu tienda con los canales de venta, pago y comunicación más populares de Costa Rica.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {integrations.map((integration, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${integration.color}`}
              >
                {integration.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Factico Sites */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  ¿Por qué Fáctico Sites?
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      title: "Hecho para Costa Rica",
                      desc: "Pasarelas de pago locales, facturación electrónica según Hacienda y soporte en español.",
                    },
                    {
                      title: "Sin programadores",
                      desc: "Configura y administra tu tienda desde un panel sencillo. No necesitas saber de tecnología.",
                    },
                    {
                      title: "Todo integrado",
                      desc: "Inventario, facturación, pagos y comunicación en un solo lugar. Sin sistemas desconectados.",
                    },
                    {
                      title: "Soporte local",
                      desc: "Equipo costarricense que entiende tu negocio y te acompaña en el proceso.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0A1628] to-[#0A3D62] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">¿Listo para vender en línea?</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Fáctico Sites está en desarrollo. Si te interesa ser de los primeros en tener tu tienda en línea con todas estas características, contáctanos y te informamos cuando esté disponible.
                </p>
                <SalesContactDialog>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-6 text-base">
                    Pedir información
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </SalesContactDialog>
                <p className="text-blue-300 text-xs text-center mt-4">
                  Sin compromiso. Te contactamos con más detalles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu tienda en línea, lista para vender
          </h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
            Únete a las pymes costarricenses que ya venden en línea con Fáctico. Pide información hoy y te contamos cómo empezar.
          </p>
          <SalesContactDialog>
            <Button className="bg-white text-cyan-700 hover:bg-cyan-50 font-semibold px-10 py-6 text-base rounded-lg">
              Pedir información
            </Button>
          </SalesContactDialog>
        </div>
      </section>

      <Footer />
    </div>
  );
}
