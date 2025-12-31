import { Link } from "react-router-dom";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollProgress } from "@/components/traceflow/ScrollProgress";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EnterpriseHeroAnimation } from "@/components/traceflow/FeatureHeroAnimations";
import { 
  Building2, Server, Cloud, Shield, Key, Plug, ArrowLeft, Check, 
  ChevronRight, Globe, Zap, Lock, Users, Headphones
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "On-Prem Runner",
    description: "Deploy TRACEFLOW entirely within your infrastructure. Full control over data with zero external dependencies.",
    color: "azure",
    stats: { value: "100%", label: "On-Premise" }
  },
  {
    icon: Cloud,
    title: "Hybrid Deployment",
    description: "Flexible architecture that bridges cloud and on-premise. Process data locally, analyze globally.",
    color: "aqua",
    stats: { value: "Flex", label: "Architecture" }
  },
  {
    icon: Shield,
    title: "Air-Gapped Mode",
    description: "Complete network isolation for the most sensitive environments. Zero outbound connections required.",
    color: "orange",
    stats: { value: "0", label: "External Calls" }
  },
  {
    icon: Key,
    title: "SSO/SAML",
    description: "Enterprise authentication with SAML 2.0, OAuth 2.0, and OIDC. Integrate with your existing identity provider.",
    color: "azure",
    stats: { value: "All", label: "IDPs Supported" }
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Native integrations with Jira, Slack, PagerDuty, Datadog, and 50+ enterprise tools.",
    color: "aqua",
    stats: { value: "50+", label: "Integrations" }
  }
];

const integrations = [
  { name: "Jira", category: "Ticketing" },
  { name: "Slack", category: "Communication" },
  { name: "PagerDuty", category: "Alerting" },
  { name: "Datadog", category: "Observability" },
  { name: "Splunk", category: "SIEM" },
  { name: "ServiceNow", category: "ITSM" },
  { name: "Okta", category: "Identity" },
  { name: "Azure AD", category: "Identity" },
];

const enterpriseFeatures = [
  { icon: Users, title: "Unlimited Users", desc: "No per-seat pricing, scale your team freely" },
  { icon: Globe, title: "Global Deployment", desc: "Multi-region with automatic failover" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated success manager and priority support" },
  { icon: Lock, title: "Custom SLAs", desc: "Tailored service level agreements" },
];

export default function EnterpriseFeatures() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <EnhancedNavigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-azure/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--azure)/0.15),transparent_60%)]" />
          
          <div className="container-wide relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <ScrollReveal direction="up">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure/80 to-aqua/80 text-primary-foreground text-sm font-bold mb-6">
                    <Building2 className="w-4 h-4" />
                    Enterprise Platform
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                    Built for <span className="gradient-text">Enterprise Scale</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    On-premise deployment, hybrid architecture, and enterprise integrations for organizations that demand complete control.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="azure" size="lg">
                      Contact Sales
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Download Datasheet
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] lg:h-[350px]">
                  <div className="absolute -inset-4 bg-gradient-to-r from-azure/20 via-aqua/10 to-transparent rounded-3xl blur-xl" />
                  <EnterpriseHeroAnimation className="relative z-10" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="section-padding py-12">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {enterpriseFeatures.map((feat) => (
                  <div 
                    key={feat.title}
                    className="p-6 rounded-2xl glass border border-border/50 text-center"
                  >
                    <feat.icon className="w-8 h-8 text-azure mx-auto mb-3" />
                    <h3 className="font-bold mb-1">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Deployment <span className="gradient-text">Flexibility</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose how and where you run TRACEFLOW to meet your organization's requirements
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <ScrollReveal key={feature.title} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 100}>
                  <div className={cn(
                    "group p-6 rounded-2xl glass border-2 transition-all duration-500",
                    "hover:scale-[1.02] hover:-translate-y-1",
                    feature.color === "azure" && "border-azure/20 hover:border-azure/50 hover:shadow-[0_0_40px_hsl(var(--azure)/0.2)]",
                    feature.color === "aqua" && "border-aqua/20 hover:border-aqua/50 hover:shadow-[0_0_40px_hsl(var(--aqua)/0.2)]",
                    feature.color === "orange" && "border-orange/20 hover:border-orange/50 hover:shadow-[0_0_40px_hsl(var(--orange)/0.2)]"
                  )}>
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                      feature.color === "azure" && "bg-azure/10",
                      feature.color === "aqua" && "bg-aqua/10",
                      feature.color === "orange" && "bg-orange/10"
                    )}>
                      <feature.icon className={cn(
                        "w-7 h-7",
                        feature.color === "azure" && "text-azure",
                        feature.color === "aqua" && "text-aqua",
                        feature.color === "orange" && "text-orange"
                      )} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className={cn(
                        "text-2xl font-bold",
                        feature.color === "azure" && "text-azure",
                        feature.color === "aqua" && "text-aqua",
                        feature.color === "orange" && "text-orange"
                      )}>{feature.stats.value}</span>
                      <span className="text-xs text-muted-foreground">{feature.stats.label}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Enterprise <span className="gradient-text">Integrations</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Connect TRACEFLOW with your existing enterprise tools
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {integrations.map((int, idx) => (
                <ScrollReveal key={int.name} direction="up" delay={idx * 50}>
                  <div className="p-4 rounded-xl glass border border-border/50 hover:border-aqua/30 transition-all text-center">
                    <div className="text-lg font-bold mb-1">{int.name}</div>
                    <div className="text-xs text-muted-foreground">{int.category}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-azure/10 via-aqua/10 to-orange/10 border border-border/50">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready for <span className="gradient-text">Enterprise Scale</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Talk to our enterprise team about custom deployment and pricing options.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="azure" size="lg">
                    Contact Enterprise Sales
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}