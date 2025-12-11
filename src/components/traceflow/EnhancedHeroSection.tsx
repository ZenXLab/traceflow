import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Globe, Key, Fingerprint, Play, AlertTriangle, BarChart3, Brain, Ticket, MousePointer, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import heroBackground from "@/assets/hero-background.png";

const trustBadges = [
  { icon: Shield, label: "SOC2 Type II" },
  { icon: Lock, label: "Zero-PII" },
  { icon: Globe, label: "GDPR Ready" },
  { icon: Key, label: "Hybrid/On-Prem" },
  { icon: Fingerprint, label: "Dual WebAuthn" },
];

// Simulated session recording events
const sessionEvents = [
  { time: "0:00", type: "pageview", element: "Homepage", x: 50, y: 30 },
  { time: "0:03", type: "click", element: "Products Menu", x: 25, y: 15 },
  { time: "0:05", type: "scroll", element: "Product List", x: 50, y: 50 },
  { time: "0:08", type: "click", element: "Add to Cart", x: 70, y: 65 },
  { time: "0:12", type: "click", element: "Checkout", x: 85, y: 20 },
  { time: "0:18", type: "input", element: "Email Field", x: 40, y: 40 },
  { time: "0:23", type: "rage_click", element: "Submit Button", x: 60, y: 75 },
  { time: "0:28", type: "error", element: "Form Validation", x: 60, y: 75 },
];

