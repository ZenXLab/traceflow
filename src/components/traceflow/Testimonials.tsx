import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    content: "TRACEFLOW's multi-agent AI is unlike anything else in the market. It doesn't just show problems - it explains why they happen and what to do about them.",
    author: "Jennifer Martinez",
    role: "Chief Product Officer",
    company: "TechFlow Inc.",
    avatar: "JM",
    rating: 5,
  },
  {
    content: "The on-prem deployment option was a game-changer for our compliance requirements. We got enterprise-grade analytics without compromising on security.",
    author: "David Kim",
    role: "CISO",
    company: "SecureBank Global",
    avatar: "DK",
    rating: 5,
  },
  {
    content: "We reduced our MTTR by 70% after implementing TRACEFLOW. The experience-to-code correlation saves our developers hours every week.",
    author: "Sarah Chen",
    role: "VP Engineering",
    company: "CloudScale",
    avatar: "SC",
    rating: 5,
  },
  {
    content: "The ROI was immediate. Within the first month, we identified and fixed issues that were costing us $200K in lost conversions.",
    author: "Michael Thompson",
    role: "Head of Growth",
    company: "ShopDirect",
    avatar: "MT",
    rating: 5,
  },
  {
    content: "Voice + session fusion is revolutionary. We can finally connect call center interactions with what users were experiencing in the app.",
    author: "Lisa Rodriguez",
    role: "Customer Experience Director",
    company: "TeleCom Plus",
    avatar: "LR",
    rating: 5,
  },
  {
    content: "TRACEFLOW's causality engine showed us root causes we'd been hunting for months. It's not correlation - it's actual causation.",
    author: "Robert Anderson",
    role: "Data Science Lead",
    company: "AnalyticsPro",
    avatar: "RA",
    rating: 5,
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding relative overflow-hidden bg-muted/5">
      <div className="container-wide relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
          </div>

          {/* Navigation */}
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

        {/* Testimonials Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "flex-shrink-0 w-[320px] md:w-[380px] p-6 rounded-2xl glass border border-border/50",
                "hover:border-aqua/50 transition-all duration-300 snap-start",
                "card-hover"
              )}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-azure to-aqua flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-aqua">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
