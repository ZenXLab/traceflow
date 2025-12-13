import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Play, Pause, RotateCcw, User, Map, GitBranch, Eye, DollarSign, 
  Ticket, Shield, Zap, ChevronRight, Activity, AlertTriangle,
  TrendingUp, Clock, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  { id: "session", name: "Session Analyst", icon: User, color: "aqua" },
  { id: "journey", name: "Journey Mapper", icon: Map, color: "azure" },
  { id: "causality", name: "Causality Engine", icon: GitBranch, color: "orange" },
  { id: "ux", name: "UX Vision", icon: Eye, color: "aqua" },
  { id: "revenue", name: "Revenue Impact", icon: DollarSign, color: "orange" },
  { id: "ticket", name: "Ticket Automator", icon: Ticket, color: "azure" },
  { id: "anomaly", name: "Anomaly Guardian", icon: Shield, color: "aqua" },
  { id: "performance", name: "Performance Oracle", icon: Zap, color: "orange" },
];

const sampleEvents = [
  { type: "pageview", data: "User landed on /checkout", time: "0:00" },
  { type: "click", data: "Clicked 'Add to Cart' button", time: "0:02" },
  { type: "scroll", data: "Scrolled 80% of product page", time: "0:05" },
  { type: "error", data: "Payment form validation failed", time: "0:08" },
  { type: "click", data: "Rage click on submit (5x)", time: "0:10" },
  { type: "pageview", data: "User navigated to /help", time: "0:15" },
];

const agentAnalysis: Record<string, { insight: string; action: string; metric: string }> = {
  session: {
    insight: "User shows frustration patterns with 5 rage clicks detected",
    action: "Flagged session for review with frustration score 8.5/10",
    metric: "Frustration Score: 8.5"
  },
  journey: {
    insight: "User deviated from optimal checkout path at payment step",
    action: "Identified 23% of users face same bottleneck",
    metric: "Drop-off Rate: 23%"
  },
  causality: {
    insight: "Payment validation error caused by invalid card format",
    action: "Traced root cause to missing input mask",
    metric: "Root Cause: Input Validation"
  },
  ux: {
    insight: "Submit button has low contrast on error state",
    action: "Accessibility issue flagged (WCAG AA fail)",
    metric: "Contrast Ratio: 2.1:1"
  },
  revenue: {
    insight: "This issue affects $45K monthly revenue",
    action: "Prioritized as P1 based on business impact",
    metric: "Revenue Impact: $45K/mo"
  },
  ticket: {
    insight: "Auto-created JIRA ticket with session replay",
    action: "Routed to payment team with full context",
    metric: "Ticket: PAY-1234"
  },
  anomaly: {
    insight: "Unusual pattern detected - potential bot behavior",
    action: "Risk score elevated, monitoring activated",
    metric: "Risk Score: Low"
  },
  performance: {
    insight: "Page load time 3.2s exceeds threshold",
    action: "LCP bottleneck identified in hero image",
    metric: "LCP: 3.2s (Poor)"
  },
};

