import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Server, Database, Brain, LayoutDashboard, Cloud, Building2, Shield } from "lucide-react";

const pipelineNodes = [
  { id: "sdk", label: "SDK", sublabel: "Capture Engine", icon: Code2 },
  { id: "runner", label: "DXI Runner", sublabel: "Processing", icon: Server },
  { id: "redis", label: "Redis Streams", sublabel: "Queue", icon: Database },
  { id: "temporal", label: "Temporal", sublabel: "Workflows", icon: Server },
  { id: "proxima", label: "PROXIMA AI", sublabel: "Intelligence", icon: Brain },
  { id: "dashboards", label: "Dashboards", sublabel: "Visualization", icon: LayoutDashboard },
];

const deploymentModes = [
  { id: "hybrid", label: "Hybrid", icon: Cloud, description: "Cloud + On-Prem" },
  { id: "onprem", label: "On-Prem", icon: Building2, description: "Fully Private" },
  { id: "airgapped", label: "Air-Gapped", icon: Shield, description: "Zero External" },
];

export function PipelineSection() {
  const [activeMode, setActiveMode] = useState("hybrid");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Data Pipeline</span> Architecture
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch your data flow through our enterprise-grade processing pipeline
          </p>
        </div>

        {/* Deployment Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-2 glass rounded-xl">
            {deploymentModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300",
                  activeMode === mode.id
                    ? "bg-gradient-to-r from-azure to-aqua text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <mode.icon className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-semibold text-sm">{mode.label}</div>
                  <div className="text-xs opacity-80">{mode.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative py-8">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 hidden lg:block">
            <div className="h-full bg-gradient-to-r from-azure via-aqua to-azure rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/30 to-transparent animate-[shimmer_2s_linear_infinite]" />
            </div>
          </div>

          {/* Animated Data Packets */}
          <div className="absolute top-1/2 left-0 right-0 h-4 -translate-y-1/2 pointer-events-none hidden lg:block">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-aqua shadow-[0_0_20px_hsl(var(--aqua))]"
                style={{
                  animation: `data-flow 3s ease-in-out ${i * 1}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Pipeline Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {pipelineNodes.map((node, index) => (
              <div
                key={node.id}
                className={cn(
                  "group relative",
                  "animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div
                  className={cn(
                    "relative flex flex-col items-center p-6 rounded-2xl transition-all duration-500",
                    "glass border border-border/50",
                    "hover:border-aqua/50 hover:shadow-[0_0_40px_hsl(var(--aqua)/0.2)]",
                    hoveredNode === node.id && "scale-105 -translate-y-2"
                  )}
                >
                  {/* Glow Effect */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl bg-gradient-to-b from-aqua/20 to-transparent opacity-0 transition-opacity duration-300",
                      hoveredNode === node.id && "opacity-100"
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      "relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                      "bg-gradient-to-br from-azure to-aqua",
                      hoveredNode === node.id && "shadow-[0_0_30px_hsl(var(--aqua)/0.5)] scale-110"
                    )}
                  >
                    <node.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Labels */}
                  <h3 className="text-sm font-bold text-foreground mb-1 text-center">{node.label}</h3>
                  <p className="text-xs text-muted-foreground text-center">{node.sublabel}</p>

                  {/* Active Indicator */}
                  <div
                    className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full transition-all duration-300",
                      "bg-gradient-to-r from-azure to-aqua",
                      "opacity-0 group-hover:opacity-100"
                    )}
                  />
                </div>

                {/* Node Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "1.2B", label: "Events Processed Daily" },
            { value: "99.99%", label: "Uptime SLA" },
            { value: "<23ms", label: "End-to-End Latency" },
            { value: "150+", label: "Enterprise Clients" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl glass animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 600}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
