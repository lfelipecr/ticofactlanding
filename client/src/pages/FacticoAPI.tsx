/**
 * Fáctico API Page
 * Página de presentación del API de Facturación Electrónica para Costa Rica
 * Diseño: Minimalismo Corporativo Moderno
 * - Paleta: Azul profundo (#0052CC), verde esmeralda, grises neutros
 * - Tipografía: Poppins (headings) + Inter (body)
 */

import { Link } from "wouter";
import {
  Check,
  Code2,
  FileText,
  Key,
  Send,
  Search,
  Shield,
  Users,
  Zap,
  ArrowLeft,
  Mail,
  Phone,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalesContactDialog from "@/components/SalesContactDialog";
import { useSEO } from "@/hooks/useSEO";

const API_DOCS_URL = "https://lfelipecr.github.io/factico-api/api/";

const features = [
  {
    icon: Key,
    title: "Generación de Clave",
    description:
      "El API genera automáticamente la clave numérica del comprobante según las especificaciones del Ministerio de Hacienda, sin que tengas que preocuparte por el formato.",
  },
  {
    icon: FileText,
    title: "Creación de XMLs",
    description:
      "Genera XMLs válidos para todos los tipos de comprobante: facturas electrónicas, tiquetes, notas de crédito, notas de débito, mensajes de receptor y más.",
  },
  {
    icon: Shield,
    title: "Firma Digital Integrada",
    description:
      "El API firma los comprobantes con certificado digital de forma transparente. No necesitas instalar ni gestionar certificados en tu sistema.",
  },
  {
    icon: Send,
    title: "Envío a Hacienda",
    description:
      "Envía los comprobantes firmados directamente al sistema de Hacienda (ATV) y gestiona los tokens de autenticación de forma automática.",
  },
  {
    icon: Search,
    title: "Consulta de Estado",
    description:
      "Consulta en tiempo real el estado de cualquier comprobante enviado: aceptado, rechazado o en proceso. Recibe el XML de respuesta de Hacienda.",
  },
  {
    icon: Code2,
    title: "Integración Simple",
    description:
      "API RESTful con documentación Swagger interactiva. Llama a unos pocos endpoints y el API hace todo el trabajo pesado por ti. Compatible con cualquier lenguaje o plataforma.",
    docsUrl: API_DOCS_URL,
  },
];

const plans = [
  {
    name: "Starter",
    price: "₡3,500",
    period: "/mes",
    comprobantes: "100 comprobantes",
    description: "Ideal para freelancers y pequeños proyectos",
    highlight: false,
    features: [
      "100 comprobantes por mes",
      "Todos los tipos de comprobante",
      "Firma digital incluida",
      "Envío automático a Hacienda",
      "Consulta de estado",
      "Soporte por correo",
      "Distribución entre clientes",
      "Pago anual: ahorrá 2 meses de mensualidad",
    ],
  },
  {
    name: "Business",
    price: "₡9,500",
    period: "/mes",
    comprobantes: "1,000 comprobantes",
    description: "Para agencias y empresas con mayor volumen",
    highlight: true,
    features: [
      "1,000 comprobantes por mes",
      "Todos los tipos de comprobante",
      "Firma digital incluida",
      "Envío automático a Hacienda",
      "Consulta de estado",
      "Soporte prioritario",
      "Distribución entre clientes",
      "Mayor capacidad de procesamiento",
      "Pago anual: ahorrá 2 meses de mensualidad",
    ],
  },
  {
    name: "Enterprise",
    price: "A la medida",
    period: "",
    comprobantes: "Volumen personalizado",
    description: "Para grandes volúmenes o necesidades especiales",
    highlight: false,
    features: [
      "Comprobantes ilimitados",
      "Todos los tipos de comprobante",
      "Firma digital incluida",
      "Envío automático a Hacienda",
      "Consulta de estado",
      "Soporte dedicado",
      "Distribución entre clientes",
      "SLA personalizado",
      "Integración a medida",
    ],
  },
];

const useCases = [
  {
    icon: Users,
    title: "Freelancers y Desarrolladores",
    description:
      "Integra facturación electrónica en tus proyectos sin tener que implementar la firma digital ni lidiar con los protocolos de Hacienda.",
  },
  {
    icon: Zap,
    title: "Agencias de Software",
    description:
      "Ofrece facturación electrónica a múltiples clientes desde un solo paquete de comprobantes. Divide los comprobantes entre todos tus clientes.",
  },
  {
    icon: Code2,
    title: "Empresas con Sistemas Propios",
    description:
      "Conecta tu ERP, punto de venta o sistema de gestión al API de Fáctico y emite comprobantes electrónicos sin cambiar tu plataforma.",
  },
];

export default function FacticoAPI() {
  useSEO({
    title: "Fáctico API | API de Facturación Electrónica para Costa Rica",
    description:
      "API REST para facturación electrónica en Costa Rica. Genera la clave, crea XMLs, firma, envía a Hacienda y consulta el estado. Planes desde ₡3,500/mes. Ideal para freelancers, agencias y empresas.",
    canonical: "https://factico.net/factico-api",
    ogTitle: "Fáctico API — Facturación Electrónica como servicio",
    ogDescription:
      "Integra facturación electrónica en tu sistema sin complicaciones. El API se encarga de la firma digital, el envío a Hacienda y la consulta de estado. Planes desde ₡3,500/mes.",
    keywords:
      "api facturación electrónica costa rica, api hacienda costa rica, firma digital comprobantes, api factura electrónica, factico api",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0052CC] to-[#003d99] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <Link href="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm mb-6 block">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <div className="inline-block bg-blue-500/30 border border-blue-400/40 text-blue-100 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
              API de Facturación Electrónica
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fáctico API
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed">
              Todo el proceso de facturación electrónica en Costa Rica, expuesto como un API simple.
            </p>
            <p className="text-lg text-blue-200 mb-10 leading-relaxed">
              Genera la clave, crea los XMLs para cualquier tipo de comprobante, firma, envía a Hacienda y consulta el estado. Sin complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <SalesContactDialog>
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg">
                  Solicitar Acceso
                </Button>
              </SalesContactDialog>
              <a href="#plans">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
                >
                  Ver Planes
                </Button>
              </a>
              <a
                href={API_DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Ver documentación
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Qué es Fáctico API?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Fáctico API es un servicio que te permite integrar facturación electrónica en tu aplicación, sitio web o sistema sin tener que preocuparte por los detalles técnicos de la firma digital o los protocolos de Hacienda. Nosotros nos encargamos de todo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Es ideal para freelancers, agencias de software y empresas que desean ofrecer facturación electrónica a sus clientes sin complicarse con el desarrollo.
            </p>
            <a
              href={API_DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:underline"
            >
              <BookOpen className="w-5 h-5" />
              Documentación de la API (Swagger)
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Funcionalidades Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const docsUrl = "docsUrl" in feature ? feature.docsUrl : undefined;
              return (
                <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                  {docsUrl ? (
                    <a
                      href={docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Ver documentación
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Casos de Uso
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-700">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Planes y Precios
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Un paquete de comprobantes lo puedes dividir entre varios clientes. Elige el plan que mejor se adapte a tu necesidad. Precios con IVA incluido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg border-2 p-8 flex flex-col transition-all ${
                  plan.highlight
                    ? "border-blue-600 bg-blue-50 shadow-lg md:col-span-1 lg:col-span-1"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.highlight && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    Más Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.comprobantes}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-700 mb-6">{plan.description}</p>
                <SalesContactDialog>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mb-6">
                    Solicitar acceso
                  </Button>
                </SalesContactDialog>
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Annual Discount Banner */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
            <h3 className="text-lg font-bold text-green-900 mb-2">💰 Ahorrá con pago anual</h3>
            <p className="text-green-800">
              En los planes Starter y Business, si pagás de forma anual <strong>ahorrás 2 meses de mensualidad</strong>. Contactanos para más detalles.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para integrar facturación electrónica?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contactanos hoy y te ayudaremos a elegir el plan perfecto para tu necesidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SalesContactDialog>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
                Contactar Ventas
              </Button>
            </SalesContactDialog>
            <a href="mailto:info@factico.net">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg flex items-center gap-2 justify-center"
              >
                <Mail className="w-5 h-5" />
                info@factico.net
              </Button>
            </a>
            <a href="tel:+50686109613">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
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
