import { useState } from "react";
import { 
  Smartphone, 
  Server, 
  Database, 
  Brain, 
  BarChart3, 
  Shield, 
  Workflow,
  HardDrive,
  X,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

interface TechNode {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  details: string[];
  tech: string[];
  position: { x: number; y: number };
  color: "azure" | "aqua" | "orange";
}

const techNodes: TechNode[] = [
  {
    id: "sdk",
    icon: Smartphone,
    title: "Capture SDK",
    shortDesc: "Multi-platform instrumentation",
    details: [
      "Browser & mobile SDK",
      "Auto-instrumentation",
      "Custom event tracking",
      "DOM snapshots"
    ],
    tech: ["TypeScript", "React Native", "Flutter", "Swift", "Kotlin"],
    position: { x: 5, y: 50 },
    color: "aqua"
  },
  {
    id: "runner",
    icon: Server,
    title: "DXI Runner",
    shortDesc: "On-prem processing engine",
    details: [
      "Zero-PII tokenization",
      "Real-time event processing",
      "Edge deployment ready",
      "Auto-scaling"
    ],
    tech: ["Go", "gRPC", "Kubernetes", "Helm"],
    position: { x: 22, y: 30 },
    color: "azure"
  },
  {
    id: "streams",
    icon: Database,
    title: "Event Streams",
    shortDesc: "High-throughput messaging",
    details: [
      "1M+ events/sec throughput",
      "Exactly-once delivery",
      "Multi-region replication",
      "24h retention default"
    ],
    tech: ["Redis Streams", "Kafka", "Apache Pulsar"],
    position: { x: 40, y: 50 },
    color: "aqua"
  },
  {
    id: "temporal",
    icon: Workflow,
    title: "Temporal Engine",
    shortDesc: "Durable workflow orchestration",
    details: [
      "Long-running workflows",
      "Automatic retries",
      "State persistence",
      "Multi-agent coordination"
    ],
    tech: ["Temporal.io", "Go Workers", "Python SDK"],
    position: { x: 55, y: 25 },
    color: "azure"
  },
  {
    id: "proxima",
    icon: Brain,
    title: "PROXIMA AI",
    shortDesc: "Multi-agent intelligence",
    details: [
      "Session analysis",
      "Journey causality",
      "Revenue impact scoring",
      "Auto-ticket generation"
    ],
    tech: ["LangChain", "GPT-4", "Claude", "Custom Models"],
    position: { x: 70, y: 50 },
    color: "orange"
  },
  {
    id: "vector",
    icon: HardDrive,
    title: "Vector Store",
    shortDesc: "Semantic search & embeddings",
    details: [
      "Session embeddings",
      "Similarity search",
      "Pattern clustering",
      "Anomaly detection"
    ],
    tech: ["Pinecone", "Weaviate", "pgvector"],
    position: { x: 78, y: 25 },
    color: "aqua"
  },
  {
    id: "security",
    icon: Shield,
    title: "Security Layer",
    shortDesc: "Zero-trust architecture",
    details: [
      "Customer-managed keys",
      "RBAC policies",
      "Audit logging",
      "Data residency controls"
    ],
    tech: ["HashiCorp Vault", "AWS KMS", "mTLS"],
    position: { x: 55, y: 75 },
    color: "azure"
  },
  {
    id: "dashboard",
    icon: BarChart3,
    title: "Intelligence Hub",
    shortDesc: "Unified analytics dashboard",
    details: [
      "Real-time metrics",
      "Session replay",
      "AI insights",
      "Custom reports"
    ],
    tech: ["React", "D3.js", "WebSocket", "GraphQL"],
    position: { x: 92, y: 50 },
    color: "aqua"
  }
];

const connections = [
  { from: "sdk", to: "runner" },
  { from: "runner", to: "streams" },
  { from: "streams", to: "temporal" },
  { from: "temporal", to: "proxima" },
  { from: "proxima", to: "vector" },
  { from: "proxima", to: "dashboard" },
  { from: "streams", to: "security" },
  { from: "security", to: "temporal" },
];

export function TechStackDiagram() {
  const [selectedNode, setSelectedNode] = useState<TechNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const colorClasses = {
    azure: {
      bg: "bg-azure/20",
      border: "border-azure/50",
      glow: "shadow-[0_0_30px_hsl(var(--azure)/0.3)]",
      text: "text-azure",
      gradient: "from-azure to-azure/50"
    },
    aqua: {
      bg: "bg-aqua/20",
      border: "border-aqua/50",
      glow: "shadow-[0_0_30px_hsl(var(--aqua)/0.3)]",
      text: "text-aqua",
      gradient: "from-aqua to-aqua/50"
    },
    orange: {
      bg: "bg-orange/20",
      border: "border-orange/50",
      glow: "shadow-[0_0_30px_hsl(var(--orange)/0.3)]",
      text: "text-orange",
      gradient: "from-orange to-orange/50"
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container-wide relative z-10">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-azure/10 text-azure border border-azure/20 mb-4">
            Architecture
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Enterprise-Grade <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Click on any node to explore the technology powering TRACEFLOW's 
            Digital Cognition Infrastructure
          </p>
        </ScrollReveal>

        {/* Interactive Diagram */}
        <ScrollReveal animation="scale" delay={200}>
          <div className="relative w-full aspect-[2/1] min-h-[400px] lg:min-h-[500px]">
            {/* SVG Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--azure))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--aqua))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--aqua))" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {connections.map((conn, i) => {
                const fromNode = techNodes.find(n => n.id === conn.from);
                const toNode = techNodes.find(n => n.id === conn.to);
                if (!fromNode || !toNode) return null;
                
                const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;
                
                return (
                  <line
                    key={i}
                    x1={`${fromNode.position.x}%`}
                    y1={`${fromNode.position.y}%`}
                    x2={`${toNode.position.x}%`}
                    y2={`${toNode.position.y}%`}
                    stroke="url(#connectionGradient)"
                    strokeWidth={isHighlighted ? 3 : 1.5}
                    strokeDasharray={isHighlighted ? "none" : "8,4"}
                    filter={isHighlighted ? "url(#glow)" : "none"}
                    className="transition-all duration-300"
                    style={{
                      animation: isHighlighted ? "flowAnimation 1s linear infinite" : "none"
                    }}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {techNodes.map((node, index) => {
              const colors = colorClasses[node.color];
              const isHovered = hoveredNode === node.id;
              const isSelected = selectedNode?.id === node.id;
              
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={cn(
                    "absolute transform -translate-x-1/2 -translate-y-1/2",
                    "p-4 lg:p-5 rounded-2xl border-2 backdrop-blur-sm",
                    "transition-all duration-300 cursor-pointer",
                    "hover:scale-110 group",
                    colors.bg,
                    colors.border,
                    isHovered && colors.glow,
                    isSelected && "ring-2 ring-offset-2 ring-offset-background"
                  )}
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <node.icon className={cn(
                    "w-6 h-6 lg:w-8 lg:h-8 transition-transform duration-300",
                    colors.text,
                    isHovered && "scale-110"
                  )} />
                  
                  {/* Tooltip */}
                  <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5",
                    "rounded-lg glass-strong border border-border/50 whitespace-nowrap",
                    "text-xs font-medium opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-200 pointer-events-none z-10"
                  )}>
                    {node.title}
                  </div>
                  
                  {/* Pulse ring on hover */}
                  {isHovered && (
                    <div className={cn(
                      "absolute inset-0 rounded-2xl animate-ping",
                      colors.bg,
                      "opacity-50"
                    )} />
                  )}
                </button>
              );
            })}

            {/* Animated data packets */}
            {hoveredNode && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-aqua animate-[flowPacket_2s_linear_infinite]"
                    style={{
                      animationDelay: `${i * 0.6}s`,
                      left: `${techNodes.find(n => n.id === hoveredNode)?.position.x}%`,
                      top: `${techNodes.find(n => n.id === hoveredNode)?.position.y}%`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Detail Panel */}
        {selectedNode && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedNode(null)}
          >
            <div 
              className={cn(
                "relative max-w-lg w-full glass-strong rounded-2xl p-6 border",
                colorClasses[selectedNode.color].border,
                "animate-scale-in"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedNode(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className={cn(
                  "p-4 rounded-xl",
                  colorClasses[selectedNode.color].bg
                )}>
                  <selectedNode.icon className={cn(
                    "w-8 h-8",
                    colorClasses[selectedNode.color].text
                  )} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{selectedNode.title}</h3>
                  <p className="text-muted-foreground">{selectedNode.shortDesc}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedNode.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          colorClasses[selectedNode.color].text,
                          "bg-current"
                        )} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-muted/50 border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className={cn(
                  "w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                  "font-medium text-sm transition-all duration-300",
                  colorClasses[selectedNode.color].bg,
                  colorClasses[selectedNode.color].border,
                  "border hover:scale-[1.02]"
                )}>
                  <span>View Documentation</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes flowPacket {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(100px, -50px) scale(0.5); opacity: 0; }
        }
        @keyframes flowAnimation {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
