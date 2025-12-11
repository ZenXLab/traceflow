import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { EnhancedHeroSection } from "@/components/traceflow/EnhancedHeroSection";
import { EnhancedPipelineSection } from "@/components/traceflow/EnhancedPipelineSection";
import { VideoDemoSection } from "@/components/traceflow/VideoDemoSection";
import { ModulesGrid } from "@/components/traceflow/ModulesGrid";
import { FeatureCategories } from "@/components/traceflow/FeatureCategories";
import { EnhancedIndustrySolutions } from "@/components/traceflow/EnhancedIndustrySolutions";
import { EnhancedWorldFirstFeatures } from "@/components/traceflow/EnhancedWorldFirstFeatures";
import { CompetitiveMatrix } from "@/components/traceflow/CompetitiveMatrix";
import { EnhancedSecurityArchitecture } from "@/components/traceflow/EnhancedSecurityArchitecture";
import { ProximaAI } from "@/components/traceflow/ProximaAI";
import { StorySection } from "@/components/traceflow/StorySection";
import { CaseStudies } from "@/components/traceflow/CaseStudies";
import { Testimonials } from "@/components/traceflow/Testimonials";
import { EnhancedROICalculator } from "@/components/traceflow/EnhancedROICalculator";
import { PricingSection } from "@/components/traceflow/PricingSection";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollProgress } from "@/components/traceflow/ScrollProgress";
import { TechStackDiagram } from "@/components/traceflow/TechStackDiagram";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const Index = () => {
  useEffect(() => {
    // Update page title and meta
    document.title = "TRACEFLOW — Digital Cognition Infrastructure | Every Signal. One Intelligence.";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "TRACEFLOW is the world's first Digital Cognition Infrastructure by CropXon Innovations. Unify clickstream, observability, and multimodal feedback into a Zero-Trust, Hybrid-Ready Intelligence Layer.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <EnhancedNavigation />
      <main>
        <EnhancedHeroSection />
        <ScrollReveal animation="fade-up">
          <EnhancedPipelineSection />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <VideoDemoSection />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <ModulesGrid />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <FeatureCategories />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <TechStackDiagram />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <EnhancedIndustrySolutions />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <EnhancedWorldFirstFeatures />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <CompetitiveMatrix />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <EnhancedSecurityArchitecture />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <ProximaAI />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <StorySection />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <CaseStudies />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <EnhancedROICalculator />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <PricingSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
