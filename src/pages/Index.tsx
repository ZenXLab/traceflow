import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { EnhancedHeroSection } from "@/components/traceflow/EnhancedHeroSection";
import { EnhancedPipelineSection } from "@/components/traceflow/EnhancedPipelineSection";
import { UniversalZeroTrustPipeline } from "@/components/traceflow/UniversalZeroTrustPipeline";
import { VideoDemoSection } from "@/components/traceflow/VideoDemoSection";
import { ModulesGrid } from "@/components/traceflow/ModulesGrid";
import { FeatureCategories } from "@/components/traceflow/FeatureCategories";
import { EnhancedIndustrySolutions } from "@/components/traceflow/EnhancedIndustrySolutions";
import { EnhancedWorldFirstFeatures } from "@/components/traceflow/EnhancedWorldFirstFeatures";
import { CompetitiveMatrix } from "@/components/traceflow/CompetitiveMatrix";
import { EnhancedSecurityArchitecture } from "@/components/traceflow/EnhancedSecurityArchitecture";
import { ProximaAI } from "@/components/traceflow/ProximaAI";
import { AgentInteractiveDemo } from "@/components/traceflow/AgentInteractiveDemo";
import { AgentComparisonTable } from "@/components/traceflow/AgentComparisonTable";
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
      
      <main id="main-content" role="main" className="space-y-0">
        {/* Hero - No animation, loads immediately */}
        <EnhancedHeroSection />
        
        {/* Pipeline - slides up */}
        <ScrollReveal direction="up" duration={700}>
          <EnhancedPipelineSection />
        </ScrollReveal>
        
        {/* Universal Zero-Trust Pipeline */}
        <ScrollReveal direction="up" duration={700}>
          <UniversalZeroTrustPipeline />
        </ScrollReveal>
        
        {/* Demo - slides from right */}
        <ScrollReveal direction="right" duration={700}>
          <VideoDemoSection />
        </ScrollReveal>
        
        {/* Modules - slides up */}
        <ScrollReveal direction="up" duration={600}>
          <ModulesGrid />
        </ScrollReveal>
        
        {/* Features - slides from left */}
        <ScrollReveal direction="left" duration={700}>
          <FeatureCategories />
        </ScrollReveal>
        
        {/* Tech Stack - fade in */}
        <ScrollReveal direction="fade" duration={800}>
          <TechStackDiagram />
        </ScrollReveal>
        
        {/* Industries - slides from right */}
        <ScrollReveal direction="right" duration={700}>
          <EnhancedIndustrySolutions />
        </ScrollReveal>
        
        {/* World First - slides up */}
        <ScrollReveal direction="up" duration={700}>
          <EnhancedWorldFirstFeatures />
        </ScrollReveal>
        
        {/* Competitive - slides from left */}
        <ScrollReveal direction="left" duration={700}>
          <CompetitiveMatrix />
        </ScrollReveal>
        
        {/* Security - slides up */}
        <ScrollReveal direction="up" duration={700}>
          <EnhancedSecurityArchitecture />
        </ScrollReveal>
        
        {/* Proxima AI - fade in */}
        <ScrollReveal direction="fade" duration={800}>
          <ProximaAI />
        </ScrollReveal>
        
        {/* Interactive Demo - slides up */}
        <ScrollReveal direction="up" duration={700}>
          <AgentInteractiveDemo />
        </ScrollReveal>
        
        {/* Comparison Table - slides from right */}
        <ScrollReveal direction="right" duration={700}>
          <AgentComparisonTable />
        </ScrollReveal>
        
        {/* Story - slides from right */}
        <ScrollReveal direction="right" duration={700}>
          <StorySection />
        </ScrollReveal>
        
        {/* Case Studies - slides up */}
        <ScrollReveal direction="up" duration={600}>
          <CaseStudies />
        </ScrollReveal>
        
        {/* Testimonials - slides from left */}
        <ScrollReveal direction="left" duration={700}>
          <Testimonials />
        </ScrollReveal>
        
        {/* ROI Calculator - slides up */}
        <ScrollReveal direction="up" duration={700}>
          <EnhancedROICalculator />
        </ScrollReveal>
        
        {/* Pricing - fade in */}
        <ScrollReveal direction="fade" duration={800}>
          <PricingSection />
        </ScrollReveal>
      </main>
      
      <Footer />
      <OnboardingTour />
    </div>
  );
};

export default Index;
