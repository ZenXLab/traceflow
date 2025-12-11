import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { 
  Play, 
  BarChart3, 
  Brain, 
  Flame, 
  Ticket, 
  MousePointer, 
  Pause,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Activity,
  Eye
} from "lucide-react";

const tabs = [
  { id: "replay", label: "Session Replay", icon: Play },
  { id: "ai", label: "AI Analysis", icon: Brain },
  { id: "heatmaps", label: "UX Heatmaps", icon: Flame },
  { id: "ticketing", label: "Auto-Ticketing", icon: Ticket },
];

const stats = [
  { value: "1.2B", label: "Events Processed", icon: Activity },
  { value: "99.9%", label: "Uptime", icon: CheckCircle },
  { value: "23ms", label: "Latency", icon: Zap },
];

// Simulated user journey events
const journeyEvents = [
  { time: 0, type: "pageview", label: "Landing Page", x: 15, y: 25 },
  { time: 2, type: "scroll", label: "Scroll Down", x: 50, y: 45 },
  { time: 4, type: "click", label: "View Products", x: 30, y: 35 },
  { time: 6, type: "hover", label: "Product Card", x: 45, y: 50 },
  { time: 8, type: "click", label: "Add to Cart", x: 55, y: 55 },
  { time: 10, type: "click", label: "Checkout", x: 80, y: 20 },
  { time: 12, type: "input", label: "Email Input", x: 40, y: 40 },
  { time: 14, type: "input", label: "Card Number", x: 40, y: 55 },
  { time: 16, type: "error", label: "Validation Error", x: 40, y: 55 },
  { time: 18, type: "rage", label: "Rage Click!", x: 60, y: 70 },
  { time: 20, type: "click", label: "Retry Submit", x: 60, y: 70 },
  { time: 22, type: "success", label: "Order Complete", x: 50, y: 50 },
];

// AI insights that appear during replay
const aiInsights = [
  { time: 4, message: "User engaged with product catalog", type: "info" },
  { time: 10, message: "High intent checkout detected", type: "positive" },
  { time: 16, message: "Form validation friction point", type: "warning" },
  { time: 18, message: "⚠️ Rage click detected - UX issue", type: "critical" },
  { time: 22, message: "✓ Conversion successful despite friction", type: "success" },
];

// Heatmap data points
const heatmapPoints = [
  { x: 25, y: 20, intensity: 0.9 },
  { x: 45, y: 35, intensity: 0.7 },
  { x: 55, y: 55, intensity: 0.95 },
  { x: 60, y: 70, intensity: 1.0 },
  { x: 80, y: 20, intensity: 0.6 },
  { x: 40, y: 50, intensity: 0.5 },
  { x: 30, y: 65, intensity: 0.4 },
];

