import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Brain, 
  Shield, 
  BarChart3, 
  Zap,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface TourStep {
  title: string;
  description: string;
  icon: React.ElementType;
  highlight: string;
}

const tourSteps: TourStep[] = [
  {
    title: "Welcome to TRACEFLOW",
    description: "The world's first Digital Cognition Infrastructure. Unify all your digital experience data into one intelligent platform.",
    icon: Sparkles,
    highlight: "hero",
  },
  {
    title: "See It In Action",
    description: "Watch real session replays, AI analysis, heatmaps, and automatic ticket creation - all powered by PROXIMA AI.",
    icon: Play,
    highlight: "demo",
  },
  {
    title: "PROXIMA AI Engine",
    description: "Six specialized AI agents work together to analyze sessions, map journeys, find root causes, and auto-generate tickets.",
    icon: Brain,
    highlight: "proxima",
  },
  {
    title: "Enterprise-Grade Security",
    description: "Zero-PII ingestion, customer-managed keys, SOC2 compliance, and hybrid/air-gapped deployment options.",
    icon: Shield,
    highlight: "security",
  },
  {
    title: "Calculate Your ROI",
    description: "See how much you can save with TRACEFLOW. Input your current costs and get instant ROI projections.",
    icon: BarChart3,
    highlight: "roi",
  },
];

export function OnboardingTour() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  // Check if user has seen the tour
  useEffect(() => {
    const seen = localStorage.getItem("traceflow-tour-seen");
    if (!seen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setHasSeenTour(true);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleClose();
    }
  }, [currentStep]);

  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    localStorage.setItem("traceflow-tour-seen", "true");
    setHasSeenTour(true);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isVisible) return;
    
    switch (e.key) {
      case "Escape":
        handleClose();
        break;
      case "ArrowRight":
      case "Enter":
        handleNext();
        break;
      case "ArrowLeft":
        handlePrev();
        break;
    }
  }, [isVisible, handleNext, handlePrev, handleClose]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const restartTour = () => {
    setCurrentStep(0);
    setIsVisible(true);
  };

  if (!isVisible) {
    if (hasSeenTour) {
      return (
        <button
          onClick={restartTour}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:scale-110 transition-transform group"
          aria-label="Restart feature tour"
        >
          <Zap className="w-5 h-5 group-hover:animate-pulse" />
        </button>
      );
    }
    return null;
  }

  const step = tourSteps[currentStep];
  const StepIcon = step.icon;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg animate-scale-in">
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-r from-primary to-secondary p-6">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary-foreground/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/30">
                  <StepIcon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium text-primary-foreground/70 uppercase tracking-wider">
                    Step {currentStep + 1} of {tourSteps.length}
                  </p>
                  <h2 id="tour-title" className="text-xl font-bold text-primary-foreground">
                    {step.title}
                  </h2>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Close tour"
              >
                <X className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {step.description}
            </p>

            {/* Feature highlight visual */}
            <div className="mb-6 p-4 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <StepIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {step.highlight === "hero" && "Digital Experience Intelligence"}
                    {step.highlight === "demo" && "Live Session Replay"}
                    {step.highlight === "proxima" && "AI-Powered Analysis"}
                    {step.highlight === "security" && "Zero-Trust Architecture"}
                    {step.highlight === "roi" && "Measurable Impact"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Explore this feature in the section below
                  </p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{Math.round(((currentStep + 1) / tourSteps.length) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Step indicators */}
            <div className="flex justify-center gap-2 mb-6">
              {tourSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentStep 
                      ? "w-8 bg-primary" 
                      : index < currentStep 
                        ? "w-2 bg-primary/50" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-3">
              {currentStep > 0 ? (
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  onClick={handleClose}
                  className="flex-1 text-muted-foreground"
                >
                  Skip Tour
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                {currentStep === tourSteps.length - 1 ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Get Started
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>

            {/* Keyboard hint */}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Use <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">←</kbd> <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">→</kbd> or <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">Esc</kbd> to navigate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
