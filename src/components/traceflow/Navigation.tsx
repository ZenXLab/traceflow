import { useState, useEffect } from "react";
import { Menu, X, Crown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Why TRACEFLOW", href: "#why-traceflow", hasCrown: true },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const megaMenuItems = {
  Features: [
    { title: "Capture Engine", desc: "Multi-channel SDK ingestion", icon: "📡" },
    { title: "PROXIMA AI", desc: "Multi-agent intelligence", icon: "🧠" },
    { title: "Session Replay", desc: "Pixel-perfect reconstruction", icon: "🎬" },
    { title: "Journey Analytics", desc: "End-to-end visibility", icon: "🗺️" },
  ],
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-azure to-aqua flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <Crown className="absolute -top-2 -right-2 w-4 h-4 text-accent animate-bounce-subtle" />
          </div>
          <span className="text-xl font-bold gradient-text">TRACEFLOW</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.label === "Features" && setActiveDropdown("Features")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",
                  link.label === "Features" && "cursor-pointer"
                )}
              >
                {link.hasCrown && <Crown className="w-3.5 h-3.5 text-accent" />}
                {link.label}
                {link.label === "Features" && (
                  <ChevronDown className={cn(
                    "w-3.5 h-3.5 transition-transform",
                    activeDropdown === "Features" && "rotate-180"
                  )} />
                )}
              </a>
              
              {/* Mega Menu */}
              {link.label === "Features" && activeDropdown === "Features" && (
                <div className="absolute top-full left-0 mt-2 w-80 p-4 glass rounded-xl animate-fade-in-up">
                  <div className="grid gap-2">
                    {megaMenuItems.Features.map((item) => (
                      <a
                        key={item.title}
                        href="#features"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="font-medium text-foreground group-hover:text-aqua transition-colors">
                            {item.title}
                          </div>
                          <div className="text-sm text-muted-foreground">{item.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost-light" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Request Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu
              className={cn(
                "absolute inset-0 transition-all duration-300",
                isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )}
            />
            <X
              className={cn(
                "absolute inset-0 transition-all duration-300",
                isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-full bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-500 overflow-hidden",
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-wide py-6 px-4 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.hasCrown && <Crown className="w-4 h-4 text-accent" />}
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <Button variant="outline" size="lg" className="w-full">
              Sign In
            </Button>
            <Button variant="hero" size="lg" className="w-full">
              Request Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
