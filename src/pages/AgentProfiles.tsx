import { useState } from "react";
import { Link } from "react-router-dom";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollProgress } from "@/components/traceflow/ScrollProgress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Brain, User, Map, GitBranch, Eye, DollarSign, Ticket, Shield, Zap, 
  ArrowLeft, Check, TrendingUp, Clock, Target, Sparkles, Play, Pause,
  BarChart3, Activity, AlertTriangle, LineChart
} from "lucide-react";

const agents = [
  { 
    id: "session-analyst",
    icon: User, 
    name: "Session Analyst", 
    shortName: "Session",
    description: "Deep behavioral pattern recognition across user sessions with real-time anomaly detection", 
    color: "aqua",
    capability: "Behavior Analysis",
    metrics: { accuracy: 98.7, speed: "< 50ms", coverage: "100%" },
    useCases: [
      "Identify rage clicks and frustration patterns",
      "Detect drop-off points in critical flows",
      "Track user engagement across sessions",
      "Segment users by behavioral patterns"
    ],
    capabilities: [
      "Real-time session monitoring",
      "Behavioral pattern matching",
      "Anomaly detection algorithms",
      "Cross-device session linking"
    ]
  },
  { 
    id: "journey-mapper",
    icon: Map, 
    name: "Journey Mapper", 
    shortName: "Journey",
    description: "Cross-session path optimization and comprehensive funnel analysis for conversion improvement", 
    color: "azure",
    capability: "Path Intelligence",
    metrics: { accuracy: 97.2, speed: "< 100ms", coverage: "95%" },
    useCases: [
      "Optimize checkout conversion funnels",
      "Identify optimal user paths",
      "Reduce cart abandonment rates",
      "Improve onboarding completion"
    ],
    capabilities: [
      "Multi-path journey analysis",
      "Funnel optimization suggestions",
      "A/B test impact prediction",
      "Journey template creation"
    ]
  },
  { 
    id: "causality-engine",
    icon: GitBranch, 
    name: "Causality Engine", 
    shortName: "Causality",
    description: "Automated root cause identification with AI-powered correlation analysis", 
    color: "orange",
    capability: "Root Cause Analysis",
    metrics: { accuracy: 99.1, speed: "< 200ms", coverage: "98%" },
    useCases: [
      "Pinpoint exact cause of user issues",
      "Correlate errors with user actions",
      "Trace performance degradation sources",
      "Identify dependency failures"
    ],
    capabilities: [
      "Causal graph generation",
      "Multi-factor correlation",
      "Timeline reconstruction",
      "Impact propagation analysis"
    ]
  },
  { 
    id: "ux-vision",
    icon: Eye, 
    name: "UX Vision", 
    shortName: "UX Vision",
    description: "Visual experience analysis with accessibility insights and design optimization", 
    color: "aqua",
    capability: "Visual Intelligence",
    metrics: { accuracy: 96.5, speed: "< 150ms", coverage: "92%" },
    useCases: [
      "Detect visual regressions automatically",
      "Ensure WCAG accessibility compliance",
      "Optimize responsive design breakpoints",
      "Identify layout shift issues"
    ],
    capabilities: [
      "Visual regression detection",
      "Accessibility scoring",
      "Heatmap generation",
      "Layout optimization"
    ]
  },
  { 
    id: "revenue-impact",
    icon: DollarSign, 
    name: "Revenue Impact", 
    shortName: "Revenue",
    description: "Business value quantification with precise ROI attribution and revenue forecasting", 
    color: "orange",
    capability: "Business Analytics",
    metrics: { accuracy: 94.8, speed: "< 300ms", coverage: "100%" },
    useCases: [
      "Calculate revenue impact of UX issues",
      "Prioritize fixes by business value",
      "Forecast conversion improvements",
      "Track feature ROI over time"
    ],
    capabilities: [
      "Revenue attribution modeling",
      "LTV impact prediction",
      "A/B test revenue analysis",
      "Business KPI correlation"
    ]
  },
  { 
    id: "ticket-automator",
    icon: Ticket, 
    name: "Ticket Automator", 
    shortName: "Tickets",
    description: "Auto-create prioritized, actionable support tickets with full context", 
    color: "azure",
    capability: "Workflow Automation",
    metrics: { accuracy: 97.9, speed: "< 100ms", coverage: "100%" },
    useCases: [
      "Create Jira tickets automatically",
      "Attach session replays to tickets",
      "Prioritize by user impact",
      "Route to correct team"
    ],
    capabilities: [
      "Multi-platform integration",
      "Smart ticket deduplication",
      "Severity auto-classification",
      "Context enrichment"
    ]
  },
  { 
    id: "anomaly-guardian",
    icon: Shield, 
    name: "Anomaly Guardian", 
    shortName: "Anomaly",
    description: "Real-time threat detection with proactive security anomaly identification", 
    color: "aqua",
    capability: "Security Intelligence",
    metrics: { accuracy: 99.5, speed: "< 25ms", coverage: "100%" },
    useCases: [
      "Detect bot and fraud patterns",
      "Identify account takeover attempts",
      "Monitor for data exfiltration",
      "Alert on unusual access patterns"
    ],
    capabilities: [
      "Real-time threat detection",
      "Behavioral fingerprinting",
      "Fraud pattern recognition",
      "Security event correlation"
    ]
  },
  { 
    id: "performance-oracle",
    icon: Zap, 
    name: "Performance Oracle", 
    shortName: "Performance",
    description: "Predictive performance optimization with latency forecasting and bottleneck detection", 
    color: "orange",
    capability: "Performance AI",
    metrics: { accuracy: 98.3, speed: "< 75ms", coverage: "100%" },
    useCases: [
      "Predict performance degradation",
      "Identify resource bottlenecks",
      "Optimize load times proactively",
      "Monitor Core Web Vitals"
    ],
    capabilities: [
      "Predictive performance modeling",
      "Resource optimization",
      "Load time forecasting",
      "Infrastructure recommendations"
    ]
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    aqua: {
      bg: "bg-aqua/10",
      border: "border-aqua/30 hover:border-aqua",
      text: "text-aqua",
      gradient: "from-aqua to-aqua/50"
    },
    azure: {
      bg: "bg-azure/10",
      border: "border-azure/30 hover:border-azure",
      text: "text-azure",
      gradient: "from-azure to-azure/50"
    },
    orange: {
      bg: "bg-orange/10",
      border: "border-orange/30 hover:border-orange",
      text: "text-orange",
      gradient: "from-orange to-orange/50"
    },
  };
  return colors[color as keyof typeof colors];
};

