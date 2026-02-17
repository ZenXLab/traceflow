import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import AgentProfiles from "./pages/AgentProfiles";
import About from "./pages/About";
import CaptureFeatures from "./pages/features/CaptureFeatures";
import IntelligenceFeatures from "./pages/features/IntelligenceFeatures";
import SecurityFeatures from "./pages/features/SecurityFeatures";
import EnterpriseFeatures from "./pages/features/EnterpriseFeatures";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/agents" element={<AgentProfiles />} />
            <Route path="/about" element={<About />} />
            <Route path="/features/capture" element={<CaptureFeatures />} />
            <Route path="/features/intelligence" element={<IntelligenceFeatures />} />
            <Route path="/features/security" element={<SecurityFeatures />} />
            <Route path="/features/enterprise" element={<EnterpriseFeatures />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
