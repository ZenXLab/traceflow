import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Heart, Rocket, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: Rocket, title: "Cutting-Edge Tech", description: "Work with AI, real-time data pipelines, and Zero-Trust security at scale." },
  { icon: Globe, title: "Remote-First", description: "Work from anywhere in the world with flexible hours and async culture." },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health coverage, mental wellness programs, and gym allowances." },
  { icon: Sparkles, title: "Growth & Learning", description: "Annual learning budgets, conference sponsorships, and mentorship programs." },
];

const openings = [
  { title: "Senior Frontend Engineer", team: "Platform", location: "Remote / Bangalore", type: "Full-time" },
  { title: "ML Engineer — PROXIMA AI", team: "AI/ML", location: "Remote / Bangalore", type: "Full-time" },
  { title: "Staff Backend Engineer", team: "Data Pipeline", location: "Remote", type: "Full-time" },
  { title: "Security Engineer", team: "Security", location: "Remote / Bangalore", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Remote", type: "Full-time" },
  { title: "DevRel Engineer", team: "Growth", location: "Remote", type: "Full-time" },
  { title: "Enterprise Account Executive", team: "Sales", location: "Singapore / Dubai", type: "Full-time" },
];

const Careers = () => {
  useEffect(() => {
    document.title = "Careers — Join OriginX Labs | Build the Future of Digital Intelligence";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <EnhancedNavigation />
      <main className="pt-32 pb-20">
        <section className="container-wide px-4 lg:px-8 text-center mb-20">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
              <Briefcase className="w-4 h-4 text-accent" />
              We're Hiring
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build the Future of <span className="gradient-text">Digital Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join OriginX Labs and help enterprises understand every digital signal. We're building the world's first Digital Cognition Infrastructure.
            </p>
          </ScrollReveal>
        </section>

        {/* Perks */}
        <section className="container-wide px-4 lg:px-8 mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <ScrollReveal key={perk.title} direction="up" duration={600} delay={i * 80}>
                <div className="p-6 rounded-2xl border border-border bg-card text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-azure to-aqua flex items-center justify-center mx-auto mb-4">
                    <perk.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Openings */}
        <section className="container-wide px-4 lg:px-8">
          <ScrollReveal direction="up" duration={600}>
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          </ScrollReveal>
          <div className="space-y-3 max-w-4xl mx-auto">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} direction="up" duration={500} delay={i * 60}>
                <div className="group p-5 rounded-xl border border-border bg-card hover:border-azure/50 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground group-hover:text-azure transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span>{job.team}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.type}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-fit">
                    Apply <ArrowRight className="w-3 h-3 ml-1" />
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

export default Careers;
