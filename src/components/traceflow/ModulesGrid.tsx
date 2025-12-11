import { cn } from "@/lib/utils";
import { 
  Radio, 
  Server, 
  Brain, 
  Timer, 
  Play, 
  BarChart3, 
  Shield, 
  Cloud, 
  Zap 
} from "lucide-react";

const modules = [
  {
    icon: Radio,
    title: "Capture Engine",
    description: "Multi-channel SDK for web, mobile, and IoT event ingestion",
    gradient: "from-azure to-azure/70",
  },
  {
    icon: Server,
    title: "DXI Runner",
    description: "Enterprise-grade processing with horizontal auto-scaling",
    gradient: "from-azure/80 to-aqua/80",
  },
  {
    icon: Brain,
    title: "PROXIMA AI",
    description: "Multi-agent intelligence for automated root cause analysis",
    gradient: "from-aqua to-aqua/70",
  },
  {
    icon: Timer,
    title: "Temporal Engine",
    description: "Durable workflow orchestration for complex event processing",
    gradient: "from-aqua/80 to-orange/80",
  },
  {
    icon: Play,
    title: "Replay Infra",
    description: "Pixel-perfect session reconstruction with DOM snapshots",
    gradient: "from-orange to-orange/70",
  },
  {
    icon: BarChart3,
    title: "Observability",
    description: "Full-stack metrics, logs, and traces correlation",
    gradient: "from-orange/80 to-azure/80",
  },
  {
    icon: Shield,
    title: "Security Suite",
    description: "Zero-PII, encryption at rest, customer-managed keys",
    gradient: "from-azure/60 to-aqua/60",
  },
  {
    icon: Cloud,
    title: "Hybrid Layer",
    description: "Deploy anywhere: cloud, on-prem, or air-gapped networks",
    gradient: "from-aqua/60 to-orange/60",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Auto-ticketing, alerts, and workflow triggers",
    gradient: "from-orange/60 to-azure/60",
  },
];

export function ModulesGrid() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-azure/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aqua/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-aqua/30 text-aqua text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
            Platform OS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">9 Integrated Modules</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete digital experience operating system for enterprise needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className={cn(
                "group relative p-6 rounded-2xl glass border border-border/50",
                "hover:border-transparent transition-all duration-500",
                "card-hover cursor-pointer",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Hover Gradient Border */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                  `bg-gradient-to-br ${module.gradient}`
                )}
                style={{ padding: "1px" }}
              >
                <div className="w-full h-full rounded-2xl bg-card" />
              </div>

              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
                  "bg-gradient-to-br",
                  module.gradient,
                  "group-hover:scale-110 group-hover:rotate-3 transition-all duration-300",
                  "shadow-lg"
                )}
              >
                <module.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {module.description}
              </p>

              {/* Bottom Accent */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl",
                  "bg-gradient-to-r",
                  module.gradient,
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                )}
              />

              {/* Corner Accent */}
              <div
                className={cn(
                  "absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                )}
              >
                <div
                  className={cn(
                    "absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2",
                    "bg-gradient-to-br",
                    module.gradient,
                    "opacity-20 rounded-full"
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
