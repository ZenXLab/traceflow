import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Handshake, ArrowRight, Shield, Zap, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerTiers = [
  {
    tier: "Technology Partners",
    icon: Zap,
    description: "Integrate TRACEFLOW into your platform to enhance digital experience capabilities.",
    benefits: ["API & SDK access", "Co-marketing", "Joint solutions", "Technical support"],
  },
  {
    tier: "Consulting Partners",
    icon: Globe,
    description: "Deliver TRACEFLOW implementations to enterprise clients worldwide.",
    benefits: ["Certification program", "Deal registration", "Sales enablement", "Project support"],
  },
  {
    tier: "Strategic Partners",
    icon: Award,
    description: "Deep collaboration on product roadmap and go-to-market strategy.",
    benefits: ["Revenue sharing", "Exclusive features", "Executive alignment", "Joint R&D"],
  },
];

const Partners = () => {
  useEffect(() => {
    document.title = "Partners — TRACEFLOW by OriginX Labs | Partner Ecosystem";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <EnhancedNavigation />
      <main className="pt-32 pb-20">
        <section className="container-wide px-4 lg:px-8 text-center mb-20">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
              <Handshake className="w-4 h-4 text-accent" />
              Partner Program
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow with <span className="gradient-text">TRACEFLOW</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our partner ecosystem and help enterprises unlock the power of Digital Cognition Infrastructure.
            </p>
          </ScrollReveal>
        </section>

        <section className="container-wide px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {partnerTiers.map((partner, i) => (
              <ScrollReveal key={partner.tier} direction="up" duration={600} delay={i * 100}>
                <div className="p-8 rounded-2xl border border-border bg-card hover:border-azure/50 hover:shadow-lg hover:shadow-azure/5 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-azure to-aqua flex items-center justify-center mb-6">
                    <partner.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{partner.tier}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{partner.description}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {partner.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="w-3.5 h-3.5 text-aqua shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Become a Partner <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
