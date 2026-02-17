import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Crown, ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azure/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aqua/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="relative">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-azure to-aqua flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <Crown className="absolute -top-2 -right-2 w-4 h-4 text-accent animate-bounce" />
          </div>
          <span className="text-2xl font-bold gradient-text uppercase tracking-wide">TRACEFLOW</span>
        </div>

        {/* 404 Number */}
        <div className="relative mb-6">
          <h1 className="text-[120px] sm:text-[160px] font-black leading-none gradient-text opacity-90">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-azure/30 rounded-full animate-spin" style={{ animationDuration: "8s" }} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-3">Signal Lost</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The route <code className="px-2 py-1 rounded bg-muted text-aqua text-sm">{location.pathname}</code> doesn't exist in our pipeline. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="hero" size="lg" asChild>
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          TRACEFLOW by OriginX Labs Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
