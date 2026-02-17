import { useEffect } from "react";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Code, Lock, Zap, Database, Globe, Terminal } from "lucide-react";

const endpoints = [
  { method: "GET", path: "/api/v1/sessions", description: "List all captured sessions with filtering and pagination", auth: true },
  { method: "GET", path: "/api/v1/sessions/:id", description: "Retrieve a specific session with full replay data", auth: true },
  { method: "POST", path: "/api/v1/events", description: "Ingest custom events into the pipeline", auth: true },
  { method: "GET", path: "/api/v1/analytics/journey", description: "Query journey analytics with custom date ranges", auth: true },
  { method: "POST", path: "/api/v1/proxima/query", description: "Send natural language queries to PROXIMA AI", auth: true },
  { method: "GET", path: "/api/v1/health", description: "Check API health and service status", auth: false },
  { method: "POST", path: "/api/v1/webhooks", description: "Configure webhook endpoints for real-time alerts", auth: true },
  { method: "GET", path: "/api/v1/reports", description: "Generate and retrieve analytics reports", auth: true },
];

const methodColors: Record<string, string> = {
  GET: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  POST: "text-azure bg-azure/10 border-azure/20",
  PUT: "text-accent bg-accent/10 border-accent/20",
  DELETE: "text-destructive bg-destructive/10 border-destructive/20",
};

const ApiReference = () => {
  useEffect(() => {
    document.title = "API Reference — TRACEFLOW by OriginX Labs";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <EnhancedNavigation />
      <main className="pt-32 pb-20">
        <section className="container-wide px-4 lg:px-8 text-center mb-16">
          <ScrollReveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-6">
              <Terminal className="w-4 h-4 text-accent" />
              REST API v1
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">API</span> Reference
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Programmatic access to TRACEFLOW's Digital Cognition Infrastructure. Authenticate via API keys with Zero-Trust security.
            </p>
          </ScrollReveal>
        </section>

        {/* Base URL */}
        <section className="container-wide px-4 lg:px-8 mb-12">
          <ScrollReveal direction="up" duration={600}>
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Base URL</h3>
              <code className="text-lg font-mono text-azure">https://api.traceflow.io/v1</code>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> TLS 1.3</span>
                <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> Global CDN</span>
                <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> &lt;50ms p99</span>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Endpoints */}
        <section className="container-wide px-4 lg:px-8">
          <ScrollReveal direction="up" duration={600}>
            <h2 className="text-2xl font-bold mb-8">Endpoints</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {endpoints.map((ep, i) => (
              <ScrollReveal key={ep.path} direction="up" duration={500} delay={i * 60}>
                <div className="group p-4 rounded-xl border border-border bg-card hover:border-azure/30 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className={`inline-flex px-3 py-1 rounded-md text-xs font-bold border ${methodColors[ep.method]} font-mono w-fit`}>
                    {ep.method}
                  </span>
                  <code className="text-sm font-mono text-foreground flex-1">{ep.path}</code>
                  <p className="text-sm text-muted-foreground flex-1">{ep.description}</p>
                  {ep.auth && <Lock className="w-4 h-4 text-muted-foreground shrink-0" />}
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

export default ApiReference;
