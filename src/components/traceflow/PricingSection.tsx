import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check, Shield, Globe, Key, Zap, Play, Users, Crown } from "lucide-react";
import { ContactFormModal } from "./ContactFormModal";

const addOns = [
  { id: "proxima", label: "PROXIMA AI", icon: Zap, price: "+$500/mo" },
  { id: "runner", label: "On-Prem Runner", icon: Shield, price: "+$1,000/mo" },
  { id: "sso", label: "SSO/SAML", icon: Key, price: "+$200/mo" },
  { id: "dashboards", label: "Custom Dashboards", icon: Globe, price: "+$300/mo" },
  { id: "webrtc", label: "WebRTC Live", icon: Play, price: "+$400/mo" },
  { id: "sla", label: "Enterprise SLA", icon: Users, price: "+$800/mo" },
];

const trustIcons = [
  { icon: Shield, label: "SOC2" },
  { icon: Globe, label: "ISO 27001" },
  { icon: Key, label: "Data Residency" },
  { icon: Users, label: "Finance-Ready" },
];

const sessionTiers = [
  { sessions: 100000, label: "100K", price: 499 },
  { sessions: 250000, label: "250K", price: 999 },
  { sessions: 500000, label: "500K", price: 1799 },
  { sessions: 1000000, label: "1M", price: 2999 },
  { sessions: 2500000, label: "2.5M", price: 5999 },
  { sessions: 5000000, label: "5M", price: 9999 },
  { sessions: 10000000, label: "10M+", price: null },
];

export function PricingSection() {
  const [sliderValue, setSliderValue] = useState([2]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const currentTier = sessionTiers[sliderValue[0]];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-azure/5 to-background" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-orange/30 text-orange text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            Transparent Pricing
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Enterprise <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scale your digital intelligence with predictable costs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Pricing Card */}
          <div className="glass-strong rounded-3xl p-8 lg:p-12">
            {/* Sessions Slider */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Monthly Sessions</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold gradient-text">
                    {currentTier.price ? `$${currentTier.price.toLocaleString()}` : "Custom"}
                  </div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </div>

              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={sessionTiers.length - 1}
                step={1}
                className="mb-4"
              />

              <div className="flex justify-between text-sm text-muted-foreground">
                {sessionTiers.map((tier, index) => (
                  <span
                    key={tier.label}
                    className={cn(
                      "transition-colors",
                      sliderValue[0] === index && "text-aqua font-semibold"
                    )}
                  >
                    {tier.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Included Features */}
            <div className="mb-12">
              <h4 className="font-bold mb-4">Included in all plans:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Unlimited team members",
                  "Session replay",
                  "Heatmaps & analytics",
                  "Journey funnels",
                  "Error tracking",
                  "API access",
                  "Slack/Teams integration",
                  "30-day data retention",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-aqua/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-aqua" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-Ons */}
            <div className="mb-12">
              <h4 className="font-bold mb-4">Optional Add-Ons:</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {addOns.map((addOn) => (
                  <button
                    key={addOn.id}
                    onClick={() => toggleAddOn(addOn.id)}
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left group",
                      "hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]",
                      selectedAddOns.includes(addOn.id)
                        ? "border-aqua bg-aqua/10 shadow-[0_4px_20px_hsl(var(--aqua)/0.2)]"
                        : "border-border/50 hover:border-border hover:shadow-lg"
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                        selectedAddOns.includes(addOn.id)
                          ? "bg-aqua text-secondary-foreground"
                          : "bg-muted"
                      )}
                    >
                      <addOn.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{addOn.label}</div>
                      <div className="text-sm text-muted-foreground">{addOn.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Icons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {trustIcons.map((trust) => (
                <div
                  key={trust.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 text-muted-foreground"
                >
                  <trust.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{trust.label}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <ContactFormModal
                defaultInquiryType="enterprise"
                trigger={
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Request Enterprise Quote
                  </Button>
                }
              />
              <p className="text-sm text-muted-foreground mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
