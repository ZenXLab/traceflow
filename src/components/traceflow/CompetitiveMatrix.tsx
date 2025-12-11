import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, X, Minus, Crown } from "lucide-react";

const categories = [
  {
    id: "replay",
    title: "Session Replay",
    features: [
      { name: "Pixel-perfect replay", traceflow: true, fullstory: true, glassbox: true, contentsquare: true },
      { name: "DOM mutation capture", traceflow: true, fullstory: true, glassbox: true, contentsquare: true },
      { name: "WebRTC live sessions", traceflow: true, fullstory: false, glassbox: false, contentsquare: false },
      { name: "Cross-device stitching", traceflow: true, fullstory: "partial", glassbox: true, contentsquare: "partial" },
      { name: "Offline replay sync", traceflow: true, fullstory: false, glassbox: false, contentsquare: false },
    ],
  },
  {
    id: "ai",
    title: "AI Capabilities",
    features: [
      { name: "Multi-Agent RCA", traceflow: true, fullstory: false, glassbox: false, contentsquare: false },
      { name: "Session summarization", traceflow: true, fullstory: true, glassbox: "partial", contentsquare: "partial" },
      { name: "Predictive analytics", traceflow: true, fullstory: "partial", glassbox: true, contentsquare: true },
      { name: "Voice + session fusion", traceflow: true, fullstory: false, glassbox: false, contentsquare: false },
      { name: "Causality engine", traceflow: true, fullstory: false, glassbox: false, contentsquare: false },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Deployment",
    features: [
      { name: "Hybrid deployment", traceflow: true, fullstory: false, glassbox: true, contentsquare: false },
      { name: "Air-gapped support", traceflow: true, fullstory: false, glassbox: false, contentsquare: false },
      { name: "Customer-managed keys", traceflow: true, fullstory: "partial", glassbox: true, contentsquare: "partial" },
      { name: "Data residency control", traceflow: true, fullstory: true, glassbox: true, contentsquare: true },
      { name: "Dual WebAuthn", traceflow: true, fullstory: false, glassbox: false, contentsquare: false },
    ],
  },
  {
    id: "developer",
    title: "Developer Features",
    features: [
      { name: "Temporal workflows", traceflow: true, fullstory: false, glassbox: false, contentsquare: false },
      { name: "Code correlation", traceflow: true, fullstory: "partial", glassbox: false, contentsquare: false },
      { name: "Auto-ticketing (Jira/Linear)", traceflow: true, fullstory: true, glassbox: true, contentsquare: "partial" },
      { name: "GraphQL API", traceflow: true, fullstory: true, glassbox: "partial", contentsquare: "partial" },
      { name: "Webhook automation", traceflow: true, fullstory: true, glassbox: true, contentsquare: true },
    ],
  },
];

const competitors = [
  { id: "traceflow", name: "TRACEFLOW", highlight: true },
  { id: "fullstory", name: "FullStory", highlight: false },
  { id: "glassbox", name: "Glassbox", highlight: false },
  { id: "contentsquare", name: "Contentsquare", highlight: false },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="w-6 h-6 rounded-full bg-aqua/20 flex items-center justify-center mx-auto">
        <Check className="w-4 h-4 text-aqua" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center mx-auto">
        <X className="w-4 h-4 text-destructive" />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mx-auto">
      <Minus className="w-4 h-4 text-muted-foreground" />
    </div>
  );
}

export function CompetitiveMatrix() {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = categories[activeCategory];

  return (
    <section id="why-traceflow" className="section-padding relative overflow-hidden bg-muted/5">
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-orange/30 text-orange text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            Why TRACEFLOW
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Competitive</span> Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how TRACEFLOW compares to market leaders
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-all duration-300",
                activeCategory === index
                  ? "bg-gradient-to-r from-azure to-aqua text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="glass rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-muted-foreground">Feature</th>
                  {competitors.map((comp) => (
                    <th
                      key={comp.id}
                      className={cn(
                        "text-center p-4 font-semibold min-w-[120px]",
                        comp.highlight
                          ? "bg-gradient-to-b from-azure/20 to-transparent text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {comp.highlight && <Crown className="w-4 h-4 text-orange" />}
                        {comp.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {category.features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={cn(
                      "border-b border-border/50 transition-colors",
                      "hover:bg-muted/30"
                    )}
                  >
                    <td className="p-4 text-foreground">{feature.name}</td>
                    <td className={cn("p-4", "bg-azure/5")}>
                      <FeatureCell value={feature.traceflow} />
                    </td>
                    <td className="p-4">
                      <FeatureCell value={feature.fullstory} />
                    </td>
                    <td className="p-4">
                      <FeatureCell value={feature.glassbox} />
                    </td>
                    <td className="p-4">
                      <FeatureCell value={feature.contentsquare} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 p-4 border-t border-border bg-muted/20">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-aqua/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-aqua" />
              </div>
              <span className="text-sm text-muted-foreground">Full Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                <Minus className="w-3 h-3 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Partial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-3 h-3 text-destructive" />
              </div>
              <span className="text-sm text-muted-foreground">Not Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
