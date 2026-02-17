import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Newspaper, Clock, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "Introducing TRACEFLOW 2.0: The Digital Cognition Era",
    excerpt: "We're redefining how enterprises understand digital experiences with our next-generation cognition infrastructure.",
    category: "Product",
    date: "Feb 10, 2026",
    readTime: "5 min",
  },
  {
    title: "Zero-Trust Session Replay: Why It Matters for Banking",
    excerpt: "How TRACEFLOW's Zero-Trust pipeline ensures PII-safe session replay for financial institutions.",
    category: "Security",
    date: "Feb 3, 2026",
    readTime: "8 min",
  },
  {
    title: "PROXIMA AI: Multi-Agent Intelligence for DXI",
    excerpt: "Deep dive into how our multi-agent AI system transforms raw telemetry into actionable insights.",
    category: "AI",
    date: "Jan 28, 2026",
    readTime: "6 min",
  },
  {
    title: "On-Premise Deployment: Air-Gapped Enterprise Guide",
    excerpt: "Step-by-step guide to deploying TRACEFLOW in air-gapped environments for defense and government.",
    category: "Enterprise",
    date: "Jan 20, 2026",
    readTime: "10 min",
  },
  {
    title: "How TRACEFLOW Reduced Checkout Abandonment by 34%",
    excerpt: "A case study on how a leading e-commerce platform leveraged session intelligence to boost conversions.",
    category: "Case Study",
    date: "Jan 15, 2026",
    readTime: "7 min",
  },
  {
    title: "The Future of Digital Experience Intelligence",
    excerpt: "Our vision for the next decade of DXI and how cognitive infrastructure will shape enterprise analytics.",
    category: "Vision",
    date: "Jan 8, 2026",
    readTime: "4 min",
  },
];

const categoryColors: Record<string, string> = {
  Product: "text-azure border-azure/30 bg-azure/10",
  Security: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  AI: "text-accent border-accent/30 bg-accent/10",
  Enterprise: "text-aqua border-aqua/30 bg-aqua/10",
  "Case Study": "text-purple-400 border-purple-400/30 bg-purple-400/10",
  Vision: "text-pink-400 border-pink-400/30 bg-pink-400/10",
};

const Blog = () => {
  useEffect(() => {
    document.title = "Blog — TRACEFLOW by OriginX Labs | Insights & Updates";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <EnhancedNavigation />
      <main className="pt-32 pb-20">
        <section className="container-wide px-4 lg:px-8 text-center mb-16">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
              <Newspaper className="w-4 h-4 text-accent" />
              Insights & Updates
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">TRACEFLOW</span> Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest insights on digital cognition, AI-powered analytics, enterprise security, and product updates from OriginX Labs.
            </p>
          </ScrollReveal>
        </section>

        <section className="container-wide px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.title} direction="up" duration={600} delay={i * 80}>
                <article className="group p-6 rounded-2xl border border-border bg-card hover:border-azure/50 hover:shadow-lg hover:shadow-azure/5 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryColors[post.category] || "text-muted-foreground border-border"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-azure transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-sm text-azure flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
