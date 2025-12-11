import { useEffect, useRef, useState } from "react";

export function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on section position
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-azure/20 via-background to-aqua/20"
        style={{
          transform: `translateY(${scrollProgress * 50}px)`,
        }}
      />

      {/* Floating Elements */}
      <div
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-azure/10 blur-2xl"
        style={{
          transform: `translateY(${scrollProgress * -100}px)`,
        }}
      />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-aqua/10 blur-2xl"
        style={{
          transform: `translateY(${scrollProgress * -80}px)`,
        }}
      />
      <div
        className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-orange/10 blur-2xl"
        style={{
          transform: `translateY(${scrollProgress * -60}px)`,
        }}
      />

      {/* Content */}
      <div className="container-wide relative z-10 px-4 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-balance"
            style={{
              transform: `translateY(${(1 - scrollProgress) * 50}px)`,
              opacity: Math.min(1, scrollProgress * 2),
            }}
          >
            <span className="text-muted-foreground">"</span>
            <span className="gradient-text">Digital experience analytics</span>
            {" "}is broken.{" "}
            <span className="gradient-text">Security</span>
            {" "}is broken.{" "}
            <span className="gradient-text">Observability</span>
            {" "}is siloed.{" "}
            <span className="text-foreground">TRACEFLOW unifies all of it inside a </span>
            <span className="gradient-text-orange">Zero-Trust DXI Operating System</span>
            <span className="text-muted-foreground">."</span>
          </blockquote>

          <div
            className="mt-12"
            style={{
              transform: `translateY(${(1 - scrollProgress) * 30}px)`,
              opacity: Math.min(1, (scrollProgress - 0.3) * 2),
            }}
          >
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl glass">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-azure to-aqua flex items-center justify-center text-primary-foreground font-bold">
                TF
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">TRACEFLOW Team</div>
                <div className="text-sm text-muted-foreground">CropXon ATLAS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
