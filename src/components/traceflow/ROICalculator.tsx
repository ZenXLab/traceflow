import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calculator, DollarSign, TrendingUp, Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export function ROICalculator() {
  const [sessions, setSessions] = useState([500000]);
  const [currentCost, setCurrentCost] = useState([5000]);
  const [ticketReduction, setTicketReduction] = useState([30]);

  // Calculate ROI metrics
  const traceflowCost = sessions[0] <= 100000 ? 499 : sessions[0] <= 500000 ? 1799 : sessions[0] <= 1000000 ? 2999 : 5999;
  const savings = currentCost[0] - traceflowCost;
  const ticketSavings = (ticketReduction[0] / 100) * (currentCost[0] * 0.5); // Assume 50% of costs are support-related
  const totalSavings = Math.max(0, savings + ticketSavings);
  const roi = currentCost[0] > 0 ? ((totalSavings / traceflowCost) * 100).toFixed(0) : 0;

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange/5 to-background" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-orange/30 text-orange text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Calculate Your <span className="gradient-text-orange">Savings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much you could save by switching to TRACEFLOW
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-8">Your Current Setup</h3>

              {/* Monthly Sessions */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Monthly Sessions</label>
                  <span className="text-aqua font-bold">{(sessions[0] / 1000).toFixed(0)}K</span>
                </div>
                <Slider
                  value={sessions}
                  onValueChange={setSessions}
                  min={100000}
                  max={5000000}
                  step={100000}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>100K</span>
                  <span>5M</span>
                </div>
              </div>

              {/* Current Tool Cost */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Current Monthly Cost</label>
                  <span className="text-aqua font-bold">${currentCost[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={currentCost}
                  onValueChange={setCurrentCost}
                  min={1000}
                  max={20000}
                  step={500}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>$1,000</span>
                  <span>$20,000</span>
                </div>
              </div>

              {/* Expected Ticket Reduction */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium">Expected Support Reduction</label>
                  <span className="text-aqua font-bold">{ticketReduction[0]}%</span>
                </div>
                <Slider
                  value={ticketReduction}
                  onValueChange={setTicketReduction}
                  min={10}
                  max={70}
                  step={5}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>10%</span>
                  <span>70%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-8">Your Potential Savings</h3>

              <div className="space-y-6">
                {/* TRACEFLOW Cost */}
                <div className="p-4 rounded-xl bg-muted/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-azure to-aqua flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">TRACEFLOW Cost</div>
                        <div className="text-sm text-muted-foreground">Monthly</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">${traceflowCost.toLocaleString()}</div>
                  </div>
                </div>

                {/* Total Savings */}
                <div className="p-4 rounded-xl bg-aqua/10 border border-aqua/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-aqua flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">Monthly Savings</div>
                        <div className="text-sm text-muted-foreground">Tools + Support</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-aqua">
                      ${Math.round(totalSavings).toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className="p-4 rounded-xl bg-orange/10 border border-orange/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <Clock className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">ROI</div>
                        <div className="text-sm text-muted-foreground">Return on Investment</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange">{roi}%</div>
                  </div>
                </div>

                {/* Annual Projection */}
                <div className="text-center pt-4 border-t border-border">
                  <div className="text-muted-foreground mb-2">Annual Savings</div>
                  <div className="text-4xl font-bold gradient-text">
                    ${Math.round(totalSavings * 12).toLocaleString()}
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full mt-8">
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
