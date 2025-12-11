import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate progress from when section enters view to when it leaves
      const start = windowHeight;
      const end = -sectionHeight;
      const current = rect.top;
      
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="region"
      aria-labelledby="story-heading"
    >
      {/* Multi-layer Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-azure/20 via-background to-aqua/20"
        style={{
          transform: `translate3d(0, ${scrollProgress * 100}px, 0)`,
          willChange: "transform",
        }}
      />
      
      {/* Parallax Layer 1 - Slow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollProgress * -30}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-azure/10 blur-3xl" />
        <div className="absolute bottom-20 right-[15%] w-80 h-80 rounded-full bg-aqua/10 blur-3xl" />
      </div>

      {/* Parallax Layer 2 - Medium */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollProgress * -60}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="absolute top-1/4 right-[20%] w-40 h-40 rounded-full bg-orange/15 blur-2xl" />
        <div className="absolute bottom-1/3 left-[20%] w-48 h-48 rounded-full bg-azure/15 blur-2xl" />
      </div>

      {/* Parallax Layer 3 - Fast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollProgress * -100}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="absolute top-1/3 left-[5%] w-20 h-20 rounded-full bg-aqua/20 blur-xl" />
        <div className="absolute top-1/2 right-[10%] w-16 h-16 rounded-full bg-orange/20 blur-xl" />
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 rounded-full bg-azure/20 blur-xl" />
      </div>

      {/* Animated grid lines */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--aqua)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--aqua)) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `translate3d(0, ${scrollProgress * 40}px, 0)`,
          willChange: "transform",
        }}
      />

      {/* Content */}
      <div className="container-wide relative z-10 px-4 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote
            id="story-heading"
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-balance"
            style={{
              transform: `translate3d(0, ${(1 - scrollProgress) * 80}px, 0)`,
              opacity: Math.min(1, scrollProgress * 2.5),
              willChange: "transform, opacity",
            }}
          >
            <span className="text-muted-foreground" aria-hidden="true">"</span>
            <span className="gradient-text">Digital experience analytics</span>
            {" "}is broken.{" "}
            <span className="gradient-text">Security</span>
            {" "}is broken.{" "}
            <span className="gradient-text">Observability</span>
            {" "}is siloed.{" "}
            <span className="text-foreground">TRACEFLOW unifies all of it inside a </span>
            <span className="gradient-text-orange">Zero-Trust DXI Operating System</span>
            <span className="text-muted-foreground" aria-hidden="true">."</span>
          </blockquote>

          <div
            className="mt-12"
            style={{
              transform: `translate3d(0, ${(1 - scrollProgress) * 50}px, 0)`,
              opacity: Math.min(1, (scrollProgress - 0.2) * 3),
              willChange: "transform, opacity",
            }}
          >
            <div 
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl glass border border-border/50"
              role="group"
              aria-label="Quote attribution"
            >
              <div 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-azure to-aqua flex items-center justify-center text-primary-foreground font-bold"
                aria-hidden="true"
              >
                TF
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">TRACEFLOW Team</div>
                <div className="text-sm text-muted-foreground">CropXon ATLAS</div>
              </div>
            </div>
          </div>

          {/* Decorative elements with parallax */}
          <div
            className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block"
            style={{
              transform: `translate3d(0, ${(scrollProgress - 0.5) * 60}px, 0)`,
              opacity: Math.min(0.6, scrollProgress),
            }}
            aria-hidden="true"
          >
            <div className="w-1 h-32 bg-gradient-to-b from-transparent via-aqua to-transparent rounded-full" />
          </div>
          <div
            className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block"
            style={{
              transform: `translate3d(0, ${(scrollProgress - 0.5) * -60}px, 0)`,
              opacity: Math.min(0.6, scrollProgress),
            }}
            aria-hidden="true"
          >
            <div className="w-1 h-32 bg-gradient-to-b from-transparent via-azure to-transparent rounded-full" />
          </div>
        </div>
      </div>

      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
