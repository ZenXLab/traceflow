import { Link } from "react-router-dom";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollProgress } from "@/components/traceflow/ScrollProgress";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Shield, Lock, Key, Users, FileText, Globe, ArrowLeft, Check, 
  ChevronRight, ShieldCheck, Eye, AlertTriangle, Fingerprint
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Zero-Trust Pipeline",
    description: "Every request is authenticated and encrypted. No implicit trust—verify everything, encrypt everywhere, log always.",
    color: "orange",
    stats: { value: "E2E", label: "Encryption" }
  },
  {
    icon: Key,
    title: "PII Tokenization",
    description: "Automatic detection and tokenization of personally identifiable information. Data never leaves your control.",
    color: "azure",
    stats: { value: "100%", label: "Auto-Redaction" }
  },
  {
    icon: Users,
    title: "RBAC Controls",
    description: "Granular role-based access control with custom permissions. Define who sees what at the field level.",
    color: "aqua",
    stats: { value: "∞", label: "Custom Roles" }
  },
  {
    icon: FileText,
    title: "Audit Logs",
    description: "Complete, immutable audit trail of every action. Full compliance with SOC 2, HIPAA, and GDPR requirements.",
    color: "orange",
    stats: { value: "7yr", label: "Retention" }
  },
  {
    icon: Globe,
    title: "Data Residency",
    description: "Multi-region deployment with guaranteed data residency. Keep data where your regulations require.",
    color: "azure",
    stats: { value: "12+", label: "Regions" }
  }
];

const certifications = [
  { name: "SOC 2 Type II", icon: ShieldCheck },
  { name: "HIPAA", icon: Shield },
  { name: "GDPR", icon: Globe },
  { name: "ISO 27001", icon: Lock },
  { name: "PCI DSS", icon: Key },
  { name: "FedRAMP", icon: Fingerprint },
];

const securityLayers = [
  { layer: "Edge Layer", features: ["DDoS Protection", "WAF", "Bot Detection", "Rate Limiting"] },
  { layer: "Transport Layer", features: ["TLS 1.3", "Certificate Pinning", "HSTS", "Perfect Forward Secrecy"] },
  { layer: "Application Layer", features: ["Input Validation", "CSP", "XSS Protection", "CSRF Prevention"] },
  { layer: "Data Layer", features: ["AES-256 Encryption", "Key Rotation", "HSM Integration", "Secure Deletion"] },
];

export default function SecurityFeatures() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <EnhancedNavigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--orange)/0.15),transparent_60%)]" />
          
          <div className="container-wide relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <ScrollReveal direction="up">
              <div className="max-w-4xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange to-orange/70 text-primary-foreground text-sm font-bold mb-6">
                  <Shield className="w-4 h-4" />
                  Security Platform
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Zero-Trust <span className="gradient-text">Security Architecture</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Enterprise-grade security with automatic PII protection, granular access controls, and complete compliance coverage.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="orange" size="lg">
                    Security Whitepaper
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Request Audit Report
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding py-12">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="flex flex-wrap justify-center gap-6">
                {certifications.map((cert) => (
                  <div 
                    key={cert.name}
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border/50 hover:border-orange/30 transition-colors"
                  >
                    <cert.icon className="w-5 h-5 text-orange" />
                    <span className="font-medium">{cert.name}</span>
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
                  Defense in <span className="gradient-text">Depth</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Multiple layers of security protecting your data at every level
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

        {/* Security Layers */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Security <span className="gradient-text">Architecture</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityLayers.map((layer, idx) => (
                <ScrollReveal key={layer.layer} direction="up" delay={idx * 100}>
                  <div className="p-6 rounded-2xl glass border border-border/50 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
                        <span className="text-orange font-bold text-sm">{idx + 1}</span>
                      </div>
                      <h3 className="font-bold">{layer.layer}</h3>
                    </div>
                    <ul className="space-y-2">
                      {layer.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-orange shrink-0" />
                          <span className="text-muted-foreground">{feat}</span>
                        </li>
                      ))}
                    </ul>
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
              <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-orange/10 via-azure/10 to-aqua/10 border border-border/50">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Security You Can <span className="gradient-text">Trust</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join thousands of enterprises who trust TRACEFLOW with their most sensitive data.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="orange" size="lg">
                    Download Security Brief
                  </Button>
                  <Button variant="outline" size="lg">
                    Contact Security Team
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