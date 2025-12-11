import { cn } from "@/lib/utils";
import { Shield, Lock, Key, Globe, Fingerprint, Database, ArrowRight } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "Zero-PII Ingestion", description: "Automatic PII detection and tokenization" },
  { icon: Key, title: "Customer-Managed Keys", description: "BYOK encryption for data at rest" },
  { icon: Shield, title: "RBAC Controls", description: "Granular role-based access management" },
  { icon: Globe, title: "Data Residency", description: "Control where your data lives" },
  { icon: Fingerprint, title: "Dual WebAuthn", description: "Hardware key + biometric auth" },
  { icon: Database, title: "SOC2 Ready", description: "Type II compliant infrastructure" },
];

const pipelineSteps = [
  { label: "SDK Capture", sublabel: "Browser/Mobile" },
  { label: "Tokenization", sublabel: "PII Removal" },
  { label: "Secure Transit", sublabel: "TLS 1.3" },
  { label: "Storage", sublabel: "Encrypted" },
];

export function SecurityArchitecture() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-azure/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-aqua/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-aqua/30 text-aqua text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Enterprise Security
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Zero-Trust</span> Architecture
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Security-first design for mission-critical deployments
          </p>
        </div>

        {/* Security Pipeline Visualization */}
        <div className="mb-16">
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {pipelineSteps.map((step, index) => (
                <div key={step.label} className="flex items-center gap-4 w-full lg:w-auto">
                  <div className="flex-1 lg:flex-none">
                    <div
                      className={cn(
                        "p-6 rounded-xl text-center transition-all duration-300",
                        "bg-gradient-to-br from-azure/10 to-aqua/10 border border-azure/20",
                        "hover:border-aqua/50 hover:shadow-lg"
                      )}
                    >
                      <div className="text-lg font-bold text-foreground mb-1">{step.label}</div>
                      <div className="text-sm text-muted-foreground">{step.sublabel}</div>
                    </div>
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center w-12">
                      <ArrowRight className="w-6 h-6 text-aqua animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 -translate-y-1/2 -z-10">
              <div className="h-full bg-gradient-to-r from-azure via-aqua to-azure rounded-full opacity-30" />
            </div>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group p-6 rounded-xl glass border border-border/50",
                "hover:border-aqua/50 transition-all duration-300",
                "card-hover animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                    "bg-gradient-to-br from-azure to-aqua",
                    "group-hover:scale-110 transition-transform duration-300"
                  )}
                >
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Trusted by enterprises worldwide</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["SOC2 Type II", "ISO 27001", "GDPR", "HIPAA Ready", "PCI DSS"].map((cert) => (
              <div
                key={cert}
                className="px-6 py-3 rounded-lg glass border border-border/50 text-muted-foreground font-medium hover:border-aqua/30 hover:text-foreground transition-all"
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
