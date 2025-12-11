import { cn } from "@/lib/utils";
import { Shield, Lock, Key, Globe, Fingerprint, Database, ArrowRight, Server, Eye, FileText } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "Zero-PII Ingestion", description: "Automatic PII detection and tokenization at capture", gradient: "from-azure to-azure/70" },
  { icon: Key, title: "Customer-Managed Keys", description: "BYOK encryption for complete data control", gradient: "from-azure/80 to-aqua/80" },
  { icon: Shield, title: "RBAC Controls", description: "Granular role-based access with audit trails", gradient: "from-aqua to-aqua/70" },
  { icon: Globe, title: "Multi-Region Residency", description: "Deploy data where regulations require", gradient: "from-aqua/80 to-orange/80" },
  { icon: Fingerprint, title: "Dual WebAuthn", description: "Hardware key + biometric authentication", gradient: "from-orange to-orange/70" },
  { icon: Database, title: "SOC2 Type II", description: "Certified compliant infrastructure", gradient: "from-orange/80 to-azure/80" },
  { icon: Eye, title: "Device Trust", description: "Zero-trust device verification", gradient: "from-azure/60 to-aqua/60" },
  { icon: FileText, title: "Audit Logs", description: "Complete access and change history", gradient: "from-aqua/60 to-orange/60" },
];

const pipelineSteps = [
  { id: "sdk", label: "SDK Capture", sublabel: "Browser/Mobile", icon: Server },
  { id: "tokenize", label: "Tokenization", sublabel: "PII Removal", icon: Lock },
  { id: "transit", label: "Secure Transit", sublabel: "TLS 1.3 + mTLS", icon: Shield },
  { id: "storage", label: "Encrypted Storage", sublabel: "AES-256", icon: Database },
  { id: "rbac", label: "RBAC Layer", sublabel: "Access Control", icon: Key },
  { id: "replay", label: "Secure Replay", sublabel: "Audit Logged", icon: Eye },
];

export function EnhancedSecurityArchitecture() {
  return (
    <section id="security" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-azure/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aqua/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-aqua/30 text-aqua text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Enterprise Security
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Zero-Trust</span> Security Architecture
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Security-first design for regulated industries and mission-critical deployments
          </p>
        </div>

        {/* Security Pipeline Visualization */}
        <div className="mb-20">
          <div className="glass-strong rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(hsl(var(--azure) / 0.5) 1px, transparent 1px),
                                 linear-gradient(90deg, hsl(var(--azure) / 0.5) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-8 text-center">Data Security Pipeline</h3>
              
              {/* Pipeline Flow */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
                {pipelineSteps.map((step, index) => (
                  <div key={step.id} className="flex items-center gap-2 lg:gap-4 w-full lg:w-auto">
                    <div className="flex-1 lg:flex-none">
                      <div
                        className={cn(
                          "p-4 lg:p-6 rounded-xl text-center transition-all duration-500 group",
                          "bg-gradient-to-br from-azure/10 to-aqua/10 border border-azure/20",
                          "hover:border-aqua/50 hover:shadow-lg hover:shadow-aqua/10",
                          "hover:scale-105"
                        )}
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-azure to-aqua flex items-center justify-center group-hover:scale-110 transition-transform">
                          <step.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="text-sm lg:text-base font-bold text-foreground">{step.label}</div>
                        <div className="text-xs text-muted-foreground">{step.sublabel}</div>
                      </div>
                    </div>
                    {index < pipelineSteps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center w-8 flex-shrink-0">
                        <ArrowRight className="w-5 h-5 text-aqua animate-pulse" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Animated flow line (desktop only) */}
              <div className="hidden lg:block absolute top-[55%] left-[8%] right-[8%] h-1 -translate-y-1/2 -z-10">
                <div className="h-full bg-gradient-to-r from-azure via-aqua to-azure rounded-full opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-aqua to-transparent animate-shimmer rounded-full opacity-50" />
              </div>
            </div>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group p-5 rounded-xl glass-strong border border-border/50",
                "hover:border-aqua/50 transition-all duration-500",
                "card-hover animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                    `bg-gradient-to-br ${feature.gradient}`,
                    "group-hover:scale-110 transition-transform duration-300"
                  )}
                >
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Trusted by regulated industries worldwide</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["SOC2 Type II", "ISO 27001", "GDPR Ready", "HIPAA Eligible", "PCI DSS", "FedRAMP Aligned"].map((cert, index) => (
              <div
                key={cert}
                className={cn(
                  "px-5 py-3 rounded-xl glass border border-border/50",
                  "text-muted-foreground font-medium text-sm",
                  "hover:border-aqua/30 hover:text-foreground transition-all duration-300",
                  "animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
