import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  AnimatedSDK, 
  AnimatedRunner, 
  AnimatedStreams, 
  AnimatedTemporal, 
  AnimatedProximaAI, 
  AnimatedDashboard 
} from "./TraceflowPipelineAnimations";
import { Cloud, Building2, Shield, ArrowRight } from "lucide-react";

const pipelineNodes = [
  { id: "sdk", label: "SDK", sublabel: "Capture Engine", Component: AnimatedSDK },
  { id: "runner", label: "DXI Runner", sublabel: "Processing", Component: AnimatedRunner },
  { id: "redis", label: "Redis Streams", sublabel: "Queue", Component: AnimatedStreams },
  { id: "temporal", label: "Temporal", sublabel: "Workflows", Component: AnimatedTemporal },
  { id: "proxima", label: "PROXIMA AI", sublabel: "Intelligence", Component: AnimatedProximaAI },
  { id: "dashboards", label: "Dashboards", sublabel: "Visualization", Component: AnimatedDashboard },
];

const deploymentModes = [
  { id: "hybrid", label: "Hybrid", icon: Cloud, description: "Cloud + On-Prem" },
  { id: "onprem", label: "On-Prem", icon: Building2, description: "Fully Private" },
  { id: "airgapped", label: "Air-Gapped", icon: Shield, description: "Zero External" },
];

export function EnhancedPipelineSection() {
  const [activeMode, setActiveMode] = useState("hybrid");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--azure) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--azure) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-aqua/30 text-aqua text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aqua"></span>
            </span>
            Live Architecture
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Zero-Trust Data Pipeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade data flow with real-time PII tokenization
          </p>
        </div>

        {/* Deployment Mode Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex gap-2 p-2 glass-strong rounded-2xl">
            {deploymentModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-500",
                  activeMode === mode.id
                    ? "bg-gradient-to-r from-azure to-aqua text-primary-foreground shadow-lg shadow-azure/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <mode.icon className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  activeMode === mode.id && "scale-110"
                )} />
                <div className="text-left">
                  <div className="font-bold">{mode.label}</div>
                  <div className="text-xs opacity-80">{mode.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative py-8">
          {/* Main Connection Line */}
          <div className="absolute top-1/2 left-[8%] right-[8%] h-2 -translate-y-1/2 hidden lg:block">
            <div className="h-full bg-muted/30 rounded-full relative overflow-hidden">
              {/* Animated flow */}
              <div className="absolute inset-0 bg-gradient-to-r from-azure via-aqua to-orange rounded-full animate-gradient-x bg-[length:200%_auto]" 
                   style={{ opacity: 0.6 }} />
              
              {/* Flowing particles */}
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-aqua shadow-[0_0_15px_hsl(var(--aqua))]"
                  style={{
                    animation: `flowParticle 4s linear ${i * 0.8}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Pipeline Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 relative z-10">
            {pipelineNodes.map((node, index) => (
              <div
                key={node.id}
                className="group"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={cn(
                    "relative flex flex-col items-center p-6 rounded-2xl transition-all duration-500",
                    "glass-strong border border-border/50",
                    "hover:border-aqua/50",
                    hoveredNode === node.id && "scale-105 -translate-y-2 shadow-[0_0_40px_hsl(var(--aqua)/0.3)]"
                  )}
                >
                  {/* Glow Effect */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl bg-gradient-to-b from-aqua/20 to-transparent opacity-0 transition-opacity duration-300",
                      hoveredNode === node.id && "opacity-100"
                    )}
                  />

                  {/* Animated Icon */}
                  <div className="relative w-20 h-20 mb-4">
                    <node.Component className="w-full h-full" />
                  </div>

                  {/* Labels */}
                  <h3 className="text-sm font-bold text-foreground mb-1 text-center relative z-10">
                    {node.label}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center relative z-10">
                    {node.sublabel}
                  </p>

                  {/* Connection indicator */}
                  {index < pipelineNodes.length - 1 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center z-20">
                      <ArrowRight className={cn(
                        "w-4 h-4 text-aqua transition-all duration-300",
                        hoveredNode === node.id && "translate-x-1 scale-125"
                      )} />
                    </div>
                  )}

                  {/* Active Indicator */}
                  <div
                    className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full transition-all duration-300",
                      "bg-gradient-to-r from-azure to-aqua",
                      "opacity-0 group-hover:opacity-100"
                    )}
                  />
                </div>

                {/* Node Number Badge */}
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mode-specific topology hint */}
        <div className="mt-12 text-center">
          <div className={cn(
            "inline-flex items-center gap-3 px-6 py-3 rounded-xl glass transition-all duration-500",
            activeMode === "hybrid" && "border-azure/30",
            activeMode === "onprem" && "border-orange/30",
            activeMode === "airgapped" && "border-destructive/30"
          )}>
            {activeMode === "hybrid" && (
              <>
                <Cloud className="w-5 h-5 text-azure" />
                <span className="text-muted-foreground">
                  SDK & Dashboards in cloud, DXI Runner can be on-premise
                </span>
              </>
            )}
            {activeMode === "onprem" && (
              <>
                <Building2 className="w-5 h-5 text-orange" />
                <span className="text-muted-foreground">
                  Complete stack deployed in your data center
                </span>
              </>
            )}
            {activeMode === "airgapped" && (
              <>
                <Shield className="w-5 h-5 text-destructive" />
                <span className="text-muted-foreground">
                  Zero external network dependencies, offline-capable
                </span>
              </>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "1.2B", label: "Events Processed Daily", color: "azure" },
            { value: "99.99%", label: "Uptime SLA", color: "aqua" },
            { value: "<23ms", label: "End-to-End Latency", color: "orange" },
            { value: "150+", label: "Enterprise Clients", color: "azure" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl glass-strong animate-fade-in-up group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100 + 600}ms` }}
            >
              <div className={cn(
                "text-3xl lg:text-4xl font-bold mb-2",
                stat.color === "azure" && "gradient-text",
                stat.color === "aqua" && "text-aqua",
                stat.color === "orange" && "text-orange"
              )}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes flowParticle {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