export default function AgentProfiles() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);
  const colorClasses = getColorClasses(selectedAgent.color);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <EnhancedNavigation />
      
      <main className="pt-24 pb-16">
        <div className="container-wide">
          {/* Back Link */}
          <Link 
            to="/#proxima" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to PROXIMA Overview
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure to-aqua text-primary-foreground text-sm font-bold mb-6">
              <Brain className="w-4 h-4" />
              AI Agent Profiles
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Meet Your <span className="gradient-text">AI Workforce</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eight specialized AI agents with unique capabilities, working together to transform your digital experience data
            </p>
          </div>

          {/* Agent Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {agents.map((agent) => {
              const agentColors = getColorClasses(agent.color);
              const isSelected = selectedAgent.id === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all duration-300",
                    isSelected 
                      ? `${agentColors.bg} ${agentColors.text} border-current shadow-lg` 
                      : "bg-card/50 border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                  )}
                >
                  <agent.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{agent.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Agent Detail */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Agent Info */}
            <div className="lg:col-span-1">
              <div className={cn(
                "p-6 rounded-2xl glass border-2 transition-all duration-500",
                colorClasses.border
              )}>
                <div className={cn(
                  "w-20 h-20 rounded-2xl flex items-center justify-center mb-6",
                  colorClasses.bg
                )}>
                  <selectedAgent.icon className={cn("w-10 h-10", colorClasses.text)} />
                </div>
                
                <span className={cn("text-xs font-semibold uppercase tracking-wider", colorClasses.text)}>
                  {selectedAgent.capability}
                </span>
                <h2 className="text-2xl font-bold mt-2 mb-3">{selectedAgent.name}</h2>
                <p className="text-muted-foreground mb-6">{selectedAgent.description}</p>

                {/* Performance Metrics */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground">Performance Metrics</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-xl bg-card/50 border border-border/50">
                      <div className={cn("text-xl font-bold", colorClasses.text)}>
                        {selectedAgent.metrics.accuracy}%
                      </div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-card/50 border border-border/50">
                      <div className={cn("text-xl font-bold", colorClasses.text)}>
                        {selectedAgent.metrics.speed}
                      </div>
                      <div className="text-xs text-muted-foreground">Latency</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-card/50 border border-border/50">
                      <div className={cn("text-xl font-bold", colorClasses.text)}>
                        {selectedAgent.metrics.coverage}
                      </div>
                      <div className="text-xs text-muted-foreground">Coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Capabilities & Use Cases */}
            <div className="lg:col-span-2 space-y-6">
              {/* Capabilities */}
              <div className="p-6 rounded-2xl glass border border-border/50">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Target className={cn("w-5 h-5", colorClasses.text)} />
                  Core Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedAgent.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
                      <Check className={cn("w-5 h-5 shrink-0", colorClasses.text)} />
                      <span className="text-sm">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="p-6 rounded-2xl glass border border-border/50">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className={cn("w-5 h-5", colorClasses.text)} />
                  Use Cases
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedAgent.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
                      <Sparkles className={cn("w-4 h-4 shrink-0 mt-0.5", colorClasses.text)} />
                      <span className="text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}