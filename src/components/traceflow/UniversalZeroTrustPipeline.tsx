import { useState } from "react";
import { cn } from "@/lib/utils";
import { Cloud, Building2, Shield, Wifi, WifiOff, ArrowDown, Check, X, AlertTriangle } from "lucide-react";
import deploymentModelsImage from "@/assets/traceflow-deployment-models.png";

const deploymentModes = [
  { 
    id: "saas", 
    label: "SaaS", 
    icon: Cloud, 
    description: "Cloud-native, managed",
    color: "azure",
    subtitle: "Fastest onboarding",
    useCases: ["Cloud-native companies", "Fintechs & SaaS platforms", "Fast onboarding, low friction", "No on-prem constraints"],
    benefits: ["Lowest operational burden", "Automatic upgrades", "Central intelligence", "Ideal for modern platforms"],
    trustBoundary: "TRACEFLOW Cloud (Managed)"
  },
  { 
    id: "hybrid", 
    label: "Hybrid", 
    icon: Wifi, 
    description: "Cloud + On-Prem",
    color: "aqua",
    subtitle: "Enterprise standard",
    useCases: ["Banks", "Insurers", "Telcos", "Regulated enterprises"],
    benefits: ["Data sovereignty", "Regulatory acceptance", "Gradual cloud adoption", "Strong zero-trust posture"],
    trustBoundary: "Controlled Egress to Cloud"
  },
  { 
    id: "onprem", 
    label: "On-Prem", 
    icon: Building2, 
    description: "Fully self-hosted",
    color: "orange",
    subtitle: "Maximum control",
    useCases: ["Banks with strict RBI/OCC rules", "Government systems", "Defense & critical infra", "No external dependency"],
    benefits: ["Maximum control", "Regulatory comfort", "No vendor lock-in", "Full data residency"],
    trustBoundary: "Customer Data Center Only"
  },
  { 
    id: "airgapped", 
    label: "Air-Gapped", 
    icon: WifiOff, 
    description: "Zero external",
    color: "destructive",
    subtitle: "Absolute security",
    useCases: ["Defense", "Intelligence agencies", "Nuclear, space, military", "Critical national infrastructure"],
    benefits: ["No internet", "Manual update paths", "Highest assurance", "Human-first decisioning"],
    trustBoundary: "Air-Gapped Zone (No Outbound)"
  },
];

const pipelineStages = [
  {
    id: "sdk",
    name: "SDK",
    steps: ["Instrument", "Capture", "Contextualize", "Validate", "Emit"],
    icon: "📱",
    color: "azure",
    description: "App glow / spark",
    detail: "Same instrumentation everywhere. No code changes across deployments."
  },
  {
    id: "runner",
    name: "Runner",
    steps: ["Identify", "Collect", "Normalize", "Secure", "Buffer", "Forward"],
    icon: "🛡️",
    color: "aqua",
    description: "Shielded node",
    detail: "Trust boundary. Handles normalization and security."
  },
  {
    id: "orchestrate",
    name: "Orchestrate",
    steps: ["Ingest", "Correlate", "Sequence", "Persist", "Govern", "Dispatch"],
    icon: "⚙️",
    color: "orange",
    description: "Conveyor belt",
    detail: "Temporal workflows with full replay and durability."
  },
  {
    id: "proxima",
    name: "Proxima",
    steps: ["Observe", "Detect", "Explain", "Decide", "Act"],
    icon: "🧠",
    color: "azure",
    description: "Brain / cognition",
    detail: "AI intelligence layer with policy enforcement."
  },
  {
    id: "dashboards",
    name: "Dashboards",
    steps: ["Visualize", "Review", "Approve", "Override (Human)"],
    icon: "📊",
    color: "aqua",
    description: "Control room",
    detail: "Human-in-the-loop with full audit history."
  },
];

const getModeSpecificConfig = (mode: string) => {
  switch (mode) {
    case "saas":
      return {
        cloudComponents: ["DXI Engine", "Streams", "Temporal Orchestrator", "Proxima Agents", "Dashboards"],
        localComponents: ["SDK", "Runner (edge/container)"],
        dataFlow: "TLS to Cloud",
      };
    case "hybrid":
      return {
        cloudComponents: ["Orchestrator", "Proxima", "Dashboards"],
        localComponents: ["SDK", "Runner", "Local Buffer", "Optional Local Streams"],
        dataFlow: "Controlled Egress",
      };
    case "onprem":
      return {
        cloudComponents: [],
        localComponents: ["SDK", "Runner", "DXI Engine", "Streams", "Temporal Orchestrator", "Proxima Agents", "Dashboards"],
        dataFlow: "Internal Only",
      };
    case "airgapped":
      return {
        cloudComponents: [],
        localComponents: ["SDK", "Runner", "DXI Engine", "Streams", "Orchestrator", "Proxima (restricted)", "Dashboards"],
        dataFlow: "No Outbound",
      };
    default:
      return { cloudComponents: [], localComponents: [], dataFlow: "" };
  }
};

