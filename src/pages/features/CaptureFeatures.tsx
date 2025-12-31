import { Link } from "react-router-dom";
import { EnhancedNavigation } from "@/components/traceflow/EnhancedNavigation";
import { Footer } from "@/components/traceflow/Footer";
import { ScrollProgress } from "@/components/traceflow/ScrollProgress";
import { ScrollReveal } from "@/components/traceflow/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CaptureHeroAnimation } from "@/components/traceflow/FeatureHeroAnimations";
import { 
  Radio, Play, Activity, Smartphone, Layers, ArrowLeft, Check, 
  Code, Zap, Clock, Shield, ChevronRight, BarChart3
} from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "SDK Integration",
    description: "Deploy our lightweight SDK across web, mobile, and hybrid platforms in minutes. Automatic instrumentation captures every interaction without code changes.",
    color: "azure",
    stats: { value: "<5KB", label: "Gzipped Size" }
  },
  {
    icon: Play,
    title: "Session Replay",
    description: "Pixel-perfect playback of every user session. See exactly what your users experienced, including DOM changes, network requests, and console logs.",
    color: "aqua",
    stats: { value: "60fps", label: "Playback Quality" }
  },
  {
    icon: Activity,
    title: "Event Tracking",
    description: "Custom event taxonomies with automatic enrichment. Track clicks, scrolls, form interactions, and custom business events with full context.",
    color: "orange",
    stats: { value: "∞", label: "Custom Events" }
  },
  {
    icon: Smartphone,
    title: "Mobile Capture",
    description: "Native iOS and Android SDKs with React Native and Flutter support. Capture touch gestures, app lifecycle, and device-specific context.",
    color: "azure",
    stats: { value: "3", label: "Platforms" }
  },
  {
    icon: Layers,
    title: "DOM Snapshots",
    description: "Full DOM tree capture with incremental updates. Reconstruct any point in time with complete visual fidelity and element hierarchy.",
    color: "aqua",
    stats: { value: "100%", label: "Visual Fidelity" }
  }
];

const integrations = [
  { name: "React", icon: "⚛️" },
  { name: "Vue", icon: "💚" },
  { name: "Angular", icon: "🅰️" },
  { name: "Next.js", icon: "▲" },
  { name: "iOS", icon: "🍎" },
  { name: "Android", icon: "🤖" },
];

const codeExample = `// Install the TRACEFLOW SDK
npm install @traceflow/sdk

// Initialize in your app
import { Traceflow } from '@traceflow/sdk';

Traceflow.init({
  projectId: 'your-project-id',
  captureClicks: true,
  captureScrolls: true,
  captureErrors: true,
  sessionReplay: true
});`;

export default function CaptureFeatures() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <EnhancedNavigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-azure/10 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--azure)/0.15),transparent_60%)]" />
          
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
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-azure to-azure/70 text-primary-foreground text-sm font-bold mb-6">
                    <Radio className="w-4 h-4" />
                    Capture Platform
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                    Capture <span className="gradient-text">Every Signal</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Multi-platform SDK integration with pixel-perfect session replay, custom event tracking, and complete DOM snapshots.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="azure" size="lg">
                      Get Started Free
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg">
                      View Documentation
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] lg:h-[350px]">
                  <div className="absolute -inset-4 bg-gradient-to-r from-azure/20 via-aqua/10 to-transparent rounded-3xl blur-xl" />
                  <CaptureHeroAnimation className="relative z-10" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Complete <span className="gradient-text">Data Capture</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to capture, replay, and analyze user interactions
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <ScrollReveal key={feature.title} direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 100}>
                  <div className={cn(
                    "group p-6 rounded-2xl glass border-2 transition-all duration-500",
                    "hover:scale-[1.02] hover:-translate-y-1",
                    feature.color === "azure" && "border-azure/20 hover:border-azure/50 hover:shadow-[0_0_40px_hsl(var(--azure)/0.2)]",
                    feature.color === "aqua" && "border-aqua/20 hover:border-aqua/50 hover:shadow-[0_0_40px_hsl(var(--aqua)/0.2)]",
                    feature.color === "orange" && "border-orange/20 hover:border-orange/50 hover:shadow-[0_0_40px_hsl(var(--orange)/0.2)]"
                  )}>
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                      feature.color === "azure" && "bg-azure/10",
                      feature.color === "aqua" && "bg-aqua/10",
                      feature.color === "orange" && "bg-orange/10"
                    )}>
                      <feature.icon className={cn(
                        "w-7 h-7",
                        feature.color === "azure" && "text-azure",
                        feature.color === "aqua" && "text-aqua",
                        feature.color === "orange" && "text-orange"
                      )} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className={cn(
                        "text-2xl font-bold",
                        feature.color === "azure" && "text-azure",
                        feature.color === "aqua" && "text-aqua",
                        feature.color === "orange" && "text-orange"
                      )}>{feature.stats.value}</span>
                      <span className="text-xs text-muted-foreground">{feature.stats.label}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua/10 text-aqua text-sm font-medium mb-4">
                    <Code className="w-4 h-4" />
                    Quick Setup
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Integrate in <span className="gradient-text">5 Minutes</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our SDK automatically captures user sessions, errors, and performance metrics with zero configuration.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Automatic error capture", "Performance monitoring", "User identification", "Custom event tracking"].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-aqua" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {integrations.map((int) => (
                      <div key={int.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/50">
                        <span>{int.icon}</span>
                        <span className="text-sm font-medium">{int.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-azure/20 via-aqua/20 to-orange/20 rounded-2xl blur-xl opacity-50" />
                  <pre className="relative p-6 rounded-xl bg-card/90 border border-border/50 overflow-x-auto">
                    <code className="text-sm text-foreground">{codeExample}</code>
                  </pre>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: "<50ms", label: "Capture Latency", icon: Zap },
                  { value: "99.99%", label: "Data Accuracy", icon: BarChart3 },
                  { value: "0%", label: "Performance Impact", icon: Clock },
                  { value: "100%", label: "PCI Compliant", icon: Shield },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 rounded-2xl glass border border-border/50">
                    <stat.icon className="w-8 h-8 text-aqua mx-auto mb-3" />
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal direction="up">
              <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-azure/10 via-aqua/10 to-orange/10 border border-border/50">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Capture <span className="gradient-text">Every Signal</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Start capturing user sessions in minutes with our free tier. No credit card required.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="azure" size="lg">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Demo
                  </Button>
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