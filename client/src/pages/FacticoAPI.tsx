/**
 * Fáctico API Page
 * Página de presentación del API de Facturación Electrónica para Costa Rica
 * Diseño: Minimalismo Corporativo Moderno
 * - Paleta: Azul profundo (#0052CC), verde esmeralda, grises neutros
 * - Tipografía: Poppins (headings) + Inter (body)
 */

import { Link } from "wouter";
import { Check, Code2, FileText, Key, Send, Search, Shield, Users, Zap, ArrowLeft, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalesContactDialog from "@/components/SalesContactDialog";
import { useSEO } from "@/hooks/useSEO";

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
      "API RESTful con documentación clara. Llama a unos pocos endpoints y el API hace todo el trabajo pesado por ti. Compatible con cualquier lenguaje o plataforma.",
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
            <Link href="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm mb-8">
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

            <div className="flex flex-col sm:flex-row gap-4">
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
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Fáctico API es un servicio REST que abstrae toda la complejidad técnica de la facturación electrónica en Costa Rica. Desde la generación de la clave numérica hasta la firma digital con certificado y el envío al sistema de Hacienda, el API se encarga de todo.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Está diseñado para <strong>freelancers, agencias y empresas</strong> que necesitan integrar facturación electrónica en sus sistemas sin tener que implementar la firma de comprobantes ni gestionar los protocolos de comunicación con el Ministerio de Hacienda.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qué hace el API
            </h2>
            <p className="text-lg text-gray-600">
              Un conjunto completo de funcionalidades para cubrir todo el ciclo de vida de un comprobante electrónico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-md transition-all duration-200 bg-white"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Para quién es?
            </h2>
            <p className="text-lg text-gray-600">
              Fáctico API está pensado para quienes necesitan facturar electrónicamente sin complicarse con la implementación técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.title}
                  className="p-8 bg-white border border-gray-200 rounded-xl text-center"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{uc.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{uc.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprobantes compartidos */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Un paquete, múltiples clientes
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Con Fáctico API puedes distribuir los comprobantes de un mismo paquete entre varios clientes. Ideal para agencias que gestionan la facturación de múltiples empresas desde una sola integración.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planes
            </h2>
            <p className="text-lg text-gray-600">
              Elige el plan que se adapte a tu volumen de comprobantes. Sin contratos, sin sorpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl overflow-hidden border-2 transition-shadow ${
                  plan.highlight
                    ? "border-blue-600 shadow-xl shadow-blue-100"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {/* Card Header */}
                <div
                  className={`p-8 ${
                    plan.highlight
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white"
                      : "bg-gray-50 text-gray-900"
                  }`}
                >
                  {plan.highlight && (
                    <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                      Más popular
                    </div>
                  )}
                  <h3
                    className={`text-2xl font-bold mb-1 ${
                      plan.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlight ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-2">
                    <span
                      className={`text-4xl font-bold ${
                        plan.highlight ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-base ml-1 ${
                          plan.highlight ? "text-blue-200" : "text-gray-500"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      plan.highlight ? "text-blue-100" : "text-blue-600"
                    }`}
                  >
                    {plan.comprobantes}
                  </p>
                </div>

                {/* Features */}
                <div className="p-8 bg-white">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <SalesContactDialog>
                    <Button
                      className={`w-full py-5 font-semibold ${
                        plan.highlight
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                    >
                      {plan.name === "Enterprise" ? "Contactar" : "Solicitar acceso"}
                    </Button>
                  </SalesContactDialog>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Todos los precios incluyen IVA. Los comprobantes no utilizados no se acumulan al mes siguiente.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para integrar facturación electrónica?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Escríbenos y te ayudamos a empezar. Respondemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SalesContactDialog>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contactar ventas
              </Button>
            </SalesContactDialog>
            <a href="tel:+50686109613">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold px-8 py-6 text-lg inline-flex items-center gap-2"
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
