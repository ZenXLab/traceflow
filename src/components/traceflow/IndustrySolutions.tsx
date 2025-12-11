import { useState } from "react";
import { cn } from "@/lib/utils";
import { Building2, Shield, ShoppingCart, Code2, Check, X } from "lucide-react";

const industries = [
  {
    id: "bfsi",
    icon: Building2,
    title: "BFSI",
    subtitle: "Banking, Financial Services & Insurance",
    painPoints: [
      "Complex regulatory compliance requirements",
      "High-value transaction fraud detection",
      "Cross-channel customer journey gaps",
      "Legacy system integration challenges",
    ],
    solutions: [
      "Zero-PII session capture with data residency",
      "Real-time anomaly detection with PROXIMA AI",
      "Omnichannel journey stitching",
      "Air-gapped deployment options",
    ],
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance",
    subtitle: "Life, Health & Property Insurance",
    painPoints: [
      "Policy purchase abandonment",
      "Claims process friction",
      "Agent portal inefficiencies",
      "Customer self-service failures",
    ],
    solutions: [
      "Form analytics with drop-off insights",
      "Claims journey optimization",
      "Agent experience monitoring",
      "Self-service flow enhancement",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce",
    subtitle: "Retail & Marketplace Platforms",
    painPoints: [
      "Cart abandonment at scale",
      "Checkout flow friction",
      "Product discovery issues",
      "Mobile conversion gaps",
    ],
    solutions: [
      "Revenue impact quantification",
      "Checkout optimization with AI insights",
      "Search & navigation analysis",
      "Cross-device journey tracking",
    ],
  },
  {
    id: "saas",
    icon: Code2,
    title: "SaaS",
    subtitle: "B2B & B2C Software Platforms",
    painPoints: [
      "Feature adoption measurement",
      "User onboarding completion",
      "Churn prediction challenges",
      "Product-led growth metrics",
    ],
    solutions: [
      "Feature usage analytics & scoring",
      "Onboarding flow optimization",
      "Predictive churn indicators",
      "Activation funnel insights",
    ],
  },
];

export function IndustrySolutions() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const industry = industries[activeIndustry];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-orange/30 text-orange text-sm font-medium mb-6">
            Industry Focus
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Solutions for <span className="gradient-text-orange">Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored intelligence for your specific challenges
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((ind, index) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustry(index)}
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300",
                activeIndustry === index
                  ? "glass-strong border-2 border-aqua/50 shadow-lg scale-105"
                  : "glass border border-border/50 hover:border-border"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                  activeIndustry === index
                    ? "bg-gradient-to-br from-azure to-aqua"
                    : "bg-muted"
                )}
              >
                <ind.icon className={cn(
                  "w-5 h-5",
                  activeIndustry === index ? "text-primary-foreground" : "text-muted-foreground"
                )} />
              </div>
              <div className="text-left">
                <div className={cn(
                  "font-bold",
                  activeIndustry === index ? "text-foreground" : "text-muted-foreground"
                )}>
                  {ind.title}
                </div>
                <div className="text-xs text-muted-foreground hidden sm:block">{ind.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pain Points */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold">Industry Challenges</h3>
            </div>
            <div className="space-y-4">
              {industry.painPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-aqua/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-aqua" />
              </div>
              <h3 className="text-xl font-bold">TRACEFLOW Solutions</h3>
            </div>
            <div className="space-y-4">
              {industry.solutions.map((solution, index) => (
                <div
                  key={solution}
                  className="flex items-start gap-3 p-4 rounded-xl bg-aqua/5 border border-aqua/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50 + 200}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-aqua/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-aqua" />
                  </div>
                  <span className="text-foreground">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
