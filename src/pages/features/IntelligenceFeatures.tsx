import { Link } from "react-router-dom";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollProgress } from "@/components/traceflow/ScrollProgress";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IntelligenceHeroAnimation } from "@/components/traceflow/FeatureHeroAnimations";
import { 
  Brain, Sparkles, FileText, GitBranch, Route, Eye, ArrowLeft, 
  Check, Zap, ChevronRight, TrendingUp, Target, Bot
} from "lucide-react";

const agents = [
  {
    icon: Brain,
    title: "PROXIMA Core",
    description: "The orchestration layer that coordinates all AI agents for unified intelligence. Manages context, prioritizes insights, and ensures coherent analysis.",
    color: "aqua",
    stats: { value: "8", label: "Specialized Agents" }
  },
  {
    icon: Sparkles,
    title: "AI Summaries",
    description: "Transform hours of session data into actionable summaries. Natural language insights that anyone can understand and act upon.",
    color: "azure",
    stats: { value: "<30s", label: "Summary Generation" }
  },
  {
    icon: GitBranch,
    title: "Root Cause Analysis",
    description: "Automatically trace issues back to their source with causal graphs. No more guesswork—see exactly what caused user problems.",
    color: "orange",
    stats: { value: "99.1%", label: "Accuracy" }
  },
  {
    icon: Route,
    title: "Journey Mapping",
    description: "Visualize and optimize user paths across your application. Identify bottlenecks and find the fastest routes to conversion.",
    color: "aqua",
    stats: { value: "∞", label: "Path Analysis" }
  },
  {
    icon: Eye,
    title: "UX Vision",
    description: "AI-powered visual analysis that detects design issues, accessibility problems, and opportunities for improvement.",
    color: "azure",
    stats: { value: "WCAG", label: "Compliant" }
  }
];

const capabilities = [
  { title: "Natural Language Queries", desc: "Ask questions in plain English and get instant answers" },
  { title: "Predictive Insights", desc: "Anticipate issues before they impact users" },
  { title: "Auto-Generated Reports", desc: "Weekly and monthly reports created automatically" },
  { title: "Smart Alerts", desc: "Get notified about anomalies and trends that matter" },
];

export default function IntelligenceFeatures() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <EnhancedNavigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-aqua/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--aqua)/0.15),transparent_60%)]" />
          
          <div className="container-wide relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <ScrollReveal direction="up">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-aqua to-aqua/70 text-primary-foreground text-sm font-bold mb-6">
                    <Brain className="w-4 h-4" />
                    Intelligence Platform
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                    AI-Powered <span className="gradient-text">Digital Intelligence</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Eight specialized AI agents working in concert to analyze, understand, and optimize every aspect of your digital experience.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="aqua" size="lg">
                      Explore PROXIMA AI
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Link to="/agents">
                      <Button variant="outline" size="lg">
                        Meet the Agents
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative h-[300px] lg:h-[350px]">
                  <div className="absolute -inset-4 bg-gradient-to-r from-aqua/20 via-azure/10 to-transparent rounded-3xl blur-xl" />
                  <IntelligenceHeroAnimation className="relative z-10" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* AI Agents Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Multi-Agent <span className="gradient-text">AI System</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Specialized agents working together to deliver comprehensive intelligence
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent, idx) => (
                <ScrollReveal key={agent.title} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 100}>
                  <div className={cn(
                    "group p-6 rounded-2xl glass border-2 transition-all duration-500",
                    "hover:scale-[1.02] hover:-translate-y-1",
                    agent.color === "azure" && "border-azure/20 hover:border-azure/50 hover:shadow-[0_0_40px_hsl(var(--azure)/0.2)]",
                    agent.color === "aqua" && "border-aqua/20 hover:border-aqua/50 hover:shadow-[0_0_40px_hsl(var(--aqua)/0.2)]",
                    agent.color === "orange" && "border-orange/20 hover:border-orange/50 hover:shadow-[0_0_40px_hsl(var(--orange)/0.2)]"
                  )}>
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                      agent.color === "azure" && "bg-azure/10",
                      agent.color === "aqua" && "bg-aqua/10",
                      agent.color === "orange" && "bg-orange/10"
                    )}>
                      <agent.icon className={cn(
                        "w-7 h-7",
                        agent.color === "azure" && "text-azure",
                        agent.color === "aqua" && "text-aqua",
                        agent.color === "orange" && "text-orange"
                      )} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{agent.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{agent.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className={cn(
                        "text-2xl font-bold",
                        agent.color === "azure" && "text-azure",
                        agent.color === "aqua" && "text-aqua",
                        agent.color === "orange" && "text-orange"
                      )}>{agent.stats.value}</span>
                      <span className="text-xs text-muted-foreground">{agent.stats.label}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-azure/10 text-azure text-sm font-medium mb-4">
                    <Bot className="w-4 h-4" />
                    AI Capabilities
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Intelligence That <span className="gradient-text">Works for You</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    PROXIMA AI continuously learns from your data to deliver increasingly accurate insights and recommendations.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {capabilities.map((cap) => (
                      <div key={cap.title} className="p-4 rounded-xl bg-card/50 border border-border/50">
                        <Check className="w-5 h-5 text-aqua mb-2" />
                        <h4 className="font-semibold mb-1">{cap.title}</h4>
                        <p className="text-sm text-muted-foreground">{cap.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-azure/20 via-aqua/20 to-orange/20 rounded-3xl blur-xl opacity-50" />
                  <div className="relative p-8 rounded-2xl glass border border-border/50">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-azure via-aqua to-azure flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold">PROXIMA Core</h3>
                      <p className="text-sm text-muted-foreground">Orchestrating 8 specialized agents</p>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[TrendingUp, Target, Zap, Sparkles, GitBranch, Route, Eye, FileText].map((Icon, idx) => (
                        <div 
                          key={idx}
                          className="w-10 h-10 rounded-lg bg-card/80 border border-border/50 flex items-center justify-center animate-pulse"
                          style={{ animationDelay: `${idx * 200}ms` }}
                        >
                          <Icon className="w-5 h-5 text-aqua" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-azure/10 via-aqua/10 to-orange/10 border border-border/50">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Experience <span className="gradient-text">AI-Powered Insights</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let PROXIMA AI transform your digital experience data into actionable intelligence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="aqua" size="lg">
                    Try PROXIMA AI Free
                  </Button>
                  <Link to="/agents">
                    <Button variant="outline" size="lg">
                      View Agent Profiles
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}