import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Globe, Key, Fingerprint, Play, AlertTriangle, Zap, BarChart3 } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "SOC2" },
  { icon: Lock, label: "Zero-PII" },
  { icon: Globe, label: "GDPR" },
  { icon: Key, label: "Hybrid/On-Prem" },
  { icon: Fingerprint, label: "Dual WebAuthn" },
];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Particle animation
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

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ["#0B3D91", "#00C2D8", "#FF8A00"];
    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;

    // Create particles
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 300 + 100;
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw connections to center
      particles.forEach((p) => {
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 250) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = `rgba(0, 194, 216, ${0.1 * (1 - distance / 250)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();

        // Move particle toward center slowly
        p.x += dx * 0.001 + p.vx;
        p.y += dy * 0.001 + p.vy;

        // Reset if too close to center
        if (distance < 30) {
          const angle = Math.random() * Math.PI * 2;
          const newDistance = 300 + Math.random() * 100;
          p.x = centerX + Math.cos(angle) * newDistance;
          p.y = centerY + Math.sin(angle) * newDistance;
        }
      });

      // Draw central hub
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      gradient.addColorStop(0, "rgba(0, 194, 216, 0.4)");
      gradient.addColorStop(0.5, "rgba(11, 61, 145, 0.2)");
      gradient.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-radial from-azure/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-azure/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-aqua/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container-wide relative z-10 px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-aqua/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-aqua"></span>
              </span>
              <span className="text-sm font-medium text-aqua">The World's First</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">TRACEFLOW —</span>
                <span className="block mt-2 gradient-text animate-gradient bg-gradient-to-r from-azure via-aqua to-azure bg-[length:200%_auto]">
                  Digital Cognition
                </span>
                <span className="block mt-2">Infrastructure</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl text-balance">
                Unify clickstream, observability, and multimodal feedback into a 
                Zero-Trust, Hybrid-Ready Intelligence Layer for banks, insurers, 
                telcos, governments, and mission-critical enterprises.
              </p>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl font-semibold gradient-text-orange">
                "Every Signal. One Intelligence."
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Request Demo
              </Button>
              <Button variant="outline" size="xl">
                Explore Platform
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-muted-foreground hover:border-aqua/50 hover:text-foreground transition-all"
                >
                  <badge.icon className="w-4 h-4 text-aqua" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative perspective-1000">
              {/* Main Dashboard Card */}
              <div className="glass-strong rounded-2xl p-6 shadow-2xl transform hover:rotate-y-2 transition-transform duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-aqua"></div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">live dashboard</span>
                </div>

                {/* Session Recording Preview */}
                <div className="bg-muted/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                    </div>
                    <span className="text-xs font-medium text-destructive">Recording Session #4821</span>
                  </div>
                  <div className="aspect-video bg-background/50 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-azure/20 flex items-center justify-center animate-pulse">
                        <Play className="w-6 h-6 text-azure" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-azure to-aqua rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                </div>

                {/* PROXIMA AI Card */}
                <div className="bg-gradient-to-r from-azure/10 to-aqua/10 rounded-xl p-4 mb-4 border border-azure/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-aqua" />
                    <span className="text-sm font-semibold">PROXIMA AI Analysis</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Detected 3 friction points in checkout flow. Estimated revenue impact: $12,400/day
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-aqua/20 text-aqua">Auto-Ticket</span>
                    <span className="px-2 py-1 text-xs rounded bg-azure/20 text-azure">View Details</span>
                  </div>
                </div>

                {/* Rage Click Detection */}
                <div className="flex items-center gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <AlertTriangle className="w-5 h-5 text-destructive animate-bounce-subtle" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Rage Click Detected</p>
                    <p className="text-xs text-muted-foreground">Submit button - 23 rapid clicks</p>
                  </div>
                  <BarChart3 className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 glass rounded-xl p-4 animate-float shadow-lg">
                <div className="text-2xl font-bold gradient-text">1.2B+</div>
                <div className="text-xs text-muted-foreground">Events/Day</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 animate-float-delayed shadow-lg">
                <div className="text-2xl font-bold text-aqua">23ms</div>
                <div className="text-xs text-muted-foreground">Latency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-aqua animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
