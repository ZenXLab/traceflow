import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Crown, BookOpen, Code, Zap, Shield, Database, Layers, Terminal, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const docCategories = [
  {
    icon: Zap,
    title: "Getting Started",
    description: "Quick setup guides to integrate TRACEFLOW into your application in minutes.",
    articles: ["Installation Guide", "Quick Start Tutorial", "SDK Configuration", "First Session Capture"],
  },
  {
    icon: Code,
    title: "SDK Reference",
    description: "Complete API documentation for Web, Mobile, and Server SDKs.",
    articles: ["Web SDK (JavaScript)", "React SDK", "iOS SDK (Swift)", "Android SDK (Kotlin)"],
  },
  {
    icon: Database,
    title: "Data Pipeline",
    description: "Configure ingestion, transformation, and routing of telemetry data.",
    articles: ["Pipeline Configuration", "Data Transformation", "Custom Events", "Batch Processing"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Zero-Trust architecture, PII handling, and compliance frameworks.",
    articles: ["Zero-Trust Setup", "PII Tokenization", "GDPR Compliance", "SOC 2 Controls"],
  },
  {
    icon: Layers,
    title: "PROXIMA AI",
    description: "Configure and customize the multi-agent AI intelligence layer.",
    articles: ["Agent Configuration", "Custom Models", "Training Data", "Response Tuning"],
  },
  {
    icon: Terminal,
    title: "API Reference",
    description: "RESTful and GraphQL API endpoints for programmatic access.",
    articles: ["Authentication", "Sessions API", "Events API", "Analytics API"],
  },
];

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Documentation — TRACEFLOW by OriginX Labs";
    window.scrollTo(0, 0);
  }, []);

  const filtered = docCategories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.articles.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <EnhancedNavigation />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container-wide px-4 lg:px-8 text-center mb-20">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
              <BookOpen className="w-4 h-4 text-accent" />
              Developer Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">TRACEFLOW</span> Documentation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Everything you need to integrate, configure, and master the world's first Digital Cognition Infrastructure.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-azure/50"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* Categories Grid */}
        <section className="container-wide px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cat, i) => (
              <ScrollReveal key={cat.title} direction="up" duration={600} delay={i * 80}>
                <div className="group p-6 rounded-2xl border border-border bg-card hover:border-azure/50 hover:shadow-lg hover:shadow-azure/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-azure to-aqua flex items-center justify-center mb-4">
                    <cat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                  <ul className="space-y-2">
                    {cat.articles.map((article) => (
                      <li key={article}>
                        <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-azure transition-colors group/link">
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
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

export default Documentation;
