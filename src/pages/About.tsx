import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Crown, ArrowLeft, Target, Eye, Zap, Globe, Users, Lightbulb, Shield, Brain, Rocket, Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/traceflow/Footer";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
}

function RevealSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const values = [
  { icon: Shield, title: "Trust First", desc: "Security isn't a feature — it's the foundation. Every pipeline stage enforces zero-trust by design." },
  { icon: Brain, title: "Intelligence Over Data", desc: "Raw data is noise. We transform signals into actionable cognition that drives real decisions." },
  { icon: Lightbulb, title: "Radical Simplicity", desc: "Enterprise-grade doesn't mean enterprise-complex. One pipeline, any deployment, zero compromise." },
  { icon: Heart, title: "Customer Obsession", desc: "We build for the engineers, analysts, and leaders who stake their careers on our platform." },
  { icon: Rocket, title: "Relentless Innovation", desc: "PROXIMA AI, multi-agent RCA, air-gapped deployments — we ship what others only talk about." },
  { icon: Globe, title: "Universal by Design", desc: "From SaaS startups to air-gapped defense systems — TRACEFLOW runs the same everywhere." },
];

const leadership = [
  { name: "Founding Team", role: "Engineering & Product", desc: "Deep expertise in distributed systems, AI/ML, and enterprise security across banking, telecom, and defense sectors." },
  { name: "Advisory Board", role: "Strategy & Growth", desc: "Industry veterans from Fortune 500 enterprises, cybersecurity firms, and leading AI research institutions." },
  { name: "Engineering", role: "Platform & Infrastructure", desc: "World-class engineers building the most advanced digital cognition infrastructure ever conceived." },
];

const milestones = [
  { year: "Founded", label: "OriginX Labs established with a mission to redefine digital experience intelligence." },
  { year: "TRACEFLOW v1", label: "First Digital Cognition Infrastructure launched with Zero-Trust Pipeline." },
  { year: "PROXIMA AI", label: "Multi-agent AI engine introduced with autonomous root-cause analysis." },
  { year: "Enterprise", label: "Hybrid, On-Prem, and Air-Gapped deployment models for regulated industries." },
  { year: "Global", label: "Expanding across banking, insurance, telecom, defense, and government sectors." },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About OriginX Labs — TRACEFLOW";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 py-3 bg-background/90 backdrop-blur-2xl border-b border-border/50">
        <div className="container-wide flex items-center justify-between px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-azure to-aqua flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <Crown className="absolute -top-2 -right-2 w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text leading-none uppercase tracking-wide">TRACEFLOW</span>
              <span className="text-[10px] text-muted-foreground leading-none uppercase tracking-wider">BY ORIGINX LABS</span>
            </div>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-azure/8 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-aqua/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container-wide relative z-10 px-4 lg:px-8 text-center">
          <RevealSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-azure/10 border border-azure/20 text-sm text-azure mb-6">
              <Globe className="w-4 h-4" />
              About OriginX Labs
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Building the Future of{" "}
              <span className="gradient-text">Digital Cognition</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              OriginX Labs Pvt. Ltd. is the company behind TRACEFLOW — the world's first Digital Cognition Infrastructure that transforms every digital signal into enterprise intelligence.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-t border-border/30">
        <div className="container-wide px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <RevealSection>
              <div className="p-8 rounded-2xl glass border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-azure to-aqua/80 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower every enterprise — from cloud-native startups to air-gapped defense systems — with a unified, zero-trust intelligence pipeline that turns raw digital signals into decisions, actions, and outcomes. We believe no organization should have to choose between security, intelligence, and speed.
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="p-8 rounded-2xl glass border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aqua to-orange/80 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every digital interaction is understood, every anomaly is explained, and every decision is informed by real-time cognition — not just data. TRACEFLOW is the infrastructure that makes this possible, running the same immutable pipeline everywhere, with trust boundaries that adapt to any deployment model.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-border/30">
        <div className="container-wide px-4 lg:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every line of code, every architecture decision, and every customer interaction.</p>
            </div>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <RevealSection key={v.title} delay={i * 100}>
                <div className="p-6 rounded-2xl glass border border-border/50 hover:border-azure/30 transition-all duration-300 group h-full">
                  <v.icon className="w-8 h-8 text-azure mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-t border-border/30">
        <div className="container-wide px-4 lg:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">A world-class team of engineers, researchers, and industry experts united by a shared mission.</p>
            </div>
          </RevealSection>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((l, i) => (
              <RevealSection key={l.name} delay={i * 120}>
                <div className="p-8 rounded-2xl glass border border-border/50 text-center hover:border-aqua/30 transition-all duration-300 h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-azure to-aqua mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{l.name}</h3>
                  <p className="text-sm text-azure mb-4">{l.role}</p>
                  <p className="text-sm text-muted-foreground">{l.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-t border-border/30">
        <div className="container-wide px-4 lg:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            </div>
          </RevealSection>
          <div className="max-w-2xl mx-auto space-y-0">
            {milestones.map((m, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-azure to-aqua shrink-0 group-hover:scale-125 transition-transform" />
                    {i < milestones.length - 1 && <div className="w-0.5 h-full bg-border/50 min-h-[60px]" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm font-bold text-azure">{m.year}</span>
                    <p className="text-muted-foreground mt-1">{m.label}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/30">
        <div className="container-wide px-4 lg:px-8 text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Experience TRACEFLOW?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Join the enterprises already transforming their digital intelligence with the world's first cognition infrastructure.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/">
                  Explore TRACEFLOW <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#contact">Contact Us</a>
              </Button>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
