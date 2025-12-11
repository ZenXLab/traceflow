import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Brain, User, Map, GitBranch, Eye, DollarSign, Ticket, Sparkles } from "lucide-react";

const agents = [
  { icon: User, name: "Session Analyst", description: "Deep session behavior analysis", color: "aqua" },
  { icon: Map, name: "Journey Mapper", description: "Cross-session path optimization", color: "azure" },
  { icon: GitBranch, name: "Causality Engine", description: "Root cause identification", color: "orange" },
  { icon: Eye, name: "UX Vision", description: "Visual experience insights", color: "aqua" },
  { icon: DollarSign, name: "Revenue Impact", description: "Business value quantification", color: "orange" },
  { icon: Ticket, name: "Ticket Automation", description: "Auto-create actionable tickets", color: "azure" },
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

    // Create particles that flow to center
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 150 + Math.random() * 100;
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
      [60, 90, 120].forEach((radius, i) => {
        const pulseRadius = radius + Math.sin(time * 2 + i) * 5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 194, 216, ${0.15 - i * 0.04})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Draw neural connections
      particles.forEach((p, i) => {
        // Update progress
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          const angle = Math.random() * Math.PI * 2;
          const distance = 150 + Math.random() * 100;
          p.x = centerX + Math.cos(angle) * distance;
          p.y = centerY + Math.sin(angle) * distance;
        }

        // Calculate current position
        const currentX = p.x + (p.targetX - p.x) * p.progress;
        const currentY = p.y + (p.targetY - p.y) * p.progress;

        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(currentX, currentY);
        const gradient = ctx.createLinearGradient(p.x, p.y, currentX, currentY);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, p.color + "60");
        gradient.addColorStop(1, p.color);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw particle
        ctx.beginPath();
        ctx.arc(currentX, currentY, p.radius * (1 + p.progress), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(currentX, currentY, p.radius * 3, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, p.radius * 3);
        glowGradient.addColorStop(0, p.color + "40");
        glowGradient.addColorStop(1, "transparent");
        ctx.fillStyle = glowGradient;
        ctx.fill();
      });

      // Central core glow
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 80);
      coreGradient.addColorStop(0, `rgba(0, 194, 216, ${0.3 + Math.sin(time * 3) * 0.1})`);
      coreGradient.addColorStop(0.5, "rgba(11, 61, 145, 0.15)");
      coreGradient.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
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
      setPulsePhase(prev => (prev + 1) % 6);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="section-padding relative overflow-hidden"
      id="proxima"
      aria-labelledby="proxima-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-azure/5 to-background" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure to-aqua text-primary-foreground text-sm font-bold mb-6">
            <Brain className="w-4 h-4" aria-hidden="true" />
            Multi-Agent AI
          </span>
          <h2 id="proxima-heading" className="text-3xl lg:text-5xl font-bold mb-4">
            PROXIMA — <span className="gradient-text">Digital Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six specialized AI agents working in concert
          </p>
        </div>

        {/* Central Brain Visualization - Desktop */}
        <div className="relative max-w-4xl mx-auto hidden lg:block">
          {/* Canvas for neural network animation */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ height: "500px" }}
            aria-hidden="true"
          />

          {/* Central Hub */}
          <div className="relative flex items-center justify-center" style={{ height: "500px" }}>
            {/* Animated Orbit Rings */}
            <div 
              className="absolute rounded-full border-2 border-dashed border-azure/30"
              style={{ 
                width: "360px", 
                height: "360px",
                animation: "spin 40s linear infinite"
              }} 
            />
            <div 
              className="absolute rounded-full border border-aqua/20"
              style={{ 
                width: "300px", 
                height: "300px",
                animation: "spin 30s linear infinite reverse"
              }} 
            />
            <div 
              className="absolute rounded-full border border-azure/15"
              style={{ 
                width: "240px", 
                height: "240px",
                animation: "spin 20s linear infinite"
              }} 
            />

            {/* Central Brain Core - Animated */}
            <div className="relative z-10 group cursor-pointer">
              {/* Outer glow layers */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-azure/20 to-aqua/20 blur-2xl animate-pulse" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-aqua/30 to-azure/30 blur-xl" 
                   style={{ animation: "pulse 2s ease-in-out infinite" }} />
              
              {/* Core */}
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-azure via-aqua to-azure flex items-center justify-center shadow-[0_0_80px_hsl(var(--aqua)/0.5)] transition-transform duration-500 group-hover:scale-110">
                {/* Inner glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-aqua/50 to-transparent" />
                
                {/* Brain icon with sparkle effect */}
                <div className="relative">
                  <Brain className="w-16 h-16 text-primary-foreground drop-shadow-lg" />
                  <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-orange animate-pulse" />
                </div>
                
                {/* Rotating ring */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-primary-foreground/30 border-dashed animate-spin"
                  style={{ 
                    animationDuration: "10s"
                  }}
                />
              </div>
              
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="px-5 py-2 rounded-full bg-card/90 backdrop-blur-xl text-sm font-bold gradient-text border border-aqua/30 shadow-lg">
                  PROXIMA Core
                </span>
              </div>
            </div>

            {/* Orbiting Agent Nodes */}
            {agents.map((agent, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = activeAgent === index;
              const isPulsing = pulsePhase === index;

              const colorClasses = {
                aqua: "from-aqua to-aqua/50 border-aqua/50 shadow-[0_0_20px_hsl(var(--aqua)/0.3)]",
                azure: "from-azure to-azure/50 border-azure/50 shadow-[0_0_20px_hsl(var(--azure)/0.3)]",
                orange: "from-orange to-orange/50 border-orange/50 shadow-[0_0_20px_hsl(var(--orange)/0.3)]",
              };

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
                  {/* Connection Line with animated flow */}
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
                        <stop offset="50%" stopColor={agent.color === "aqua" ? "#00C2D8" : agent.color === "azure" ? "#0B3D91" : "#FF8A00"} stopOpacity="0.6" />
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
                      className={isActive ? "opacity-100" : "opacity-50"}
                    />
                    {/* Animated particle on line */}
                    <circle
                      r="3"
                      fill={agent.color === "aqua" ? "#00C2D8" : agent.color === "azure" ? "#0B3D91" : "#FF8A00"}
                      className="animate-[flowToCenter_2s_ease-in-out_infinite]"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={`M 0,2 L ${radius},2`}
                      />
                    </circle>
                  </svg>

                  {/* Agent Node */}
                  <div
                    className={cn(
                      "relative w-16 h-16 rounded-xl flex items-center justify-center cursor-pointer",
                      "bg-card/90 backdrop-blur border-2 transition-all duration-300",
                      isActive && colorClasses[agent.color as keyof typeof colorClasses],
                      isPulsing && "animate-pulse scale-110",
                      !isActive && "border-border/50 hover:scale-105"
                    )}
                    role="button"
                    aria-label={`${agent.name}: ${agent.description}`}
                    tabIndex={0}
                  >
                    <agent.icon className={cn(
                      "w-7 h-7 transition-colors duration-300",
                      isActive 
                        ? agent.color === "aqua" ? "text-aqua" : agent.color === "azure" ? "text-azure" : "text-orange"
                        : "text-muted-foreground"
                    )} />

                    {/* Pulse ring when active */}
                    {(isActive || isPulsing) && (
                      <div className="absolute inset-0 rounded-xl border-2 border-current animate-ping opacity-30" 
                           style={{ borderColor: agent.color === "aqua" ? "#00C2D8" : agent.color === "azure" ? "#0B3D91" : "#FF8A00" }} />
                    )}
                  </div>

                  {/* Tooltip - positioned to avoid overlap */}
                  <div 
                    className={cn(
                      "absolute z-30 transition-all duration-300 pointer-events-none",
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-95",
                      // Position based on angle to avoid overlapping
                      index < 2 ? "bottom-full mb-3 left-1/2 -translate-x-1/2" :
                      index < 4 ? "left-full ml-3 top-1/2 -translate-y-1/2" :
                      "top-full mt-3 left-1/2 -translate-x-1/2"
                    )}
                  >
                    <div className="px-4 py-3 rounded-xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl min-w-[180px]">
                      <div className="text-sm font-bold text-foreground mb-1">{agent.name}</div>
                      <div className="text-xs text-muted-foreground">{agent.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Agent Cards - Mobile/Tablet */}
        <div className="grid sm:grid-cols-2 lg:hidden gap-4">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className={cn(
                "p-4 rounded-xl glass border transition-all duration-300",
                pulsePhase === index 
                  ? "border-aqua/50 shadow-[0_0_20px_hsl(var(--aqua)/0.2)]" 
                  : "border-border/50 hover:border-aqua/30"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                  agent.color === "aqua" ? "bg-gradient-to-br from-aqua/20 to-aqua/5" :
                  agent.color === "azure" ? "bg-gradient-to-br from-azure/20 to-azure/5" :
                  "bg-gradient-to-br from-orange/20 to-orange/5"
                )}>
                  <agent.icon className={cn(
                    "w-6 h-6",
                    agent.color === "aqua" ? "text-aqua" :
                    agent.color === "azure" ? "text-azure" :
                    "text-orange"
                  )} />
                </div>
                <div>
                  <div className="font-bold text-foreground">{agent.name}</div>
                  <div className="text-xs text-muted-foreground">{agent.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="mt-20" role="img" aria-label="Data flow: Events to Agents to Insights to Actions">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
            {["Events", "Agents", "Insights", "Actions"].map((step, index) => (
              <div key={step} className="flex items-center gap-4 lg:gap-6">
                <div className={cn(
                  "relative px-8 py-4 rounded-xl font-bold transition-all duration-500",
                  "bg-card/80 backdrop-blur border border-border/50",
                  "hover:border-aqua/50 hover:shadow-[0_0_30px_hsl(var(--aqua)/0.2)]"
                )}>
                  {step}
                  {/* Animated indicator */}
                  <div 
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-aqua animate-ping"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                </div>
                {index < 3 && (
                  <div className="hidden lg:flex items-center">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-azure to-aqua relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground to-transparent animate-[shimmer_1.5s_infinite]" />
                    </div>
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-aqua" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes flowToCenter {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
