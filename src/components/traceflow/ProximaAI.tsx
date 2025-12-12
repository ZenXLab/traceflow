import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Brain, 
  User, 
  Map, 
  GitBranch, 
  Eye, 
  DollarSign, 
  Ticket, 
  Sparkles, 
  Shield, 
  Zap,
  ArrowRight,
  Plus
} from "lucide-react";

const agents = [
  { 
    icon: User, 
    name: "Session Analyst", 
    shortName: "Session",
    description: "Deep behavioral pattern recognition across user sessions", 
    color: "aqua",
    capability: "Behavior Analysis"
  },
  { 
    icon: Map, 
    name: "Journey Mapper", 
    shortName: "Journey",
    description: "Cross-session path optimization and funnel analysis", 
    color: "azure",
    capability: "Path Intelligence"
  },
  { 
    icon: GitBranch, 
    name: "Causality Engine", 
    shortName: "Causality",
    description: "Automated root cause identification and correlation", 
    color: "orange",
    capability: "Root Cause Analysis"
  },
  { 
    icon: Eye, 
    name: "UX Vision", 
    shortName: "UX Vision",
    description: "Visual experience analysis and accessibility insights", 
    color: "aqua",
    capability: "Visual Intelligence"
  },
  { 
    icon: DollarSign, 
    name: "Revenue Impact", 
    shortName: "Revenue",
    description: "Business value quantification and ROI attribution", 
    color: "orange",
    capability: "Business Analytics"
  },
  { 
    icon: Ticket, 
    name: "Ticket Automator", 
    shortName: "Tickets",
    description: "Auto-create prioritized and actionable support tickets", 
    color: "azure",
    capability: "Workflow Automation"
  },
  { 
    icon: Shield, 
    name: "Anomaly Guardian", 
    shortName: "Anomaly",
    description: "Real-time threat and anomaly detection patterns", 
    color: "aqua",
    capability: "Security Intelligence"
  },
  { 
    icon: Zap, 
    name: "Performance Oracle", 
    shortName: "Performance",
    description: "Predictive performance and latency optimization", 
    color: "orange",
    capability: "Performance AI"
  },
];

