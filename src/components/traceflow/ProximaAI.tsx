import { cn } from "@/lib/utils";
import { Brain, User, Map, GitBranch, Eye, DollarSign, Ticket } from "lucide-react";

const agents = [
  { icon: User, name: "Session Analyst", description: "Deep session behavior analysis" },
  { icon: Map, name: "Journey Mapper", description: "Cross-session path optimization" },
  { icon: GitBranch, name: "Causality Engine", description: "Root cause identification" },
  { icon: Eye, name: "UX Vision", description: "Visual experience insights" },
  { icon: DollarSign, name: "Revenue Impact", description: "Business value quantification" },
  { icon: Ticket, name: "Ticket Automation", description: "Auto-create actionable tickets" },
];

export function ProximaAI() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-azure/5 to-background" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure to-aqua text-primary-foreground text-sm font-bold mb-6">
            <Brain className="w-4 h-4" />
            Multi-Agent AI
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            PROXIMA — <span className="gradient-text">Digital Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six specialized AI agents working in concert
          </p>
        </div>

        {/* Central Brain Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Hub */}
          <div className="relative flex items-center justify-center py-20">
            {/* Orbit Rings */}
            <div className="absolute w-48 h-48 rounded-full border border-azure/20 animate-spin-slow" />
            <div className="absolute w-72 h-72 rounded-full border border-aqua/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
            <div className="absolute w-96 h-96 rounded-full border border-azure/10 animate-spin-slow" style={{ animationDuration: "30s" }} />

            {/* Central Brain */}
            <div className="relative z-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-azure to-aqua flex items-center justify-center shadow-[0_0_60px_hsl(var(--aqua)/0.4)] animate-pulse-glow">
                <Brain className="w-16 h-16 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="px-4 py-1 rounded-full bg-card/80 backdrop-blur text-sm font-bold gradient-text border border-border/50">
                  PROXIMA Core
                </span>
              </div>
            </div>

            {/* Orbiting Agent Nodes */}
            {agents.map((agent, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={agent.name}
                  className="absolute group"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {/* Connection Line */}
                  <div
                    className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-azure/50 to-transparent origin-left"
                    style={{
                      width: radius,
                      transform: `rotate(${(angle * 180) / Math.PI + 180}deg)`,
                    }}
                  />

                  {/* Agent Node */}
                  <div
                    className={cn(
                      "relative w-16 h-16 -ml-8 -mt-8 rounded-xl flex items-center justify-center",
                      "bg-card border border-border/50 shadow-lg",
                      "group-hover:border-aqua/50 group-hover:scale-110 transition-all duration-300",
                      "cursor-pointer"
                    )}
                  >
                    <agent.icon className="w-7 h-7 text-aqua" />

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="px-3 py-2 rounded-lg bg-card/95 backdrop-blur border border-border shadow-lg whitespace-nowrap">
                        <div className="text-sm font-bold text-foreground">{agent.name}</div>
                        <div className="text-xs text-muted-foreground">{agent.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Agent Cards Mobile/Tablet */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 lg:hidden">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className="p-4 rounded-xl glass border border-border/50 hover:border-aqua/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-azure to-aqua flex items-center justify-center">
                  <agent.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{agent.name}</div>
                  <div className="text-xs text-muted-foreground">{agent.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            {["Events", "Agents", "Insights", "Actions"].map((step, index) => (
              <div key={step} className="flex items-center gap-4 lg:gap-8">
                <div className="px-6 py-3 rounded-xl glass border border-border/50 font-bold">
                  {step}
                </div>
                {index < 3 && (
                  <div className="hidden lg:block w-8 h-0.5 bg-gradient-to-r from-azure to-aqua" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
