import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Users, 
  Wrench,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

// Animated number component
function AnimatedNumber({ value, prefix = "", suffix = "", duration = 1500 }: { 
  value: number; 
  prefix?: string; 
  suffix?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const startTime = useRef<number | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    startTime.current = null;
    
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.round(value * easeOutQuart));
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration]);

  return (
    <span className="tabular-nums">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export function EnhancedROICalculator() {
  const [sessions, setSessions] = useState([500000]);
  const [currentCost, setCurrentCost] = useState([8000]);
  const [ticketReduction, setTicketReduction] = useState([45]);
  const [showConfetti, setShowConfetti] = useState(false);

  // Calculate TRACEFLOW pricing tiers
  const getTraceflowCost = (sessionCount: number) => {
    if (sessionCount <= 100000) return 499;
    if (sessionCount <= 250000) return 999;
    if (sessionCount <= 500000) return 1799;
    if (sessionCount <= 1000000) return 2999;
    if (sessionCount <= 2500000) return 5999;
    return 9999;
  };

  const traceflowCost = getTraceflowCost(sessions[0]);
  
  // Calculate savings
  const toolSavings = Math.max(0, currentCost[0] - traceflowCost);
  const annualToolSavings = toolSavings * 12;
  
  // Support cost savings (assume $50 per ticket, 1000 tickets/month at baseline)
  const baseTickets = Math.round(sessions[0] / 1000);
  const ticketsSaved = Math.round(baseTickets * (ticketReduction[0] / 100));
  const ticketCostPerMonth = ticketsSaved * 50;
  const annualSupportSavings = ticketCostPerMonth * 12;
  
  // Engineering time saved (hours per week * 52 weeks * $150/hr)
  const engineeringHoursSaved = Math.round((ticketReduction[0] / 100) * 20);
  const annualEngineeringSavings = engineeringHoursSaved * 52 * 150;
  
  // Total ROI
  const totalAnnualSavings = annualToolSavings + annualSupportSavings + annualEngineeringSavings;
  const annualTraceflowCost = traceflowCost * 12;
  const roiPercentage = Math.round((totalAnnualSavings / annualTraceflowCost) * 100);

  // Show confetti when ROI is high
  useEffect(() => {
    if (roiPercentage > 300) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [roiPercentage]);

  const formatSessions = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    return `${(count / 1000).toFixed(0)}K`;
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-azure/5 to-background" />
      
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-[confetti_3s_ease-out_forwards]"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10px",
                backgroundColor: ["hsl(218 88% 50%)", "hsl(186 100% 50%)", "hsl(28 100% 50%)"][i % 3],
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-orange/30 text-orange text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Calculate Your <span className="gradient-text-orange">Return on Investment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the real business impact of switching to TRACEFLOW
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs Panel */}
            <div className="glass-strong rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-azure to-aqua flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Your Current Setup</h3>
                  <p className="text-sm text-muted-foreground">Adjust to match your usage</p>
                </div>
              </div>

              {/* Monthly Sessions */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <label className="font-medium">Monthly Sessions</label>
                  </div>
                  <span className="text-2xl font-bold gradient-text">{formatSessions(sessions[0])}</span>
                </div>
                <Slider
                  value={sessions}
                  onValueChange={setSessions}
                  min={10000}
                  max={5000000}
                  step={10000}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10K</span>
                  <span>1M</span>
                  <span>5M+</span>
                </div>
              </div>

              {/* Current Tool Cost */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <label className="font-medium">Current Monthly Cost</label>
                  </div>
                  <span className="text-2xl font-bold text-orange">${currentCost[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={currentCost}
                  onValueChange={setCurrentCost}
                  min={0}
                  max={50000}
                  step={500}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$0</span>
                  <span>$25K</span>
                  <span>$50K</span>
                </div>
              </div>

              {/* Expected Ticket Reduction */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-muted-foreground" />
                    <label className="font-medium">Expected Support Reduction</label>
                  </div>
                  <span className="text-2xl font-bold text-aqua">{ticketReduction[0]}%</span>
                </div>
                <Slider
                  value={ticketReduction}
                  onValueChange={setTicketReduction}
                  min={10}
                  max={80}
                  step={5}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10%</span>
                  <span>45%</span>
                  <span>80%</span>
                </div>
              </div>

              {/* TRACEFLOW Cost Display */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-azure/10 to-aqua/10 border border-azure/20">
                <div className="flex items-center justify-between">
                  <span className="font-medium">TRACEFLOW Monthly Cost</span>
                  <span className="text-2xl font-bold">${traceflowCost.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="glass-strong rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aqua to-orange flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Your Annual Savings</h3>
                  <p className="text-sm text-muted-foreground">Based on industry benchmarks</p>
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="space-y-4 mb-8">
                {/* Tool Savings */}
                <div className="p-4 rounded-xl bg-muted/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-azure" />
                    <div>
                      <div className="font-medium">Tool Cost Savings</div>
                      <div className="text-xs text-muted-foreground">vs current solution</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-azure">
                    <AnimatedNumber value={annualToolSavings} prefix="$" />
                  </div>
                </div>

                {/* Support Savings */}
                <div className="p-4 rounded-xl bg-muted/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-aqua" />
                    <div>
                      <div className="font-medium">Support Cost Savings</div>
                      <div className="text-xs text-muted-foreground">{ticketsSaved.toLocaleString()} tickets/mo saved</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-aqua">
                    <AnimatedNumber value={annualSupportSavings} prefix="$" />
                  </div>
                </div>

                {/* Engineering Savings */}
                <div className="p-4 rounded-xl bg-muted/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange" />
                    <div>
                      <div className="font-medium">Engineering Time Saved</div>
                      <div className="text-xs text-muted-foreground">{engineeringHoursSaved} hrs/week reclaimed</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-orange">
                    <AnimatedNumber value={annualEngineeringSavings} prefix="$" />
                  </div>
                </div>
              </div>

              {/* Total & ROI */}
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-gradient-to-r from-azure/20 to-aqua/20 border border-aqua/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Total Annual Savings</span>
                    <div className="text-3xl font-bold gradient-text">
                      <AnimatedNumber value={totalAnnualSavings} prefix="$" />
                    </div>
                  </div>
                  
                  {/* Comparison bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                      <span>TRACEFLOW Cost</span>
                      <span>Total Savings</span>
                    </div>
                    <div className="flex gap-2 h-4">
                      <div 
                        className="bg-muted rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(30, (annualTraceflowCost / totalAnnualSavings) * 100)}%` }}
                      />
                      <div 
                        className="bg-gradient-to-r from-azure to-aqua rounded-full transition-all duration-500 flex-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-r from-orange/20 to-orange/10 border border-orange/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-orange" />
                      <span className="font-bold text-lg">Return on Investment</span>
                    </div>
                    <div className="text-4xl font-bold text-orange">
                      <AnimatedNumber value={roiPercentage} suffix="%" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-4">
                <Button variant="hero" size="xl" className="w-full group">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-aqua" />
                    14-day free trial
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-aqua" />
                    No credit card
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
