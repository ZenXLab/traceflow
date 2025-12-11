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
  target: string;
  title: string;
  description: string;
  icon: React.ElementType;
  position: "top" | "bottom" | "left" | "right" | "center";
}

const tourSteps: TourStep[] = [
  {
    target: "#hero-title",
    title: "Welcome to TRACEFLOW",
    description: "The world's first Digital Cognition Infrastructure. Unify all your digital experience data into one intelligent platform.",
    icon: Sparkles,
    position: "bottom",
  },
  {
    target: "#demo",
    title: "See It In Action",
    description: "Watch real session replays, AI analysis, heatmaps, and automatic ticket creation - all powered by PROXIMA AI.",
    icon: Play,
    position: "top",
  },
  {
    target: "#proxima",
    title: "PROXIMA AI Engine",
    description: "Six specialized AI agents work together to analyze sessions, map journeys, find root causes, and auto-generate tickets.",
    icon: Brain,
    position: "top",
  },
  {
    target: "#security",
    title: "Enterprise-Grade Security",
    description: "Zero-PII ingestion, customer-managed keys, SOC2 compliance, and hybrid/air-gapped deployment options.",
    icon: Shield,
    position: "top",
  },
  {
    target: "#roi-calculator",
    title: "Calculate Your ROI",
    description: "See how much you can save with TRACEFLOW. Input your current costs and get instant ROI projections.",
    icon: BarChart3,
    position: "top",
  },
];

export function OnboardingTour() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  // Check if user has seen the tour
  useEffect(() => {
    const seen = localStorage.getItem("traceflow-tour-seen");
    if (!seen) {
      // Delay showing tour to let page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHasSeenTour(true);
    }
  }, []);

  // Update target position
  useEffect(() => {
    if (!isVisible) return;

    const updateTargetPosition = () => {
      const step = tourSteps[currentStep];
      const element = document.querySelector(step.target);
      if (element) {
        setTargetRect(element.getBoundingClientRect());
        // Scroll element into view
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    updateTargetPosition();
    window.addEventListener("resize", updateTargetPosition);
    window.addEventListener("scroll", updateTargetPosition);

    return () => {
      window.removeEventListener("resize", updateTargetPosition);
      window.removeEventListener("scroll", updateTargetPosition);
    };
  }, [isVisible, currentStep]);

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
    // Show restart button if tour was seen
    if (hasSeenTour) {
      return (
        <button
          onClick={restartTour}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-azure to-aqua text-primary-foreground shadow-lg hover:scale-110 transition-transform"
          aria-label="Restart feature tour"
        >
          <Zap className="w-5 h-5" />
        </button>
      );
    }
    return null;
  }

  const step = tourSteps[currentStep];
  const StepIcon = step.icon;

  // Calculate tooltip position
  const getTooltipStyle = (): React.CSSProperties => {
    if (!targetRect || step.position === "center") {
      return {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
    }

    const padding = 20;
    const tooltipWidth = 360;
    const tooltipHeight = 200;

    switch (step.position) {
      case "bottom":
        return {
          top: targetRect.bottom + padding,
          left: Math.max(padding, Math.min(targetRect.left + targetRect.width / 2 - tooltipWidth / 2, window.innerWidth - tooltipWidth - padding)),
        };
      case "top":
        return {
          top: targetRect.top - tooltipHeight - padding,
          left: Math.max(padding, Math.min(targetRect.left + targetRect.width / 2 - tooltipWidth / 2, window.innerWidth - tooltipWidth - padding)),
        };
      case "left":
        return {
          top: targetRect.top + targetRect.height / 2 - tooltipHeight / 2,
          left: targetRect.left - tooltipWidth - padding,
        };
      case "right":
        return {
          top: targetRect.top + targetRect.height / 2 - tooltipHeight / 2,
          left: targetRect.right + padding,
        };
      default:
        return {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
    }
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Highlight spotlight */}
      {targetRect && (
        <div
          className="fixed z-50 pointer-events-none transition-all duration-500 ease-out"
          style={{
            top: targetRect.top - 8,
            left: targetRect.left - 8,
            width: targetRect.width + 16,
            height: targetRect.height + 16,
            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.75)",
            borderRadius: "12px",
          }}
        >
          {/* Animated border */}
          <div className="absolute inset-0 rounded-xl border-2 border-aqua animate-pulse" />
          <div className="absolute inset-0 rounded-xl bg-aqua/10" />
        </div>
      )}

      {/* Tooltip */}
      <div
        className="fixed z-[60] w-[360px] animate-scale-in"
        style={getTooltipStyle()}
        role="dialog"
        aria-labelledby="tour-title"
        aria-describedby="tour-description"
      >
        <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-aqua/30 shadow-2xl shadow-aqua/10 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-azure to-aqua p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <StepIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 id="tour-title" className="font-bold text-primary-foreground">{step.title}</h3>
                <p className="text-xs text-primary-foreground/70">Step {currentStep + 1} of {tourSteps.length}</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              aria-label="Close tour"
            >
              <X className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="p-5">
            <p id="tour-description" className="text-sm text-muted-foreground leading-relaxed mb-4">
              {step.description}
            </p>

            {/* Progress dots */}
            <div className="flex justify-center gap-1.5 mb-4">
              {tourSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentStep 
                      ? "w-6 bg-aqua" 
                      : index < currentStep 
                        ? "bg-aqua/50" 
                        : "bg-muted-foreground/30"
                  )}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              <Button
                variant="hero"
                onClick={handleNext}
                className="flex-1"
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

            {/* Skip link */}
            <button
              onClick={handleClose}
              className="w-full mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Skip tour (press Esc)
            </button>
          </div>
        </div>

        {/* Arrow pointer */}
        {targetRect && step.position !== "center" && (
          <div
            className={cn(
              "absolute w-4 h-4 bg-card border-aqua/30 transform rotate-45",
              step.position === "bottom" && "-top-2 left-1/2 -translate-x-1/2 border-t border-l",
              step.position === "top" && "-bottom-2 left-1/2 -translate-x-1/2 border-b border-r",
              step.position === "left" && "-right-2 top-1/2 -translate-y-1/2 border-t border-r",
              step.position === "right" && "-left-2 top-1/2 -translate-y-1/2 border-b border-l"
            )}
          />
        )}
      </div>
    </>
  );
}
