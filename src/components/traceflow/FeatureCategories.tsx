import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Radio, Play, MousePointerClick, Route, TrendingUp, Activity, Check } from "lucide-react";

const categories = [
  {
    id: "capture",
    icon: Radio,
    title: "Capture Engine",
    features: [
      "Unified SDK for Web, Mobile, IoT",
      "Auto-instrumentation with zero config",
      "Custom event taxonomies",
      "Real-time event streaming",
      "Offline-first architecture",
      "Compression & batching optimization",
    ],
  },
  {
    id: "session",
    icon: Play,
    title: "Session Intelligence",
    features: [
      "Pixel-perfect session replay",
      "DOM mutation tracking",
      "Network request capture",
      "Console log integration",
      "WebRTC live sessions",
      "Cross-device session stitching",
    ],
  },
  {
    id: "ux",
    icon: MousePointerClick,
    title: "UX Intelligence",
    features: [
      "Dynamic heatmaps by segment",
      "Rage click detection",
      "Dead click analysis",
      "Form analytics & abandonment",
      "Scroll depth tracking",
      "Attention mapping",
    ],
  },
  {
    id: "journey",
    icon: Route,
    title: "Journey Intelligence",
    features: [
      "Automated funnel discovery",
      "Drop-off point analysis",
      "A/B test correlation",
      "Attribution modeling",
      "Cohort comparison",
      "Predictive churn alerts",
    ],
  },
  {
    id: "product",
    icon: TrendingUp,
    title: "Product Intelligence",
    features: [
      "Feature adoption tracking",
      "Impact scoring",
      "User feedback correlation",
      "Release impact analysis",
      "Revenue attribution",
      "Product health scorecards",
    ],
  },
  {
    id: "observability",
    icon: Activity,
    title: "Observability Layer",
    features: [
      "Frontend error tracking",
      "Performance monitoring",
      "Core Web Vitals",
      "API latency correlation",
      "Resource timing analysis",
      "Real user monitoring (RUM)",
    ],
  },
];

export function FeatureCategories() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate tabs
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeCategory = categories[activeTab];

  return (
    <section className="section-padding relative overflow-hidden bg-muted/5">
      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Complete <span className="gradient-text">Feature Suite</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six intelligence layers working in harmony
          </p>
        </div>

        {/* Tab Navigation */}
        <div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300",
                activeTab === index
                  ? "bg-gradient-to-r from-azure to-aqua text-primary-foreground shadow-lg scale-105"
                  : "glass text-muted-foreground hover:text-foreground hover:scale-105"
              )}
            >
              <category.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.title}</span>
              
              {/* Active Shimmer */}
              {activeTab === index && (
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent animate-shimmer" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-azure to-aqua flex items-center justify-center">
                <activeCategory.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeCategory.title}</h3>
              </div>
            </div>

            <div className="grid gap-3">
              {activeCategory.features.map((feature, index) => (
                <div
                  key={feature}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl glass border border-border/50",
                    "hover:border-aqua/50 transition-all duration-300",
                    "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-aqua/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-aqua" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Preview */}
          <div className="relative">
            <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-azure/5 to-aqua/5" />
              
              {/* Progress Indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
                <div 
                  className="h-full bg-gradient-to-r from-azure to-aqua transition-all duration-300"
                  style={{ width: `${((activeTab + 1) / categories.length) * 100}%` }}
                />
              </div>

              {/* Feature Visualization */}
              <div className="relative z-10 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <activeCategory.icon className="w-24 h-24 mx-auto mb-6 text-aqua opacity-50" />
                  <h4 className="text-xl font-bold mb-2">{activeCategory.title}</h4>
                  <p className="text-muted-foreground">{activeCategory.features.length} capabilities included</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-azure/20 animate-float" />
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-aqua/20 animate-float-delayed" />
            </div>

            {/* Tab Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeTab === index
                      ? "w-8 bg-gradient-to-r from-azure to-aqua"
                      : "bg-muted hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
