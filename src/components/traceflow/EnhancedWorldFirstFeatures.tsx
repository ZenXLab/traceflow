import { cn } from "@/lib/utils";
import { Sparkles, Mic, GitBranch, Code2, Fingerprint, Timer, Lock } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Session Telemetry Fusion",
    description: "First platform to merge LLM reasoning with clickstream data for context-aware session analysis that understands user intent, not just actions.",
    gradient: "from-azure to-aqua",
    delay: 0,
  },
  {
    icon: Mic,
    title: "Voice + Session Fusion",
    description: "Revolutionary correlation of voice call transcripts with in-app sessions, enabling complete omnichannel support journey reconstruction.",
    gradient: "from-aqua to-orange",
    delay: 100,
  },
  {
    icon: GitBranch,
    title: "Journey Causality Engine",
    description: "Advanced causal inference algorithms that identify true root causes of conversion drops, not just correlations, enabling targeted interventions.",
    gradient: "from-orange to-azure",
    delay: 200,
  },
  {
    icon: Code2,
    title: "Experience-to-Code Correlation",
    description: "Automatically links user experience issues to specific code commits, PRs, and deployments for instant developer action.",
    gradient: "from-azure/80 to-aqua/80",
    delay: 300,
  },
  {
    icon: Fingerprint,
    title: "Dual WebAuthn Governance",
    description: "Hardware key + biometric authentication for sensitive session access, meeting the highest security standards for regulated industries.",
    gradient: "from-aqua/80 to-orange/80",
    delay: 400,
  },
  {
    icon: Timer,
    title: "Temporal Workflow RCA",
    description: "Durable workflow orchestration for complex root cause analysis across distributed systems with automatic retries and checkpointing.",
    gradient: "from-orange/80 to-azure/80",
    delay: 500,
  },
  {
    icon: Lock,
    title: "Zero-PII Tokenization Pipeline",
    description: "Real-time PII detection and tokenization at the edge before data ever leaves the browser, ensuring GDPR/CCPA compliance by design.",
    gradient: "from-azure to-azure/60",
    delay: 600,
  },
];

export function EnhancedWorldFirstFeatures() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-azure/10 via-transparent to-transparent rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure to-aqua text-primary-foreground text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            Industry Firsts
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">World-First</span> Innovations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capabilities that exist nowhere else in the market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-8 rounded-2xl glass-strong border border-border/50",
                "hover:border-transparent transition-all duration-500",
                "card-hover animate-fade-in-up"
              )}
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Hover Gradient Border */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  `bg-gradient-to-br ${feature.gradient}`
                )}
                style={{ padding: "2px" }}
              >
                <div className="w-full h-full rounded-2xl bg-card" />
              </div>

              {/* World First Badge */}
              <div className="absolute -top-3 right-8 z-20">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-azure to-aqua text-primary-foreground text-xs font-bold shadow-lg shadow-azure/30">
                  WORLD FIRST
                </span>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                    `bg-gradient-to-br ${feature.gradient}`,
                    "group-hover:scale-110 group-hover:rotate-3 transition-all duration-500",
                    "shadow-lg group-hover:shadow-xl"
                  )}
                >
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div
                className={cn(
                  "absolute bottom-0 right-0 w-24 h-24 overflow-hidden rounded-br-2xl",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                )}
              >
                <div
                  className={cn(
                    "absolute bottom-0 right-0 w-48 h-48 translate-y-1/2 translate-x-1/2",
                    `bg-gradient-to-br ${feature.gradient}`,
                    "opacity-20 rounded-full"
                  )}
                />
              </div>

              {/* Bottom accent bar */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl",
                  `bg-gradient-to-r ${feature.gradient}`,
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