export function VideoDemoSection() {
  const [activeTab, setActiveTab] = useState("replay");
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 15, y: 25 });
  const [currentInsight, setCurrentInsight] = useState<typeof aiInsights[0] | null>(null);
  const [showClickRipple, setShowClickRipple] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ events: 0, sessions: 0, errors: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Main timeline animation
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTime(prev => {
        const next = (prev + 0.1) % 24;
        return next;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Update cursor and events based on time
  useEffect(() => {
    const eventIndex = journeyEvents.findIndex((e, i) => {
      const nextEvent = journeyEvents[i + 1];
      return currentTime >= e.time && (!nextEvent || currentTime < nextEvent.time);
    });

    if (eventIndex !== -1 && eventIndex !== currentEventIndex) {
      setCurrentEventIndex(eventIndex);
      const event = journeyEvents[eventIndex];
      setCursorPos({ x: event.x, y: event.y });
      
      if (event.type === "click" || event.type === "rage") {
        setShowClickRipple(true);
        setTimeout(() => setShowClickRipple(false), 400);
      }
    }

    // Check for AI insights
    const insight = aiInsights.find(i => 
      currentTime >= i.time && currentTime < i.time + 3
    );
    setCurrentInsight(insight || null);
  }, [currentTime, currentEventIndex]);

  // Animate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        events: Math.min(prev.events + Math.floor(Math.random() * 50), 12847),
        sessions: Math.min(prev.sessions + Math.floor(Math.random() * 3), 847),
        errors: Math.min(prev.errors + (Math.random() > 0.8 ? 1 : 0), 23)
      }));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Draw heatmap on canvas
  useEffect(() => {
    if (activeTab !== "heatmaps" || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    const drawHeatmap = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      heatmapPoints.forEach(point => {
        const x = (point.x / 100) * canvas.offsetWidth;
        const y = (point.y / 100) * canvas.offsetHeight;
        const radius = 30 + point.intensity * 40;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        
        if (point.intensity > 0.8) {
          gradient.addColorStop(0, `rgba(255, 138, 0, ${point.intensity * 0.8})`);
          gradient.addColorStop(0.5, `rgba(239, 68, 68, ${point.intensity * 0.5})`);
          gradient.addColorStop(1, "transparent");
        } else {
          gradient.addColorStop(0, `rgba(0, 194, 216, ${point.intensity * 0.6})`);
          gradient.addColorStop(0.5, `rgba(11, 61, 145, ${point.intensity * 0.3})`);
          gradient.addColorStop(1, "transparent");
        }
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    drawHeatmap();
  }, [activeTab]);

  const currentEvent = journeyEvents[currentEventIndex];

  const getEventColor = (type: string) => {
    switch (type) {
      case "click": return "bg-aqua";
      case "rage": case "error": return "bg-destructive";
      case "success": return "bg-green-500";
      case "input": return "bg-azure";
      default: return "bg-muted-foreground";
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "replay":
        return (
          <>
            {/* Simulated Website Interface */}
            <div className="absolute inset-0 p-2">
              {/* Fake browser header */}
              <div className="h-8 bg-muted/40 rounded-t-lg flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-orange/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-aqua/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-4 bg-background/50 rounded-full px-2 flex items-center">
                    <span className="text-[8px] text-muted-foreground">https://shopmax.io/checkout</span>
                  </div>
                </div>
              </div>
              
              {/* Fake website content */}
              <div className="h-[calc(100%-32px)] bg-gradient-to-br from-muted/20 to-background/50 rounded-b-lg relative overflow-hidden">
                {/* Navigation */}
                <div className="h-6 bg-muted/30 flex items-center px-3 gap-4">
                  <div className="w-12 h-3 bg-azure/30 rounded" />
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-2 bg-muted/50 rounded hidden sm:block" />
                  ))}
                  <div className="ml-auto w-6 h-6 bg-orange/30 rounded-full flex items-center justify-center">
                    <span className="text-[8px]">🛒</span>
                  </div>
                </div>
                
                {/* Main content grid */}
                <div className="p-3 grid grid-cols-12 gap-2 h-[calc(100%-24px)]">
                  {/* Left sidebar */}
                  <div className="col-span-3 space-y-2 hidden lg:block">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-12 bg-muted/20 rounded-lg p-2">
                        <div className="h-2 w-3/4 bg-muted/40 rounded mb-1" />
                        <div className="h-1.5 w-1/2 bg-muted/30 rounded" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Main content */}
                  <div className="col-span-12 lg:col-span-6 space-y-2">
                    {/* Product cards */}
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="aspect-square bg-muted/30 rounded-lg p-1.5 flex flex-col">
                          <div className="flex-1 bg-muted/40 rounded mb-1" />
                          <div className="h-2 bg-muted/50 rounded w-3/4" />
                          <div className="h-1.5 bg-aqua/30 rounded w-1/2 mt-0.5" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Form area */}
                    <div className="bg-muted/20 rounded-lg p-2 space-y-1.5">
                      <div className="h-5 bg-background/50 rounded border border-border/30" />
                      <div className="h-5 bg-background/50 rounded border border-border/30" />
                      <div className="h-6 bg-azure/40 rounded flex items-center justify-center">
                        <span className="text-[8px] text-primary-foreground font-medium">Submit Order</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right panel */}
                  <div className="col-span-3 space-y-2 hidden lg:block">
                    <div className="bg-muted/20 rounded-lg p-2">
                      <div className="h-2 w-full bg-muted/40 rounded mb-2" />
                      <div className="h-8 bg-orange/20 rounded" />
                    </div>
                  </div>
                </div>
                
                {/* Animated cursor */}
                <div 
                  className="absolute z-20 transition-all duration-500 ease-out pointer-events-none"
                  style={{ 
                    left: `${cursorPos.x}%`, 
                    top: `${cursorPos.y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <MousePointer className={cn(
                    "w-5 h-5 drop-shadow-lg transition-colors",
                    currentEvent?.type === "rage" ? "text-destructive" : "text-aqua"
                  )} 
                  style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
                  />
                  
                  {/* Click ripple */}
                  {showClickRipple && (
                    <div className={cn(
                      "absolute -inset-4 rounded-full animate-ping",
                      currentEvent?.type === "rage" ? "bg-destructive/30" : "bg-aqua/30"
                    )} />
                  )}
                  
                  {/* Event label */}
                  <div className={cn(
                    "absolute left-6 top-0 px-2 py-0.5 rounded text-[9px] font-medium whitespace-nowrap",
                    currentEvent?.type === "rage" || currentEvent?.type === "error" 
                      ? "bg-destructive text-destructive-foreground" 
                      : currentEvent?.type === "success"
                        ? "bg-green-500 text-white"
                        : "bg-aqua/90 text-aqua-foreground"
                  )}>
                    {currentEvent?.label}
                  </div>
                </div>
                
                {/* Rage click heat indicator */}
                {currentEvent?.type === "rage" && (
                  <div 
                    className="absolute w-24 h-24 rounded-full bg-gradient-radial from-destructive/40 to-transparent blur-xl animate-pulse"
                    style={{ 
                      left: `${cursorPos.x}%`, 
                      top: `${cursorPos.y}%`,
                      transform: "translate(-50%, -50%)"
                    }}
                  />
                )}
              </div>
            </div>
            
            {/* Timeline bar */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-background/80 backdrop-blur flex items-center px-2 gap-2">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 rounded hover:bg-muted/50 transition-colors"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
              <div className="flex-1 h-1.5 bg-muted/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-azure via-aqua to-orange rounded-full transition-all duration-100"
                  style={{ width: `${(currentTime / 24) * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground font-mono w-12 text-right">
                0:{Math.floor(currentTime).toString().padStart(2, '0')}
              </span>
            </div>
            
            {/* Event markers on timeline */}
            <div className="absolute bottom-6 left-8 right-14 h-2 pointer-events-none">
              {journeyEvents.map((event, i) => (
                <div 
                  key={i}
                  className={cn(
                    "absolute w-1.5 h-1.5 rounded-full -translate-x-1/2 transition-all",
                    getEventColor(event.type),
                    i === currentEventIndex && "scale-150"
                  )}
                  style={{ left: `${(event.time / 24) * 100}%` }}
                />
              ))}
            </div>
          </>
        );
        
      case "ai":
        return (
          <div className="absolute inset-0 p-4 flex flex-col">
            {/* AI Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-azure to-aqua flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-sm">PROXIMA AI Analysis</h4>
                <p className="text-[10px] text-muted-foreground">Multi-agent intelligence processing</p>
              </div>
              <div className="ml-auto flex items-center gap-1 px-2 py-1 rounded-full bg-aqua/20">
                <span className="w-1.5 h-1.5 rounded-full bg-aqua animate-pulse" />
                <span className="text-[10px] text-aqua">Analyzing</span>
              </div>
            </div>
            
            {/* AI Analysis Grid */}
            <div className="flex-1 grid grid-cols-2 gap-3">
              {/* Session Summary */}
              <div className="bg-muted/20 rounded-xl p-3 border border-border/30">
                <h5 className="text-xs font-semibold mb-2 flex items-center gap-1">
                  <Eye className="w-3 h-3 text-aqua" /> Session Summary
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">2m 34s</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-muted-foreground">Pages Viewed</span>
                    <span className="font-medium">7</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-muted-foreground">Interactions</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-muted-foreground">Outcome</span>
                    <span className="font-medium text-green-500">Converted</span>
                  </div>
                </div>
              </div>
              
              {/* Friction Analysis */}
              <div className="bg-destructive/10 rounded-xl p-3 border border-destructive/30">
                <h5 className="text-xs font-semibold mb-2 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-destructive" /> Friction Points
                </h5>
                <div className="space-y-1.5">
                  {[
                    { label: "Form validation delay", severity: "high" },
                    { label: "Payment timeout", severity: "high" },
                    { label: "Slow image load", severity: "medium" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px]">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        item.severity === "high" ? "bg-destructive" : "bg-orange"
                      )} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Revenue Impact */}
              <div className="bg-orange/10 rounded-xl p-3 border border-orange/30">
                <h5 className="text-xs font-semibold mb-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-orange" /> Revenue Impact
                </h5>
                <div className="text-center py-2">
                  <div className="text-2xl font-bold text-orange">$12,400</div>
                  <div className="text-[10px] text-muted-foreground">Daily revenue at risk</div>
                </div>
              </div>
              
              {/* Recommendations */}
              <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/30">
                <h5 className="text-xs font-semibold mb-2 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" /> Recommendations
                </h5>
                <div className="space-y-1.5">
                  {[
                    "Add inline form validation",
                    "Optimize payment API timeout",
                    "Lazy load product images",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px]">
                      <div className="w-3 h-3 rounded bg-green-500/20 flex items-center justify-center text-[8px]">
                        {i + 1}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* AI Insight Toast */}
            {currentInsight && (
              <div className={cn(
                "absolute bottom-4 left-4 right-4 p-3 rounded-xl backdrop-blur border animate-slide-up",
                currentInsight.type === "critical" 
                  ? "bg-destructive/20 border-destructive/50" 
                  : currentInsight.type === "success"
                    ? "bg-green-500/20 border-green-500/50"
                    : currentInsight.type === "warning"
                      ? "bg-orange/20 border-orange/50"
                      : "bg-aqua/20 border-aqua/50"
              )}>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-aqua" />
                  <span className="text-xs">{currentInsight.message}</span>
                </div>
              </div>
            )}
          </div>
        );
        
      case "heatmaps":
        return (
          <div className="absolute inset-0">
            <canvas 
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
            {/* Fake website structure underneath */}
            <div className="absolute inset-0 opacity-30 p-4">
              <div className="h-8 bg-muted/40 rounded mb-2" />
              <div className="grid grid-cols-3 gap-2 h-[calc(100%-40px)]">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-muted/30 rounded" />
                ))}
              </div>
            </div>
            
            {/* Heatmap legend */}
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur rounded-lg p-3 border border-border/50">
              <h5 className="text-[10px] font-semibold mb-2">Click Density</h5>
              <div className="flex items-center gap-1">
                <div className="w-12 h-3 rounded bg-gradient-to-r from-aqua via-orange to-destructive" />
                <div className="flex justify-between w-16 text-[8px] text-muted-foreground">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
            </div>
            
            {/* Hotspot annotations */}
            <div 
              className="absolute flex items-center gap-1 bg-destructive/90 px-2 py-1 rounded text-[9px] text-destructive-foreground"
              style={{ left: "58%", top: "68%" }}
            >
              <Flame className="w-3 h-3" />
              Rage clicks: 23
            </div>
          </div>
        );
        
      case "ticketing":
        return (
          <div className="absolute inset-0 p-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange to-destructive flex items-center justify-center">
                <Ticket className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Auto-Generated Tickets</h4>
                <p className="text-[10px] text-muted-foreground">JIRA • Linear • GitHub Issues</p>
              </div>
            </div>
            
            {/* Ticket list */}
            <div className="flex-1 space-y-2 overflow-auto">
              {[
                { 
                  id: "TF-4821", 
                  title: "Checkout form validation causing rage clicks",
                  priority: "critical",
                  status: "new",
                  time: "2m ago"
                },
                { 
                  id: "TF-4820", 
                  title: "Payment timeout affecting 12% of users",
                  priority: "high",
                  status: "assigned",
                  time: "5m ago"
                },
                { 
                  id: "TF-4819", 
                  title: "Product image lazy loading optimization",
                  priority: "medium",
                  status: "in_progress",
                  time: "12m ago"
                },
              ].map((ticket, i) => (
                <div 
                  key={ticket.id}
                  className={cn(
                    "p-3 rounded-xl border transition-all animate-fade-in",
                    i === 0 ? "bg-destructive/10 border-destructive/30" : "bg-muted/20 border-border/30"
                  )}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-muted-foreground">{ticket.id}</span>
                      <span className={cn(
                        "px-1.5 py-0.5 rounded text-[8px] font-medium uppercase",
                        ticket.priority === "critical" 
                          ? "bg-destructive/20 text-destructive"
                          : ticket.priority === "high"
                            ? "bg-orange/20 text-orange"
                            : "bg-azure/20 text-azure"
                      )}>
                        {ticket.priority}
                      </span>
                    </div>
                    <span className="text-[9px] text-muted-foreground">{ticket.time}</span>
                  </div>
                  <p className="text-xs font-medium mb-2">{ticket.title}</p>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[9px]",
                      ticket.status === "new" 
                        ? "bg-aqua/20 text-aqua"
                        : ticket.status === "assigned"
                          ? "bg-azure/20 text-azure"
                          : "bg-orange/20 text-orange"
                    )}>
                      {ticket.status.replace("_", " ")}
                    </span>
                    <div className="flex -space-x-1">
                      {[1, 2].map(j => (
                        <div key={j} className="w-4 h-4 rounded-full bg-muted border border-background text-[7px] flex items-center justify-center">
                          👤
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Auto-ticket animation */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-aqua/20 border border-aqua/50 animate-pulse">
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4 text-aqua" />
                <span className="text-xs">Creating ticket from session #4821...</span>
                <div className="ml-auto w-4 h-4 border-2 border-aqua border-t-transparent rounded-full animate-spin" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section 
      className="section-padding relative overflow-hidden"
      id="demo"
      aria-labelledby="demo-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-background" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <h2 id="demo-heading" className="text-3xl lg:text-5xl font-bold mb-4">
            See <span className="gradient-text">TRACEFLOW</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of digital cognition infrastructure
          </p>
        </div>

        {/* Demo Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glassmorphic Frame */}
          <div className="glass-strong rounded-3xl p-4 lg:p-8 relative overflow-hidden border border-border/50">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-destructive/50 hover:bg-destructive transition-colors" />
                <div className="w-3 h-3 rounded-full bg-orange/50 hover:bg-orange transition-colors" />
                <div className="w-3 h-3 rounded-full bg-aqua/50 hover:bg-aqua transition-colors" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-lg bg-muted/50 text-xs text-muted-foreground font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
                  app.traceflow.io/dashboard
                </div>
              </div>
              {/* Live stats */}
              <div className="hidden sm:flex items-center gap-3 text-[10px]">
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-aqua" />
                  <span className="font-mono">{animatedStats.sessions}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Activity className="w-3 h-3 text-azure" />
                  <span className="font-mono">{animatedStats.events.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Demo Content */}
            <div className="relative aspect-video rounded-xl bg-background/50 overflow-hidden border border-border/50">
              {renderTabContent()}
            </div>

            {/* Tabs */}
            <div 
              className="flex flex-wrap justify-center gap-2 mt-6"
              role="tablist"
              aria-label="Demo feature tabs"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`tab-panel-${tab.id}`}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-azure to-aqua text-primary-foreground shadow-lg shadow-azure/20"
                      : "glass text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <tab.icon className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-azure/20 blur-2xl animate-pulse-glow" aria-hidden="true" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-aqua/20 blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} aria-hidden="true" />
        </div>

        {/* Stats below demo */}
        <div className="flex justify-center gap-6 lg:gap-12 mt-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="w-4 h-4 text-aqua group-hover:scale-110 transition-transform" aria-hidden="true" />
                <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
