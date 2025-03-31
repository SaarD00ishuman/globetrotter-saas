
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AiTimelineGuide from "@/components/AiTimelineGuide";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="how-ai-works">
          <AiTimelineGuide />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="cta">
          <CtaSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
