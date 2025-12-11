import { useState } from "react";
import { cn } from "@/lib/utils";
import { Play, BarChart3, Brain, Flame, Ticket } from "lucide-react";

const tabs = [
  { id: "replay", label: "Session Replay", icon: Play },
  { id: "ai", label: "AI Analysis", icon: Brain },
  { id: "heatmaps", label: "UX Heatmaps", icon: Flame },
  { id: "ticketing", label: "Auto-Ticketing", icon: Ticket },
];

const stats = [
  { value: "1.2B", label: "Events Processed" },
  { value: "99.9%", label: "Uptime" },
  { value: "23ms", label: "Latency" },
];

export function VideoDemoSection() {
  const [activeTab, setActiveTab] = useState("replay");

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-background" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            See <span className="gradient-text">TRACEFLOW</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of digital cognition infrastructure
          </p>
        </div>

        {/* Demo Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glassmorphic Frame */}
          <div className="glass-strong rounded-3xl p-4 lg:p-8 relative overflow-hidden">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-orange/50" />
                <div className="w-3 h-3 rounded-full bg-aqua/50" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-lg bg-muted/50 text-xs text-muted-foreground font-mono">
                  app.traceflow.io/dashboard
                </div>
              </div>
            </div>

            {/* Demo Content */}
            <div className="relative aspect-video rounded-xl bg-background/50 overflow-hidden border border-border/50">
              {/* Simulated Dashboard */}
              <div className="absolute inset-0 p-4 lg:p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-azure to-aqua flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">T</span>
                    </div>
                    <span className="font-bold text-sm hidden sm:inline">TRACEFLOW Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-aqua"></span>
                    </span>
                    <span className="text-xs text-aqua">Live</span>
                  </div>
                </div>

                {/* Content based on active tab */}
                <div className="grid grid-cols-3 gap-4 h-[calc(100%-40px)]">
                  {/* Left Panel */}
                  <div className="col-span-2 rounded-xl bg-muted/30 p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                      <span className="text-xs font-medium">Session Recording</span>
                    </div>
                    <div className="flex-1 rounded-lg bg-background/50 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-azure/20 flex items-center justify-center animate-pulse">
                          <Play className="w-8 h-8 lg:w-10 lg:h-10 text-azure" />
                        </div>
                      </div>
                      {/* Simulated cursor movement */}
                      <div className="absolute w-4 h-4 bg-azure rounded-full animate-bounce" style={{ top: "40%", left: "60%" }} />
                    </div>
                    {/* Progress bar */}
                    <div className="mt-3 h-1 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-azure to-aqua rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
                    </div>
                  </div>

                  {/* Right Panel */}
                  <div className="space-y-3">
                    {/* AI Summary */}
                    <div className="rounded-xl bg-gradient-to-br from-azure/10 to-aqua/10 p-3 border border-azure/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-aqua" />
                        <span className="text-xs font-bold">PROXIMA AI</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-foreground/20 rounded animate-pulse w-full" />
                        <div className="h-2 bg-foreground/20 rounded animate-pulse w-3/4" />
                        <div className="h-2 bg-foreground/20 rounded animate-pulse w-1/2" />
                      </div>
                    </div>

                    {/* Rage Click Alert */}
                    <div className="rounded-xl bg-destructive/10 p-3 border border-destructive/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Flame className="w-4 h-4 text-destructive animate-bounce" />
                        <span className="text-xs font-bold text-destructive">Rage Click</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Submit button - 12 clicks</p>
                    </div>

                    {/* Metrics */}
                    <div className="rounded-xl bg-muted/30 p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs font-bold">Metrics</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center">
                          <div className="text-lg font-bold gradient-text">4.2s</div>
                          <div className="text-xs text-muted-foreground">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-aqua">23</div>
                          <div className="text-xs text-muted-foreground">Events</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4 lg:gap-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="px-3 lg:px-4 py-2 rounded-lg bg-card/80 backdrop-blur border border-border/50"
                  >
                    <div className="text-lg lg:text-xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-azure to-aqua text-primary-foreground"
                      : "glass text-muted-foreground hover:text-foreground"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-azure/20 blur-2xl animate-pulse-glow" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-aqua/20 blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </section>
  );
}
