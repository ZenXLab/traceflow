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
        <EnhancedPipelineSection />
        <VideoDemoSection />
        <ModulesGrid />
        <FeatureCategories />
        <EnhancedIndustrySolutions />
        <EnhancedWorldFirstFeatures />
        <CompetitiveMatrix />
        <EnhancedSecurityArchitecture />
        <ProximaAI />
        <StorySection />
        <CaseStudies />
        <Testimonials />
        <EnhancedROICalculator />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