export function AgentInteractiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(-1);
  const [activeAgents, setActiveAgents] = useState<string[]>([]);
  const [analysisResults, setAnalysisResults] = useState<Record<string, typeof agentAnalysis.session>>({});

  useEffect(() => {
    if (!isPlaying) return;

    const eventInterval = setInterval(() => {
      setCurrentEventIndex(prev => {
        if (prev >= sampleEvents.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(eventInterval);
  }, [isPlaying]);

  useEffect(() => {
    if (currentEventIndex < 0) return;

    // Simulate agents activating based on events
    const agentOrder = ["session", "journey", "causality", "ux", "revenue", "ticket", "anomaly", "performance"];
    const agentToActivate = agentOrder[currentEventIndex % agentOrder.length];
    
    setActiveAgents(prev => [...new Set([...prev, agentToActivate])]);
    
    setTimeout(() => {
      setAnalysisResults(prev => ({
        ...prev,
        [agentToActivate]: agentAnalysis[agentToActivate]
      }));
    }, 500);
  }, [currentEventIndex]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentEventIndex(-1);
    setActiveAgents([]);
    setAnalysisResults({});
  };

  const handlePlayPause = () => {
    if (currentEventIndex >= sampleEvents.length - 1) {
      handleReset();
      setTimeout(() => setIsPlaying(true), 100);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const getColorClasses = (color: string, isActive: boolean) => ({
    aqua: {
      bg: isActive ? "bg-aqua/20" : "bg-aqua/5",
      border: isActive ? "border-aqua shadow-[0_0_20px_hsl(var(--aqua)/0.3)]" : "border-aqua/20",
      text: "text-aqua"
    },
    azure: {
      bg: isActive ? "bg-azure/20" : "bg-azure/5",
      border: isActive ? "border-azure shadow-[0_0_20px_hsl(var(--azure)/0.3)]" : "border-azure/20",
      text: "text-azure"
    },
    orange: {
      bg: isActive ? "bg-orange/20" : "bg-orange/5",
      border: isActive ? "border-orange shadow-[0_0_20px_hsl(var(--orange)/0.3)]" : "border-orange/20",
      text: "text-orange"
    },
  }[color]);

  return (
    <section className="section-padding relative overflow-hidden" id="agent-demo">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-azure/5 to-background" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange to-aqua text-primary-foreground text-sm font-bold mb-6">
            <Activity className="w-4 h-4" />
            Interactive Demo
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Watch AI Agents <span className="gradient-text">Analyze in Real-Time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how PROXIMA agents work together to analyze user events and generate actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Event Stream */}
          <div className="p-6 rounded-2xl glass border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 text-aqua" />
                Event Stream
              </h3>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handlePlayPause}
                  className="h-8"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleReset}
                  className="h-8"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {sampleEvents.map((event, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "p-3 rounded-lg border transition-all duration-300",
                    idx <= currentEventIndex 
                      ? "bg-card border-aqua/30" 
                      : "bg-card/30 border-border/30 opacity-50"
                  )}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={cn(
                      "text-xs font-semibold uppercase",
                      event.type === "error" ? "text-destructive" : "text-aqua"
                    )}>
                      {event.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{event.time}</span>
                  </div>
                  <p className="text-sm text-foreground">{event.data}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Agents */}
          <div className="p-6 rounded-2xl glass border border-border/50">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-azure" />
              Agent Activity
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {agents.map((agent) => {
                const isActive = activeAgents.includes(agent.id);
                const colors = getColorClasses(agent.color, isActive);
                
                return (
                  <div
                    key={agent.id}
                    className={cn(
                      "p-3 rounded-xl border-2 transition-all duration-500",
                      colors?.bg,
                      colors?.border
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <agent.icon className={cn("w-4 h-4", colors?.text)} />
                      <span className="text-xs font-medium truncate">{agent.name.split(" ")[0]}</span>
                    </div>
                    {isActive && (
                      <div className="mt-2 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-muted-foreground">Analyzing</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Analysis Results */}
          <div className="p-6 rounded-2xl glass border border-border/50">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-orange" />
              Insights Generated
            </h3>
            
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {Object.entries(analysisResults).length === 0 ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Press play to start the demo
                </div>
              ) : (
                Object.entries(analysisResults).map(([agentId, result]) => {
                  const agent = agents.find(a => a.id === agentId);
                  if (!agent) return null;
                  
                  return (
                    <div key={agentId} className="p-3 rounded-lg bg-card border border-border/50 animate-fade-in">
                      <div className="flex items-center gap-2 mb-2">
                        <agent.icon className="w-4 h-4 text-aqua" />
                        <span className="text-xs font-semibold">{agent.name}</span>
                        <CheckCircle2 className="w-3 h-3 text-green-500 ml-auto" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{result.insight}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-foreground">{result.action}</span>
                        <span className="text-[10px] font-semibold text-aqua">{result.metric}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}