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
import { OnboardingTour } from "@/components/traceflow/OnboardingTour";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";

const Index = () => {
  useEffect(() => {
    document.title = "TRACEFLOW — Digital Cognition Infrastructure | Every Signal. One Intelligence.";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "TRACEFLOW is the world's first Digital Cognition Infrastructure by CropXon Innovations. Unify clickstream, observability, and multimodal feedback into a Zero-Trust, Hybrid-Ready Intelligence Layer.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <EnhancedNavigation />
      <main id="main-content" role="main">
        <EnhancedHeroSection />
        
        <ScrollReveal direction="up">
          <EnhancedPipelineSection />
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={100}>
          <VideoDemoSection />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <ModulesGrid />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <FeatureCategories />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <TechStackDiagram />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <EnhancedIndustrySolutions />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <EnhancedWorldFirstFeatures />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <CompetitiveMatrix />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <EnhancedSecurityArchitecture />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <ProximaAI />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <StorySection />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <CaseStudies />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <Testimonials />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <EnhancedROICalculator />
        </ScrollReveal>
        
        <ScrollReveal direction="up">
          <PricingSection />
        </ScrollReveal>
      </main>
      <Footer />
      <OnboardingTour />
    </div>
  );
};

export default Index;
