import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, TrendingUp, Clock, DollarSign, Star } from "lucide-react";

const caseStudies = [
  {
    company: "ShopMax India",
    industry: "E-Commerce",
    logo: "SM",
    challenge: "42% cart abandonment rate on mobile, unclear friction points in checkout flow",
    solution: "PROXIMA AI identified 7 rage-click hotspots, recommended UX changes",
    results: [
      { icon: TrendingUp, value: "+28%", label: "Conversion Rate" },
      { icon: DollarSign, value: "$2.4M", label: "Revenue Recovered" },
      { icon: Clock, value: "3 days", label: "Time to Value" },
    ],
    testimonial: "TRACEFLOW showed us exactly where customers were struggling. The AI recommendations were actionable from day one.",
    author: "Priya Sharma",
    role: "Head of Digital",
    rating: 5,
  },
  {
    company: "PaySecure Bank",
    industry: "BFSI",
    logo: "PS",
    challenge: "High support call volume for failed transactions, no visibility into user sessions",
    solution: "Deployed on-prem with zero-PII capture, correlated sessions with support tickets",
    results: [
      { icon: TrendingUp, value: "-45%", label: "Support Calls" },
      { icon: DollarSign, value: "$890K", label: "Annual Savings" },
      { icon: Clock, value: "2 weeks", label: "Implementation" },
    ],
    testimonial: "The air-gapped deployment was crucial for our compliance team. No other vendor could match it.",
    author: "Michael Chen",
    role: "CTO",
    rating: 5,
  },
  {
    company: "MediCare Plus",
    industry: "Insurance",
    logo: "MC",
    challenge: "Policy purchase funnel had 67% drop-off, couldn't identify why",
    solution: "Journey Causality Engine revealed form validation issues and confusing pricing display",
    results: [
      { icon: TrendingUp, value: "+52%", label: "Funnel Completion" },
      { icon: DollarSign, value: "$5.1M", label: "New Policies" },
      { icon: Clock, value: "1 week", label: "First Insights" },
    ],
    testimonial: "The causality engine didn't just show us correlations - it proved exactly what was causing the drops.",
    author: "Sarah Williams",
    role: "VP Product",
    rating: 5,
  },
  {
    company: "CloudOps Platform",
    industry: "SaaS",
    logo: "CO",
    challenge: "New feature adoption below 10%, churn increasing without clear indicators",
    solution: "Feature usage analytics with predictive churn alerts and experience-to-code correlation",
    results: [
      { icon: TrendingUp, value: "+180%", label: "Feature Adoption" },
      { icon: DollarSign, value: "-32%", label: "Churn Rate" },
      { icon: Clock, value: "24 hours", label: "Issue Detection" },
    ],
    testimonial: "We can now see exactly which code changes impact user experience. It's changed how we ship features.",
    author: "Alex Rivera",
    role: "Engineering Lead",
    rating: 5,
  },
];

export function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-aqua/30 text-aqua text-sm font-medium mb-6">
              Success Stories
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Customer <span className="gradient-text">Case Studies</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center hover:border-aqua/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center hover:border-aqua/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        >
          {caseStudies.map((study, index) => (
            <div
              key={study.company}
              className={cn(
                "flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-2xl glass border border-border/50",
                "hover:border-aqua/50 transition-all duration-300 snap-start",
                "card-hover"
              )}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-azure to-aqua flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {study.logo}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{study.company}</h3>
                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-semibold text-destructive mb-1">CHALLENGE</div>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-aqua mb-1">SOLUTION</div>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {study.results.map((result) => (
                  <div
                    key={result.label}
                    className="text-center p-3 rounded-xl bg-muted/30"
                  >
                    <result.icon className="w-4 h-4 mx-auto mb-1 text-aqua" />
                    <div className="text-lg font-bold gradient-text">{result.value}</div>
                    <div className="text-xs text-muted-foreground">{result.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="p-4 rounded-xl bg-muted/20 border border-border/30">
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: study.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">"{study.testimonial}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-azure to-aqua flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {study.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{study.author}</div>
                    <div className="text-xs text-muted-foreground">{study.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
