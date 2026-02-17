import { useState, useEffect, useRef } from "react";
import { Menu, X, Crown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TraceflowMegaMenu } from "./TraceflowMegaMenu";
import { ThemeToggle } from "./ThemeToggle";
import { ContactFormModal } from "./ContactFormModal";

const navLinks = [
  { label: "Features", href: "#features", hasMegaMenu: true },
  { label: "Why TRACEFLOW", href: "#why-traceflow", hasCrown: true },
  { label: "Solutions", href: "#solutions" },
  { label: "PROXIMA AI", href: "#proxima" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function EnhancedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-2 bg-background/90 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-azure/5"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <div className={cn(
              "w-10 h-10 rounded-lg bg-gradient-to-br from-azure to-aqua flex items-center justify-center transition-all duration-300",
              "group-hover:shadow-[0_0_20px_hsl(var(--azure)/0.5)]"
            )}>
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <Crown className="absolute -top-2 -right-2 w-4 h-4 text-accent animate-bounce-subtle" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold gradient-text leading-none uppercase tracking-wide">TRACEFLOW</span>
            <span className="text-[10px] text-muted-foreground leading-none uppercase tracking-wider">BY ORIGINX LABS</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasMegaMenu && handleMegaMenuEnter()}
              onMouseLeave={() => link.hasMegaMenu && handleMegaMenuLeave()}
            >
              <a
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-1.5 rounded-lg",
                  "hover:bg-muted/50",
                  link.hasMegaMenu && "cursor-pointer"
                )}
              >
                {link.hasCrown && <Crown className="w-3.5 h-3.5 text-accent" />}
                {link.label}
                {link.hasMegaMenu && (
                  <ChevronDown className={cn(
                    "w-3.5 h-3.5 transition-transform duration-300",
                    isMegaMenuOpen && "rotate-180"
                  )} />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Mega Menu */}
        <TraceflowMegaMenu 
          isOpen={isMegaMenuOpen} 
          onClose={() => setIsMegaMenuOpen(false)} 
        />

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost-light" size="sm" className="hover:scale-[1.02] active:scale-95">
            Sign In
          </Button>
          <ContactFormModal
            defaultInquiryType="demo"
            trigger={
              <Button variant="hero" size="sm" className="relative overflow-hidden group">
                <span className="relative z-10">Request Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/30 to-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
              </Button>
            }
          />
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
                isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
              )}
            />
            <X
              className={cn(
                "absolute inset-0 transition-all duration-300",
                isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-full bg-background/98 backdrop-blur-2xl border-b border-border transition-all duration-500 overflow-hidden",
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-wide py-6 px-4 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-lg font-medium text-muted-foreground",
                "hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-300",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.hasCrown && <Crown className="w-4 h-4 text-accent" />}
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
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
