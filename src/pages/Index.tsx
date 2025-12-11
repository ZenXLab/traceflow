import { useEffect } from "react";
import { Navigation } from "@/components/traceflow/Navigation";
import { HeroSection } from "@/components/traceflow/HeroSection";
import { PipelineSection } from "@/components/traceflow/PipelineSection";
import { VideoDemoSection } from "@/components/traceflow/VideoDemoSection";
import { ModulesGrid } from "@/components/traceflow/ModulesGrid";
import { FeatureCategories } from "@/components/traceflow/FeatureCategories";
import { IndustrySolutions } from "@/components/traceflow/IndustrySolutions";
import { WorldFirstFeatures } from "@/components/traceflow/WorldFirstFeatures";
import { CompetitiveMatrix } from "@/components/traceflow/CompetitiveMatrix";
import { SecurityArchitecture } from "@/components/traceflow/SecurityArchitecture";
import { ProximaAI } from "@/components/traceflow/ProximaAI";
import { StorySection } from "@/components/traceflow/StorySection";
import { CaseStudies } from "@/components/traceflow/CaseStudies";
import { Testimonials } from "@/components/traceflow/Testimonials";
import { ROICalculator } from "@/components/traceflow/ROICalculator";
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
      metaDescription.setAttribute("content", "TRACEFLOW is the world's first Digital Cognition Infrastructure. Unify clickstream, observability, and multimodal feedback into a Zero-Trust, Hybrid-Ready Intelligence Layer.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <PipelineSection />
        <VideoDemoSection />
        <ModulesGrid />
        <FeatureCategories />
        <IndustrySolutions />
        <WorldFirstFeatures />
        <CompetitiveMatrix />
        <SecurityArchitecture />
        <ProximaAI />
        <StorySection />
        <CaseStudies />
        <Testimonials />
        <ROICalculator />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