export function EnhancedHeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 30 });
  const [sessionTime, setSessionTime] = useState(0);
  const [showRageClick, setShowRageClick] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Simulate session recording playback
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTime(prev => {
        const next = (prev + 1) % 35;
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update cursor position based on session time
  useEffect(() => {
    const eventIndex = sessionEvents.findIndex((e, i) => {
      const timeInSeconds = parseInt(e.time.split(':')[1]);
      const nextEvent = sessionEvents[i + 1];
      const nextTimeInSeconds = nextEvent ? parseInt(nextEvent.time.split(':')[1]) : 35;
      return sessionTime >= timeInSeconds && sessionTime < nextTimeInSeconds;
    });

    if (eventIndex !== -1 && eventIndex !== currentEventIndex) {
      setCurrentEventIndex(eventIndex);
      const event = sessionEvents[eventIndex];
      setCursorPosition({ x: event.x, y: event.y });
      
      if (event.type === "rage_click") {
        setShowRageClick(true);
        setTimeout(() => setShowRageClick(false), 2000);
      }
    }
  }, [sessionTime, currentEventIndex]);

  // Enhanced particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
      angle: number;
      orbitRadius: number;
      orbitSpeed: number;
    }

    const particles: Particle[] = [];
    const colors = ["#0B3D91", "#00C2D8", "#FF8A00"];
    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;

    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const orbitRadius = 80 + Math.random() * 200;
      particles.push({
        x: centerX + Math.cos(angle) * orbitRadius,
        y: centerY + Math.sin(angle) * orbitRadius,
        vx: 0,
        vy: 0,
        radius: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle,
        orbitRadius,
        orbitSpeed: (Math.random() - 0.5) * 0.01,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      time += 0.01;

      const hubGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60);
      hubGradient.addColorStop(0, "rgba(0, 194, 216, 0.4)");
      hubGradient.addColorStop(0.5, "rgba(11, 61, 145, 0.2)");
      hubGradient.addColorStop(1, "transparent");
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50 + Math.sin(time * 2) * 5, 0, Math.PI * 2);
      ctx.fillStyle = hubGradient;
      ctx.fill();

      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 25);
      coreGradient.addColorStop(0, "rgba(0, 194, 216, 0.8)");
      coreGradient.addColorStop(1, "rgba(11, 61, 145, 0.4)");
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      [100, 150, 200].forEach((radius, i) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 194, 216, ${0.1 - i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      particles.forEach((p, index) => {
        p.angle += p.orbitSpeed;
        
        if (index % 3 === 0) {
          const dx = centerX - p.x;
          const dy = centerY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 30) {
            p.x += dx * 0.002;
            p.y += dy * 0.002;
          } else {
            p.angle = Math.random() * Math.PI * 2;
            p.orbitRadius = 200 + Math.random() * 100;
            p.x = centerX + Math.cos(p.angle) * p.orbitRadius;
            p.y = centerY + Math.sin(p.angle) * p.orbitRadius;
          }
        } else {
          p.x = centerX + Math.cos(p.angle) * p.orbitRadius;
          p.y = centerY + Math.sin(p.angle) * p.orbitRadius;
        }

        const distance = Math.sqrt((centerX - p.x) ** 2 + (centerY - p.y) ** 2);
        if (distance < 180) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = `rgba(0, 194, 216, ${0.15 * (1 - distance / 180)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.1,
      y: (e.clientY - rect.top - rect.height / 2) * 0.1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const currentEvent = sessionEvents[currentEventIndex];

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" aria-hidden="true" />
      
      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-radial from-azure/10 via-transparent to-transparent" aria-hidden="true" />
      
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-azure/20 rounded-full blur-3xl animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-aqua/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-azure/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-wide relative z-10 px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={cn(
            "space-y-8 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-aqua/30" role="status">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-aqua"></span>
              </span>
              <span className="text-sm font-medium text-aqua">The World's First</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
                <span className="block">TRACEFLOW —</span>
                <span className="block mt-2 relative">
                  <span className="gradient-text animate-gradient bg-gradient-to-r from-azure via-aqua to-azure bg-[length:200%_auto]">
                    Digital Cognition
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-azure via-aqua to-transparent rounded-full opacity-50" aria-hidden="true" />
                </span>
                <span className="block mt-2">Infrastructure</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl text-balance leading-relaxed">
                Unify clickstream, observability, and multimodal feedback into a 
                Zero-Trust, Hybrid-Ready Intelligence Layer for banks, insurers, 
                telcos, governments, and mission-critical enterprises.
              </p>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl font-semibold" aria-label="Tagline: Every Signal. One Intelligence.">
                <span className="gradient-text-orange">"Every Signal.</span>
                <span className="text-foreground"> One Intelligence."</span>
              </p>
            </div>

            {/* CTAs with magnetic effect */}
            <div 
              className="flex flex-wrap gap-4"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              role="group"
              aria-label="Call to action buttons"
            >
              <Button 
                variant="hero" 
                size="xl" 
                className="group relative"
                style={{
                  transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                  transition: "transform 0.2s ease-out",
                }}
                aria-label="Request a demo of TRACEFLOW"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                Request Demo
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-orange opacity-0 group-hover:animate-[burst_0.6s_ease-out_forwards]" />
                </div>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-border/50 hover:border-aqua/50 group"
                aria-label="Explore the TRACEFLOW platform"
              >
                Explore Platform
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </div>

            {/* Trust Badges */}
            <ul className="flex flex-wrap gap-3 pt-4" aria-label="Trust certifications">
              {trustBadges.map((badge, index) => (
                <li
                  key={badge.label}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl",
                    "bg-muted/30 border border-border/30",
                    "text-sm text-muted-foreground",
                    "hover:border-aqua/30 hover:text-foreground hover:bg-muted/50",
                    "transition-all duration-300 cursor-default",
                    "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  <badge.icon className="w-4 h-4 text-aqua" aria-hidden="true" />
                  {badge.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Live Session Recording Preview */}
          <div 
            className={cn(
              "relative transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            role="img"
            aria-label="Live session recording dashboard preview showing user analytics"
          >
            <div className="relative perspective-1000">
              {/* Main Dashboard Card */}
              <div className="glass-strong rounded-2xl p-6 shadow-2xl hover:shadow-azure/20 transition-shadow duration-500 border border-border/50">
                {/* Browser Chrome */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-destructive/70 hover:bg-destructive transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-orange/70 hover:bg-orange transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-aqua/70 hover:bg-aqua transition-colors"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-aqua"></span>
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">live dashboard</span>
                  </div>
                </div>

                {/* Session Recording Preview - Animated */}
                <div className="bg-muted/20 rounded-xl p-4 mb-4 border border-border/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="relative flex h-2.5 w-2.5" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive"></span>
                    </div>
                    <span className="text-xs font-medium text-destructive">Recording Session #4821</span>
                    <span className="ml-auto text-xs text-muted-foreground font-mono">
                      0:{sessionTime.toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Simulated Website View */}
                  <div className="aspect-video bg-gradient-to-br from-background via-muted/30 to-background rounded-lg relative overflow-hidden border border-border/20">
                    {/* Fake website elements */}
                    <div className="absolute top-2 left-2 right-2 h-6 bg-muted/40 rounded flex items-center px-2 gap-2">
                      <div className="w-4 h-4 rounded bg-azure/30" />
                      <div className="flex-1 h-2 bg-muted/60 rounded" />
                    </div>
                    
                    {/* Navigation */}
                    <div className="absolute top-10 left-2 right-2 flex gap-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-2 w-12 bg-muted/30 rounded" />
                      ))}
                    </div>
                    
                    {/* Content grid */}
                    <div className="absolute top-16 left-2 right-2 bottom-8 grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="bg-muted/20 rounded flex flex-col gap-1 p-1">
                          <div className="flex-1 bg-muted/30 rounded" />
                          <div className="h-1 bg-muted/40 rounded w-3/4" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Submit button area */}
                    <div className="absolute bottom-3 right-3 w-16 h-5 bg-azure/30 rounded flex items-center justify-center">
                      <span className="text-[8px] text-azure">Submit</span>
                    </div>
                    
                    {/* Animated Cursor */}
                    <div 
                      className={cn(
                        "absolute transition-all duration-500 ease-out z-10",
                        showRageClick && "animate-[rageClick_0.1s_ease-in-out_infinite]"
                      )}
                      style={{ 
                        left: `${cursorPosition.x}%`, 
                        top: `${cursorPosition.y}%`,
                        transform: "translate(-50%, -50%)"
                      }}
                    >
                      <MousePointer className="w-4 h-4 text-aqua drop-shadow-[0_0_8px_hsl(var(--aqua))]" />
                      {/* Click ripple effect */}
                      {currentEvent?.type === "click" && (
                        <div className="absolute top-0 left-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/30 animate-ping" />
                      )}
                      {/* Rage click indicator */}
                      {showRageClick && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-destructive/90 rounded text-[8px] text-destructive-foreground whitespace-nowrap">
                          Rage Click!
                        </div>
                      )}
                    </div>
                    
                    {/* Heatmap overlay effect */}
                    <div className="absolute bottom-3 right-3 w-20 h-8 bg-gradient-radial from-destructive/30 to-transparent rounded-full blur-md animate-pulse" />
                    
                    {/* Event indicator */}
                    <div className="absolute bottom-1 left-1 px-2 py-0.5 bg-background/80 rounded text-[8px] text-muted-foreground backdrop-blur-sm">
                      {currentEvent?.type}: {currentEvent?.element}
                    </div>
                    
                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/50">
                      <div 
                        className="h-full bg-gradient-to-r from-azure to-aqua transition-all duration-1000"
                        style={{ width: `${(sessionTime / 35) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Event timeline */}
                  <div className="flex gap-1 mt-2 overflow-hidden">
                    {sessionEvents.map((event, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "flex-shrink-0 px-1.5 py-0.5 rounded text-[8px] transition-all duration-300",
                          i === currentEventIndex 
                            ? event.type === "rage_click" || event.type === "error"
                              ? "bg-destructive/20 text-destructive"
                              : "bg-aqua/20 text-aqua"
                            : "bg-muted/30 text-muted-foreground"
                        )}
                      >
                        {event.type === "rage_click" ? "rage" : event.type}
                      </div>
                    ))}
                  </div>
                </div>

                {/* PROXIMA AI Card */}
                <div className="bg-gradient-to-r from-azure/10 to-aqua/10 rounded-xl p-4 mb-4 border border-azure/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-aqua" aria-hidden="true" />
                    <span className="text-sm font-semibold">PROXIMA AI Analysis</span>
                    <span className="ml-auto px-2 py-0.5 rounded text-xs bg-aqua/20 text-aqua animate-pulse">Processing</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Detected <span className="text-destructive font-medium">3 friction points</span> in checkout flow. 
                    Estimated revenue impact: <span className="text-orange font-medium">$12,400/day</span>
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 text-xs rounded-lg bg-aqua/20 text-aqua flex items-center gap-1 cursor-pointer hover:bg-aqua/30 transition-colors">
                      <Ticket className="w-3 h-3" aria-hidden="true" />
                      Auto-Ticket
                    </span>
                    <span className="px-2.5 py-1 text-xs rounded-lg bg-azure/20 text-azure cursor-pointer hover:bg-azure/30 transition-colors">View Details</span>
                  </div>
                </div>

                {/* Rage Click Detection */}
                <div className={cn(
                  "flex items-center gap-3 p-3 rounded-xl border transition-all duration-300",
                  showRageClick 
                    ? "bg-destructive/20 border-destructive/40 animate-pulse" 
                    : "bg-destructive/10 border-destructive/20"
                )}>
                  <AlertTriangle className={cn(
                    "w-5 h-5 text-destructive",
                    showRageClick && "animate-bounce"
                  )} aria-hidden="true" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Rage Click Detected</p>
                    <p className="text-xs text-muted-foreground">Submit button - 23 rapid clicks in 4s</p>
                  </div>
                  <BarChart3 className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 glass rounded-xl p-4 animate-float shadow-xl border border-border/50" aria-label="1.2 billion events per day">
                <div className="text-2xl font-bold gradient-text">1.2B+</div>
                <div className="text-xs text-muted-foreground">Events/Day</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 animate-float shadow-xl border border-border/50" style={{ animationDelay: "1s" }} aria-label="23 milliseconds P99 latency">
                <div className="text-2xl font-bold text-aqua">23ms</div>
                <div className="text-xs text-muted-foreground">P99 Latency</div>
              </div>

              <div className="absolute top-1/2 -right-8 glass rounded-xl p-3 animate-float shadow-xl border border-border/50" style={{ animationDelay: "0.5s" }} aria-label="99.99% uptime">
                <div className="text-lg font-bold text-orange">99.99%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle"
        role="presentation"
        aria-hidden="true"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-aqua animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes moveCursor {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(100px, 20px); }
          50% { transform: translate(80px, 60px); }
          75% { transform: translate(20px, 40px); }
        }
        @keyframes burst {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(20); opacity: 0; }
        }
        @keyframes rageClick {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