// Animated Data Particles Component
function DataFlowParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
      {/* Multiple particle streams */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: `linear-gradient(135deg, hsl(var(--azure)), hsl(var(--aqua)))`,
            boxShadow: `0 0 10px hsl(var(--azure)), 0 0 20px hsl(var(--aqua) / 0.5)`,
            top: '50%',
            left: '0%',
            animation: `flowParticleHorizontal 4s ease-in-out ${i * 0.5}s infinite`,
          }}
        />
      ))}
      {/* Secondary particles with different timing */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`secondary-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `hsl(var(--orange))`,
            boxShadow: `0 0 8px hsl(var(--orange))`,
            top: '50%',
            left: '0%',
            animation: `flowParticleHorizontal 3.5s ease-in-out ${i * 0.7 + 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function UniversalZeroTrustPipeline() {
  const [activeMode, setActiveMode] = useState("saas");
  const [activeStage, setActiveStage] = useState<string | null>(null);
  
  const config = getModeSpecificConfig(activeMode);
  const currentMode = deploymentModes.find(m => m.id === activeMode)!;

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/10 via-background to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--azure) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--azure) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
      </div>
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-orange/30 text-orange text-sm font-bold mb-6">
            <Shield className="w-4 h-4" />
            Universal Architecture
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">TRACEFLOW — Universal Zero-Trust Pipeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            "TRACEFLOW runs the same intelligence pipeline everywhere — only the trust boundary moves."
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            No matter where TRACEFLOW runs, the logical lifecycle is immutable. This sequence is never reordered. No deployment mode bypasses stages.
          </p>
        </div>

        {/* Blueprint Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden glass border border-border/50">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img 
            src={deploymentModelsImage} 
            alt="The Traceflow Blueprint: One Pipeline, Any Environment - Four Deployment Models showing SaaS-First, Hybrid, On-Prem, and Air-Gapped options with the immutable lifecycle" 
            className="w-full h-auto object-cover"
          />
          {/* Overlay to hide watermark area */}
          <div className="absolute bottom-0 right-0 w-32 h-8 bg-gradient-to-l from-background via-background to-transparent z-20" />
        </div>

        {/* Deployment Mode Toggle */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {deploymentModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={cn(
                "flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-500 border-2",
                activeMode === mode.id
                  ? cn(
                      "shadow-lg scale-105",
                      mode.color === "azure" && "bg-azure/20 border-azure text-azure",
                      mode.color === "aqua" && "bg-aqua/20 border-aqua text-aqua",
                      mode.color === "orange" && "bg-orange/20 border-orange text-orange",
                      mode.color === "destructive" && "bg-destructive/20 border-destructive text-destructive"
                    )
                  : "bg-card/50 border-border/50 text-muted-foreground hover:border-border hover:bg-card"
              )}
            >
              <mode.icon className={cn("w-5 h-5", activeMode === mode.id && "animate-pulse")} />
              <div className="text-left">
                <div className="font-bold text-sm">{mode.label}</div>
                <div className="text-xs opacity-80">{mode.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Immutable Pipeline Flow */}
        <div className="relative mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Immutable Pipeline Lifecycle</h3>
            <p className="text-sm text-muted-foreground">🚫 Never reordered • 🚫 No stages bypassed</p>
          </div>
          
          {/* Pipeline Stages */}
          <div className="relative">
            {/* Connection Lines with Animated Particles */}
            <div className="absolute top-1/2 left-[8%] right-[8%] h-2 -translate-y-1/2 hidden lg:block">
              <div className="h-full bg-gradient-to-r from-azure/30 via-aqua/30 to-orange/30 rounded-full relative overflow-hidden">
                {/* Animated gradient overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-azure via-aqua to-orange rounded-full"
                  style={{ 
                    animation: 'shimmerFlow 3s linear infinite',
                    backgroundSize: '200% 100%'
                  }} 
                />
              </div>
            </div>
            
            {/* Data Flow Particles */}
            <DataFlowParticles />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 relative z-10">
              {pipelineStages.map((stage, idx) => (
                <div 
                  key={stage.id}
                  className="relative group"
                  onMouseEnter={() => setActiveStage(stage.id)}
                  onMouseLeave={() => setActiveStage(null)}
                >
                  {/* Arrow connector (mobile) */}
                  {idx < pipelineStages.length - 1 && idx > 0 && (
                    <div className="flex justify-center py-2 lg:hidden">
                      <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
                    </div>
                  )}
                  
                  <div className={cn(
                    "p-5 rounded-xl glass border-2 transition-all duration-500 relative overflow-hidden",
                    activeStage === stage.id && "scale-105 -translate-y-1",
                    stage.color === "azure" && "border-azure/30 hover:border-azure/60 hover:shadow-[0_0_30px_hsl(var(--azure)/0.2)]",
                    stage.color === "aqua" && "border-aqua/30 hover:border-aqua/60 hover:shadow-[0_0_30px_hsl(var(--aqua)/0.2)]",
                    stage.color === "orange" && "border-orange/30 hover:border-orange/60 hover:shadow-[0_0_30px_hsl(var(--orange)/0.2)]"
                  )}>
                    {/* Stage Number */}
                    <div className={cn(
                      "absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
                      stage.color === "azure" && "bg-azure text-primary-foreground",
                      stage.color === "aqua" && "bg-aqua text-primary-foreground",
                      stage.color === "orange" && "bg-orange text-primary-foreground"
                    )}>
                      {idx + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                      {stage.icon}
                    </div>
                    
                    {/* Name */}
                    <h4 className={cn(
                      "text-lg font-bold mb-2",
                      stage.color === "azure" && "text-azure",
                      stage.color === "aqua" && "text-aqua",
                      stage.color === "orange" && "text-orange"
                    )}>
                      {stage.name}
                    </h4>
                    
                    {/* Steps */}
                    <div className="space-y-1 mb-3">
                      {stage.steps.map((step, sIdx) => (
                        <div 
                          key={step} 
                          className="text-xs text-muted-foreground flex items-center gap-1"
                          style={{ animationDelay: `${sIdx * 100}ms` }}
                        >
                          <span className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            stage.color === "azure" && "bg-azure",
                            stage.color === "aqua" && "bg-aqua",
                            stage.color === "orange" && "bg-orange"
                          )} />
                          {step}
                        </div>
                      ))}
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-muted-foreground/70">{stage.description}</p>
                    
                    {/* Animated glow on hover */}
                    <div className={cn(
                      "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                      stage.color === "azure" && "bg-gradient-to-t from-azure/10 to-transparent",
                      stage.color === "aqua" && "bg-gradient-to-t from-aqua/10 to-transparent",
                      stage.color === "orange" && "bg-gradient-to-t from-orange/10 to-transparent"
                    )} />
                  </div>
                  
                  {/* Arrow connector with particle effect (desktop) */}
                  {idx < pipelineStages.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center relative",
                        stage.color === "azure" && "bg-azure",
                        stage.color === "aqua" && "bg-aqua",
                        stage.color === "orange" && "bg-orange"
                      )}>
                        <ArrowDown className="w-3 h-3 text-primary-foreground rotate-[-90deg]" />
                        {/* Pulse effect */}
                        <div className={cn(
                          "absolute inset-0 rounded-full animate-ping",
                          stage.color === "azure" && "bg-azure/50",
                          stage.color === "aqua" && "bg-aqua/50",
                          stage.color === "orange" && "bg-orange/50"
                        )} style={{ animationDuration: '2s' }} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mode-Specific Flow Diagram */}
        <div className={cn(
          "rounded-2xl glass border-2 p-8 mb-8 transition-all duration-500",
          currentMode.color === "azure" && "border-azure/30",
          currentMode.color === "aqua" && "border-aqua/30",
          currentMode.color === "orange" && "border-orange/30",
          currentMode.color === "destructive" && "border-destructive/30"
        )}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mode Info */}
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  currentMode.color === "azure" && "bg-azure/20",
                  currentMode.color === "aqua" && "bg-aqua/20",
                  currentMode.color === "orange" && "bg-orange/20",
                  currentMode.color === "destructive" && "bg-destructive/20"
                )}>
                  <currentMode.icon className={cn(
                    "w-6 h-6",
                    currentMode.color === "azure" && "text-azure",
                    currentMode.color === "aqua" && "text-aqua",
                    currentMode.color === "orange" && "text-orange",
                    currentMode.color === "destructive" && "text-destructive"
                  )} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{currentMode.label} Flow</h3>
                  <p className="text-sm text-muted-foreground">{currentMode.subtitle}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Use When:</h4>
                <ul className="space-y-1">
                  {currentMode.useCases.map((useCase) => (
                    <li key={useCase} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Check className={cn(
                        "w-4 h-4 shrink-0",
                        currentMode.color === "azure" && "text-azure",
                        currentMode.color === "aqua" && "text-aqua",
                        currentMode.color === "orange" && "text-orange",
                        currentMode.color === "destructive" && "text-destructive"
                      )} />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-2">Why Choose This:</h4>
                <ul className="space-y-1">
                  {currentMode.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        currentMode.color === "azure" && "bg-azure",
                        currentMode.color === "aqua" && "bg-aqua",
                        currentMode.color === "orange" && "bg-orange",
                        currentMode.color === "destructive" && "bg-destructive"
                      )} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Flow Visualization */}
            <div className="lg:w-2/3">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Local Components */}
                <div className="p-5 rounded-xl bg-card/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-orange" />
                    <h4 className="font-semibold">Local / On-Prem</h4>
                  </div>
                  <div className="space-y-2">
                    {config.localComponents.map((comp, idx) => (
                      <div 
                        key={comp} 
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange/10 border border-orange/20 text-sm animate-fade-in"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                        {comp}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Cloud Components */}
                <div className="p-5 rounded-xl bg-card/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Cloud className="w-5 h-5 text-azure" />
                    <h4 className="font-semibold">TRACEFLOW Cloud</h4>
                  </div>
                  {config.cloudComponents.length > 0 ? (
                    <div className="space-y-2">
                      {config.cloudComponents.map((comp, idx) => (
                        <div 
                          key={comp} 
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-azure/10 border border-azure/20 text-sm animate-fade-in"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-azure animate-pulse" />
                          {comp}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
                      <div className="text-center">
                        <X className="w-8 h-8 mx-auto mb-2 text-destructive/50" />
                        <p>No cloud connectivity</p>
                        <p className="text-xs">All components run locally</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Data Flow Indicator */}
              <div className={cn(
                "mt-4 p-4 rounded-xl flex items-center justify-center gap-3",
                currentMode.color === "azure" && "bg-azure/10 border border-azure/20",
                currentMode.color === "aqua" && "bg-aqua/10 border border-aqua/20",
                currentMode.color === "orange" && "bg-orange/10 border border-orange/20",
                currentMode.color === "destructive" && "bg-destructive/10 border border-destructive/20"
              )}>
                <AlertTriangle className={cn(
                  "w-5 h-5",
                  currentMode.color === "azure" && "text-azure",
                  currentMode.color === "aqua" && "text-aqua",
                  currentMode.color === "orange" && "text-orange",
                  currentMode.color === "destructive" && "text-destructive"
                )} />
                <div>
                  <span className="font-semibold">Trust Boundary: </span>
                  <span className="text-muted-foreground">{currentMode.trustBoundary}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SDK Clarification */}
        <div className="text-center p-6 rounded-xl glass border border-azure/20 mb-8">
          <h4 className="text-lg font-bold mb-2">
            <span className="gradient-text">SaaS-First SDK — Same API Everywhere</span>
          </h4>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
            When users see "SaaS-First SDK", it means the SDK API is identical everywhere. 
            No code changes across deployments. Only the Emit target changes.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-azure/10 text-azure text-sm font-mono">
            Instrument → Capture → Contextualize → Validate → Emit
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {deploymentModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={cn(
                "p-4 rounded-xl text-center transition-all duration-300 border",
                activeMode === mode.id 
                  ? cn(
                      "scale-105",
                      mode.color === "azure" && "bg-azure/20 border-azure",
                      mode.color === "aqua" && "bg-aqua/20 border-aqua",
                      mode.color === "orange" && "bg-orange/20 border-orange",
                      mode.color === "destructive" && "bg-destructive/20 border-destructive"
                    )
                  : "bg-card/30 border-border/50 hover:bg-card/50"
              )}
            >
              <mode.icon className={cn(
                "w-6 h-6 mx-auto mb-2",
                mode.color === "azure" && "text-azure",
                mode.color === "aqua" && "text-aqua",
                mode.color === "orange" && "text-orange",
                mode.color === "destructive" && "text-destructive"
              )} />
              <div className="font-bold text-sm">{mode.label}</div>
              <div className="text-xs text-muted-foreground">{mode.subtitle}</div>
            </button>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes flowParticleHorizontal {
          0% { 
            left: 0%; 
            opacity: 0;
            transform: translateY(-50%) scale(0.5);
          }
          10% { 
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
          90% { 
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
          100% { 
            left: 100%; 
            opacity: 0;
            transform: translateY(-50%) scale(0.5);
          }
        }
        
        @keyframes shimmerFlow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
