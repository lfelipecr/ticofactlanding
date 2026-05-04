/**
 * Home Page - Landing Page Principal
 * Integración de todos los componentes
 * Diseño: Minimalismo Corporativo Moderno
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlansSection from "@/components/PlansSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PlansSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
