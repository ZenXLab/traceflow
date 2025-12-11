import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  Shield, 
  ShoppingCart, 
  Code2, 
  Check, 
  AlertTriangle,
  CreditCard,
  Fingerprint,
  Phone,
  Upload,
  MousePointerClick,
  Users,
  Zap,
  TrendingUp
} from "lucide-react";

const industries = [
  {
    id: "bfsi",
    icon: Building2,
    title: "BFSI",
    subtitle: "Banking, Financial Services & Insurance",
    gradient: "from-azure to-azure/70",
    painPoints: [
      { icon: Fingerprint, text: "KYC failure detection gaps" },
      { icon: Phone, text: "OTP loops causing abandonment" },
      { icon: CreditCard, text: "Payment drop-off without RCA" },
      { icon: AlertTriangle, text: "Fraud behavior pattern blindspots" },
    ],
    solutions: [
      { icon: Zap, text: "Real-time KYC flow analytics" },
      { icon: TrendingUp, text: "OTP journey optimization" },
      { icon: Shield, text: "Zero-PII session capture" },
      { icon: Building2, text: "Air-gapped deployment option" },
    ],
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance",
    subtitle: "Life, Health & Property Insurance",
    gradient: "from-aqua to-aqua/70",
    painPoints: [
      { icon: Upload, text: "Claims journey friction" },
      { icon: AlertTriangle, text: "Document upload failures" },
      { icon: Users, text: "Agent portal inefficiencies" },
      { icon: MousePointerClick, text: "Self-service abandonment" },
    ],
    solutions: [
      { icon: Zap, text: "Claims journey causality engine" },
      { icon: TrendingUp, text: "Upload friction detection" },
      { icon: Shield, text: "Agent experience monitoring" },
      { icon: Building2, text: "Portal optimization insights" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce",
    subtitle: "Retail & Marketplace Platforms",
    gradient: "from-orange to-orange/70",
    painPoints: [
      { icon: CreditCard, text: "Cart abandonment at scale" },
      { icon: MousePointerClick, text: "Checkout flow friction" },
      { icon: AlertTriangle, text: "Rage clicks on product pages" },
      { icon: Phone, text: "Mobile conversion gaps" },
    ],
    solutions: [
      { icon: Zap, text: "Revenue impact quantification" },
      { icon: TrendingUp, text: "Checkout optimization AI" },
      { icon: Shield, text: "Frustration detection alerts" },
      { icon: Building2, text: "Cross-device journey tracking" },
    ],
  },
  {
    id: "saas",
    icon: Code2,
    title: "SaaS",
    subtitle: "B2B & B2C Software Platforms",
    gradient: "from-azure/80 to-aqua/80",
    painPoints: [
      { icon: Users, text: "Feature adoption blind spots" },
      { icon: AlertTriangle, text: "Onboarding drop-offs" },
      { icon: TrendingUp, text: "Churn prediction challenges" },
      { icon: MousePointerClick, text: "PLG metrics visibility" },
    ],
    solutions: [
      { icon: Zap, text: "Feature usage analytics" },
      { icon: TrendingUp, text: "Onboarding flow optimization" },
      { icon: Shield, text: "Predictive churn indicators" },
      { icon: Building2, text: "Activation funnel insights" },
    ],
  },
];

export function EnhancedIndustrySolutions() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const industry = industries[activeIndustry];

  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-orange/30 text-orange text-sm font-medium mb-6">
            Industry Solutions
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Built for <span className="gradient-text-orange">Mission-Critical</span> Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade intelligence tailored to your regulatory and operational needs
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((ind, index) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustry(index)}
              className={cn(
                "flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500",
                activeIndustry === index
                  ? "glass-strong border-2 border-aqua/50 shadow-lg shadow-aqua/10 scale-105"
                  : "glass border border-border/50 hover:border-border hover:scale-102"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                  activeIndustry === index
                    ? `bg-gradient-to-br ${ind.gradient}`
                    : "bg-muted"
                )}
              >
                <ind.icon className={cn(
                  "w-6 h-6 transition-colors duration-300",
                  activeIndustry === index ? "text-primary-foreground" : "text-muted-foreground"
                )} />
              </div>
              <div className="text-left">
                <div className={cn(
                  "font-bold transition-colors duration-300",
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
          <div className="glass-strong rounded-2xl p-8 border border-destructive/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Industry Challenges</h3>
                <p className="text-sm text-muted-foreground">Common pain points we solve</p>
              </div>
            </div>
            <div className="space-y-4">
              {industry.painPoints.map((point, index) => (
                <div
                  key={point.text}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl",
                    "bg-destructive/5 border border-destructive/10",
                    "hover:bg-destructive/10 transition-all duration-300",
                    "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-foreground font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="glass-strong rounded-2xl p-8 border border-aqua/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-aqua/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-aqua" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TRACEFLOW Solutions</h3>
                <p className="text-sm text-muted-foreground">How we address each challenge</p>
              </div>
            </div>
            <div className="space-y-4">
              {industry.solutions.map((solution, index) => (
                <div
                  key={solution.text}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl",
                    "bg-aqua/5 border border-aqua/10",
                    "hover:bg-aqua/10 transition-all duration-300",
                    "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${index * 50 + 200}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-aqua/20 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-aqua" />
                  </div>
                  <span className="text-foreground font-medium">{solution.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl glass border border-border/50">
            <span className="text-muted-foreground">See how TRACEFLOW works for</span>
            <span className="font-bold gradient-text">{industry.title}</span>
            <span className="text-aqua">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
