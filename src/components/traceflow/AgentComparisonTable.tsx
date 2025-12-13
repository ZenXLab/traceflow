import { cn } from "@/lib/utils";
import { Check, X, Minus, Brain, BarChart3 } from "lucide-react";

const features = [
  {
    category: "Data Analysis",
    items: [
      { name: "Real-time session analysis", proxima: "full", traditional: "partial" },
      { name: "Multi-agent collaboration", proxima: "full", traditional: "none" },
      { name: "Automated root cause analysis", proxima: "full", traditional: "none" },
      { name: "Behavioral pattern recognition", proxima: "full", traditional: "partial" },
    ]
  },
  {
    category: "Intelligence",
    items: [
      { name: "Predictive insights", proxima: "full", traditional: "none" },
      { name: "Natural language queries", proxima: "full", traditional: "none" },
      { name: "Auto-generated recommendations", proxima: "full", traditional: "partial" },
      { name: "Cross-session correlation", proxima: "full", traditional: "partial" },
    ]
  },
  {
    category: "Automation",
    items: [
      { name: "Auto ticket creation", proxima: "full", traditional: "none" },
      { name: "Smart alert prioritization", proxima: "full", traditional: "partial" },
      { name: "Revenue impact calculation", proxima: "full", traditional: "none" },
      { name: "Self-learning optimization", proxima: "full", traditional: "none" },
    ]
  },
  {
    category: "Performance",
    items: [
      { name: "Sub-100ms processing", proxima: "full", traditional: "partial" },
      { name: "Unlimited session analysis", proxima: "full", traditional: "partial" },
      { name: "Real-time anomaly detection", proxima: "full", traditional: "none" },
      { name: "Zero manual configuration", proxima: "full", traditional: "none" },
    ]
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "full") {
    return (
      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
        <Check className="w-4 h-4 text-green-500" />
      </div>
    );
  }
  if (status === "partial") {
    return (
      <div className="w-6 h-6 rounded-full bg-orange/20 flex items-center justify-center">
        <Minus className="w-4 h-4 text-orange" />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
      <X className="w-4 h-4 text-destructive" />
    </div>
  );
};

export function AgentComparisonTable() {
  return (
    <section className="section-padding relative overflow-hidden" id="comparison">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-azure/5 to-background" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure to-aqua text-primary-foreground text-sm font-bold mb-6">
            <BarChart3 className="w-4 h-4" />
            Feature Comparison
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            PROXIMA AI vs <span className="gradient-text">Traditional Analytics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how PROXIMA's multi-agent intelligence compares to traditional analytics tools
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl glass border border-border/50 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-card/80 border-b border-border/50">
              <div className="text-sm font-medium text-muted-foreground">Feature</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-azure to-aqua">
                  <Brain className="w-4 h-4 text-primary-foreground" />
                  <span className="font-bold text-primary-foreground text-sm">PROXIMA AI</span>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted">
                  <BarChart3 className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium text-muted-foreground text-sm">Traditional</span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            {features.map((section, sectionIdx) => (
              <div key={section.category}>
                {/* Category Header */}
                <div className="px-4 py-3 bg-muted/30 border-b border-border/30">
                  <span className="text-sm font-bold text-foreground">{section.category}</span>
                </div>
                
                {/* Items */}
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={item.name}
                    className={cn(
                      "grid grid-cols-3 gap-4 px-4 py-3 transition-colors hover:bg-card/50",
                      itemIdx < section.items.length - 1 && "border-b border-border/20"
                    )}
                  >
                    <div className="text-sm text-foreground">{item.name}</div>
                    <div className="flex justify-center">
                      <StatusIcon status={item.proxima} />
                    </div>
                    <div className="flex justify-center">
                      <StatusIcon status={item.traditional} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
              <span className="text-sm text-muted-foreground">Full Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-orange/20 flex items-center justify-center">
                <Minus className="w-3 h-3 text-orange" />
              </div>
              <span className="text-sm text-muted-foreground">Partial Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-3 h-3 text-destructive" />
              </div>
              <span className="text-sm text-muted-foreground">Not Supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}