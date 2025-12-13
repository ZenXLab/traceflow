import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  MousePointerClick, 
  Brain, 
  Shield, 
  Building2, 
  Play, 
  Radio, 
  Smartphone, 
  Layers,
  Sparkles,
  GitBranch,
  Route,
  Eye,
  Lock,
  Key,
  FileText,
  Globe,
  Server,
  Cloud,
  Users,
  Plug,
  ExternalLink,
  Zap,
  BookOpen,
  Activity
} from "lucide-react";

const megaMenuData = {
  capture: {
    title: "Capture",
    icon: MousePointerClick,
    color: "from-azure to-azure/70",
    href: "/features/capture",
    items: [
      { icon: Radio, label: "SDK Integration", desc: "Multi-platform SDK", href: "/features/capture" },
      { icon: Play, label: "Session Replay", desc: "Pixel-perfect playback", href: "/features/capture" },
      { icon: Activity, label: "Event Tracking", desc: "Custom taxonomies", href: "/features/capture" },
      { icon: Smartphone, label: "Mobile Capture", desc: "iOS & Android", href: "/features/capture" },
      { icon: Layers, label: "DOM Snapshots", desc: "Full DOM tree capture", href: "/features/capture" },
    ],
  },
  intelligence: {
    title: "Intelligence",
    icon: Brain,
    color: "from-aqua to-aqua/70",
    href: "/features/intelligence",
    items: [
      { icon: Sparkles, label: "PROXIMA AI", desc: "Multi-agent analysis", href: "/features/intelligence" },
      { icon: FileText, label: "AI Summaries", desc: "Session insights", href: "/features/intelligence" },
      { icon: GitBranch, label: "Root Cause Analysis", desc: "Causality engine", href: "/features/intelligence" },
      { icon: Route, label: "Journey Mapping", desc: "Path optimization", href: "/features/intelligence" },
      { icon: Eye, label: "UX Vision", desc: "Visual analytics", href: "/features/intelligence" },
    ],
  },
  security: {
    title: "Security",
    icon: Shield,
    color: "from-orange to-orange/70",
    href: "/features/security",
    items: [
      { icon: Lock, label: "Zero-Trust Pipeline", desc: "End-to-end security", href: "/features/security" },
      { icon: Key, label: "PII Tokenization", desc: "Auto-redaction", href: "/features/security" },
      { icon: Users, label: "RBAC Controls", desc: "Granular permissions", href: "/features/security" },
      { icon: FileText, label: "Audit Logs", desc: "Complete history", href: "/features/security" },
      { icon: Globe, label: "Data Residency", desc: "Multi-region control", href: "/features/security" },
    ],
  },
  enterprise: {
    title: "Enterprise",
    icon: Building2,
    color: "from-azure/80 to-aqua/80",
    href: "/features/enterprise",
    items: [
      { icon: Server, label: "On-Prem Runner", desc: "Self-hosted option", href: "/features/enterprise" },
      { icon: Cloud, label: "Hybrid Deployment", desc: "Flexible architecture", href: "/features/enterprise" },
      { icon: Shield, label: "Air-Gapped Mode", desc: "Network isolation", href: "/features/enterprise" },
      { icon: Key, label: "SSO/SAML", desc: "Enterprise auth", href: "/features/enterprise" },
      { icon: Plug, label: "Integrations", desc: "Jira, Slack, PagerDuty", href: "/features/enterprise" },
    ],
  },
};

const quickLinks = [
  { label: "Documentation", href: "#", icon: BookOpen },
  { label: "API Reference", href: "#", icon: FileText },
  { label: "Status Page", href: "#", icon: Activity },
];

interface TraceflowMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TraceflowMegaMenu({ isOpen, onClose }: TraceflowMegaMenuProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 right-0 mt-2 mx-4 lg:mx-8"
      onMouseLeave={onClose}
    >
      <div className={cn(
        "glass-strong rounded-2xl border border-border/50 shadow-2xl overflow-hidden",
        "animate-fade-in-up",
        "bg-card/95 backdrop-blur-2xl"
      )}>
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-azure/20 via-aqua/20 to-orange/20 opacity-50 pointer-events-none" />
        
        <div className="relative p-6 lg:p-8">
          {/* Main Grid - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {Object.entries(megaMenuData).map(([key, category], categoryIndex) => (
              <div 
                key={key}
                className="space-y-4"
                onMouseEnter={() => setHoveredCategory(key)}
                style={{ animationDelay: `${categoryIndex * 50}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-border/30">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    `bg-gradient-to-br ${category.color}`,
                    "transition-transform duration-300",
                    hoveredCategory === key && "scale-110"
                  )}>
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-foreground">{category.title}</span>
                </div>

                {/* Category Items */}
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-xl transition-all duration-300",
                        "hover:bg-muted/50 group",
                        "animate-fade-in-up"
                      )}
                      style={{ animationDelay: `${(categoryIndex * 50) + (itemIndex * 30)}ms` }}
                      onClick={onClose}
                    >
                      <item.icon className={cn(
                        "w-4 h-4 mt-0.5 text-muted-foreground",
                        "group-hover:text-aqua transition-colors duration-300"
                      )} />
                      <div>
                        <div className="text-sm font-medium text-foreground group-hover:text-aqua transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-border/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Quick Links */}
            <div className="flex flex-wrap gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>

            {/* What's New */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-azure/10 to-aqua/10 border border-azure/20">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange" />
                <span className="text-sm font-medium text-foreground">What's New:</span>
              </div>
              <span className="text-sm text-muted-foreground">PROXIMA AI v2.0 with Multi-Agent RCA</span>
              <a href="#" className="text-sm text-aqua hover:underline">Learn more →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