export function ProximaAI() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeAgent, setActiveAgent] = useState<number | null>(null);
  const [pulsePhase, setPulsePhase] = useState(0);

  // Animated neural network background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * 2;
      canvas.height = rect.height * 2;
      ctx.scale(2, 2);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      radius: number;
      color: string;
      speed: number;
      progress: number;
    }

    const particles: Particle[] = [];
    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    const colors = ["#00C2D8", "#0B3D91", "#FF8A00"];

    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 180 + Math.random() * 120;
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        targetX: centerX,
        targetY: centerY,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.002 + Math.random() * 0.003,
        progress: Math.random(),
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      time += 0.02;

      // Draw pulsing rings
      [80, 120, 160, 200].forEach((radius, i) => {
        const pulseRadius = radius + Math.sin(time * 2 + i) * 5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 194, 216, ${0.12 - i * 0.025})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw neural connections
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          const angle = Math.random() * Math.PI * 2;
          const distance = 180 + Math.random() * 120;
          p.x = centerX + Math.cos(angle) * distance;
          p.y = centerY + Math.sin(angle) * distance;
        }

        const currentX = p.x + (p.targetX - p.x) * p.progress;
        const currentY = p.y + (p.targetY - p.y) * p.progress;

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(currentX, currentY);
        const gradient = ctx.createLinearGradient(p.x, p.y, currentX, currentY);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, p.color + "40");
        gradient.addColorStop(1, p.color);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(currentX, currentY, p.radius * (1 + p.progress), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(currentX, currentY, p.radius * 3, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, p.radius * 3);
        glowGradient.addColorStop(0, p.color + "30");
        glowGradient.addColorStop(1, "transparent");
        ctx.fillStyle = glowGradient;
        ctx.fill();
      });

      // Central core glow
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
      coreGradient.addColorStop(0, `rgba(0, 194, 216, ${0.25 + Math.sin(time * 3) * 0.1})`);
      coreGradient.addColorStop(0.4, "rgba(11, 61, 145, 0.12)");
      coreGradient.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Pulse animation for agents
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 8);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      aqua: {
        bg: "bg-gradient-to-br from-aqua/20 to-aqua/5",
        border: isActive ? "border-aqua shadow-[0_0_30px_hsl(var(--aqua)/0.4)]" : "border-aqua/30",
        text: "text-aqua",
        glow: "shadow-[0_0_20px_hsl(var(--aqua)/0.3)]"
      },
      azure: {
        bg: "bg-gradient-to-br from-azure/20 to-azure/5",
        border: isActive ? "border-azure shadow-[0_0_30px_hsl(var(--azure)/0.4)]" : "border-azure/30",
        text: "text-azure",
        glow: "shadow-[0_0_20px_hsl(var(--azure)/0.3)]"
      },
      orange: {
        bg: "bg-gradient-to-br from-orange/20 to-orange/5",
        border: isActive ? "border-orange shadow-[0_0_30px_hsl(var(--orange)/0.4)]" : "border-orange/30",
        text: "text-orange",
        glow: "shadow-[0_0_20px_hsl(var(--orange)/0.3)]"
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section 
      className="section-padding relative overflow-hidden"
      id="proxima"
      aria-labelledby="proxima-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-azure/5 to-background" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--azure)/0.08),transparent_70%)]" aria-hidden="true" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure to-aqua text-primary-foreground text-sm font-bold mb-6 shadow-lg">
            <Brain className="w-4 h-4" aria-hidden="true" />
            Multi-Agent AI System
          </span>
          <h2 id="proxima-heading" className="text-3xl lg:text-5xl font-bold mb-4">
            PROXIMA — <span className="gradient-text">Digital Intelligence</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Eight specialized AI agents working in perfect symphony to transform your digital experience data into actionable intelligence
          </p>
          
          {/* Evolving Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur border border-border/50 text-sm">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aqua"></span>
            </div>
            <span className="text-muted-foreground">Continuously evolving with</span>
            <span className="font-semibold text-foreground">more specialized agents</span>
            <Plus className="w-3.5 h-3.5 text-aqua" />
          </div>
        </div>

        {/* Main Visualization - Desktop */}
        <div className="relative max-w-6xl mx-auto hidden lg:block mb-16">
          {/* Canvas for neural network animation */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ height: "600px" }}
            aria-hidden="true"
          />

          {/* Central Hub */}
          <div className="relative flex items-center justify-center" style={{ height: "600px" }}>
            {/* Animated Orbit Rings */}
            <div 
              className="absolute rounded-full border-2 border-dashed border-azure/20"
              style={{ width: "480px", height: "480px", animation: "spin 50s linear infinite" }} 
            />
            <div 
              className="absolute rounded-full border border-aqua/15"
              style={{ width: "400px", height: "400px", animation: "spin 40s linear infinite reverse" }} 
            />
            <div 
              className="absolute rounded-full border border-azure/10"
              style={{ width: "320px", height: "320px", animation: "spin 30s linear infinite" }} 
            />

            {/* Central Brain Core */}
            <div className="relative z-10 group cursor-pointer">
              <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-azure/20 to-aqua/20 blur-3xl animate-pulse" />
              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-aqua/30 to-azure/30 blur-xl" 
                   style={{ animation: "pulse 2s ease-in-out infinite" }} />
              
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-azure via-aqua to-azure flex items-center justify-center shadow-[0_0_100px_hsl(var(--aqua)/0.5)] transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-aqua/50 to-transparent" />
                <div className="relative">
                  <Brain className="w-20 h-20 text-primary-foreground drop-shadow-lg" />
                  <Sparkles className="absolute -top-3 -right-3 w-6 h-6 text-orange animate-pulse" />
                </div>
                <div 
                  className="absolute inset-0 rounded-full border-2 border-primary-foreground/30 border-dashed"
                  style={{ animation: "spin 8s linear infinite" }}
                />
              </div>
              
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="px-6 py-2.5 rounded-full bg-card/95 backdrop-blur-xl text-base font-bold gradient-text border border-aqua/40 shadow-xl">
                  PROXIMA Core
                </span>
              </div>
            </div>

            {/* Orbiting Agent Nodes - 8 agents */}
            {agents.map((agent, index) => {
              const angle = (index * 45 - 90) * (Math.PI / 180);
              const radius = 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = activeAgent === index;
              const isPulsing = pulsePhase === index;
              const colorClasses = getColorClasses(agent.color, isActive);

              return (
                <div
                  key={agent.name}
                  className="absolute z-20"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                  onMouseEnter={() => setActiveAgent(index)}
                  onMouseLeave={() => setActiveAgent(null)}
                >
                  {/* Connection Line */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{
                      width: radius + 20,
                      height: "4px",
                      left: "50%",
                      top: "50%",
                      transform: `translate(-100%, -50%) rotate(${(angle * 180) / Math.PI + 180}deg)`,
                      transformOrigin: "right center",
                    }}
                  >
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor={agent.color === "aqua" ? "#00C2D8" : agent.color === "azure" ? "#0B3D91" : "#FF8A00"} stopOpacity="0.5" />
                        <stop offset="100%" stopColor={agent.color === "aqua" ? "#00C2D8" : agent.color === "azure" ? "#0B3D91" : "#FF8A00"} />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="2"
                      x2={radius}
                      y2="2"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      className={cn("transition-opacity duration-300", isActive ? "opacity-100" : "opacity-40")}
                    />
                    <circle
                      r="3"
                      fill={agent.color === "aqua" ? "#00C2D8" : agent.color === "azure" ? "#0B3D91" : "#FF8A00"}
                      style={{ animationDelay: `${index * 0.25}s` }}
                    >
                      <animateMotion
                        dur="2.5s"
                        repeatCount="indefinite"
                        path={`M 0,2 L ${radius},2`}
                      />
                    </circle>
                  </svg>

                  {/* Agent Node with Label */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={cn(
                        "relative w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer",
                        "bg-card/90 backdrop-blur border-2 transition-all duration-300",
                        colorClasses.border,
                        isPulsing && "animate-pulse scale-110",
                        !isActive && "hover:scale-105"
                      )}
                      role="button"
                      aria-label={`${agent.name}: ${agent.description}`}
                      tabIndex={0}
                    >
                      <agent.icon className={cn("w-6 h-6 transition-colors duration-300", colorClasses.text)} />
                      {(isActive || isPulsing) && (
                        <div 
                          className="absolute inset-0 rounded-xl border-2 animate-ping opacity-30" 
                          style={{ borderColor: agent.color === "aqua" ? "#00C2D8" : agent.color === "azure" ? "#0B3D91" : "#FF8A00" }} 
                        />
                      )}
                    </div>

                    {/* Agent Name Label */}
                    <div className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300",
                      "bg-card/80 backdrop-blur border",
                      isActive ? colorClasses.border : "border-border/50",
                      isActive ? colorClasses.text : "text-muted-foreground"
                    )}>
                      {agent.shortName}
                    </div>
                  </div>

                  {/* Expanded Tooltip */}
                  <div 
                    className={cn(
                      "absolute z-40 transition-all duration-300 pointer-events-none",
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-95",
                      index < 2 || index === 7 ? "bottom-full mb-16 left-1/2 -translate-x-1/2" :
                      index < 5 ? "left-full ml-6 top-1/2 -translate-y-1/2" :
                      "top-full mt-16 left-1/2 -translate-x-1/2"
                    )}
                  >
                    <div className={cn(
                      "px-5 py-4 rounded-xl bg-card/95 backdrop-blur-xl border shadow-2xl min-w-[220px]",
                      colorClasses.border
                    )}>
                      <div className={cn("text-xs font-medium mb-1", colorClasses.text)}>{agent.capability}</div>
                      <div className="text-sm font-bold text-foreground mb-2">{agent.name}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{agent.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Agent Cards Grid - All Screen Sizes (shown below visualization on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {agents.map((agent, index) => {
            const colorClasses = getColorClasses(agent.color, pulsePhase === index);
            
            return (
              <div
                key={agent.name}
                className={cn(
                  "group relative p-5 rounded-2xl glass border-2 transition-all duration-500 cursor-pointer",
                  "hover:scale-[1.02] hover:-translate-y-1",
                  pulsePhase === index 
                    ? `${colorClasses.border} ${colorClasses.glow}` 
                    : "border-border/50 hover:border-aqua/30"
                )}
                onMouseEnter={() => setActiveAgent(index)}
                onMouseLeave={() => setActiveAgent(null)}
              >
                {/* Icon */}
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                  colorClasses.bg,
                  "group-hover:scale-110 group-hover:rotate-3"
                )}>
                  <agent.icon className={cn("w-6 h-6", colorClasses.text)} />
                </div>

                {/* Content */}
                <div className={cn(
                  "text-[10px] font-semibold uppercase tracking-wider mb-1 transition-colors",
                  colorClasses.text
                )}>
                  {agent.capability}
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm lg:text-base">{agent.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {agent.description}
                </p>

                {/* Hover Accent */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-opacity duration-300",
                  "bg-gradient-to-r",
                  agent.color === "aqua" ? "from-aqua to-aqua/50" :
                  agent.color === "azure" ? "from-azure to-azure/50" :
                  "from-orange to-orange/50",
                  "opacity-0 group-hover:opacity-100"
                )} />
              </div>
            );
          })}
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-azure/10 via-aqua/10 to-orange/10 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-azure to-aqua">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">More Agents Coming Soon</div>
                <div className="text-sm text-muted-foreground">
                  We're training specialized agents for industry-specific tasks
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-aqua hidden sm:block" />
            <div className="flex gap-2">
              {["Finance", "Healthcare", "Retail"].map((industry) => (
                <span 
                  key={industry}
                  className="px-3 py-1 rounded-full bg-card/80 border border-border/50 text-xs font-medium text-muted-foreground"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-16 lg:mt-20" role="img" aria-label="Data flow: Events to Agents to Insights to Actions">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
            {["Raw Events", "AI Agents", "Smart Insights", "Auto Actions"].map((step, index) => (
              <div key={step} className="flex items-center gap-4 lg:gap-6">
                <div className={cn(
                  "relative px-8 py-4 rounded-xl font-bold transition-all duration-500",
                  "bg-card/80 backdrop-blur border border-border/50",
                  "hover:border-aqua/50 hover:shadow-[0_0_30px_hsl(var(--aqua)/0.2)] hover:scale-105"
                )}>
                  <span className="text-sm lg:text-base">{step}</span>
                  <div 
                    className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full",
                      index === 0 ? "bg-azure" :
                      index === 1 ? "bg-aqua" :
                      index === 2 ? "bg-orange" :
                      "bg-gradient-to-r from-aqua to-azure"
                    )} 
                  />
                </div>
                {index < 3 && (
                  <div className="hidden lg:flex items-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-border to-aqua/50" />
                    <ArrowRight className="w-4 h-4 text-aqua animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
