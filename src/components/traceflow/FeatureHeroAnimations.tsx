import { cn } from "@/lib/utils";

// Capture Features Hero Animation - SDK Data Streams
export function CaptureHeroAnimation({ className }: { className?: string }) {
  return (
    <svg className={cn("w-full h-full", className)} viewBox="0 0 400 300" fill="none">
      <defs>
        <linearGradient id="capture-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--azure))" />
          <stop offset="100%" stopColor="hsl(var(--aqua))" />
        </linearGradient>
        <filter id="capture-glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background Grid */}
      <g opacity="0.1">
        {[...Array(10)].map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 30} x2="400" y2={i * 30} stroke="hsl(var(--azure))" strokeWidth="0.5" />
        ))}
        {[...Array(14)].map((_, i) => (
          <line key={`v-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="300" stroke="hsl(var(--azure))" strokeWidth="0.5" />
        ))}
      </g>
      
      {/* Device/App */}
      <g transform="translate(50, 80)">
        <rect x="0" y="0" width="80" height="140" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--azure))" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="8" y="20" width="64" height="100" rx="4" fill="hsl(var(--muted))" opacity="0.5" />
        <circle cx="40" cy="130" r="6" fill="hsl(var(--azure))" opacity="0.3" />
        <text x="40" y="55" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="8" fontWeight="bold">WEB APP</text>
        <text x="40" y="80" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">SDK Active</text>
        
        {/* SDK Pulse */}
        <circle cx="40" cy="95" r="8" fill="hsl(var(--azure))" opacity="0.8">
          <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="40" cy="95" r="4" fill="hsl(var(--azure))" />
      </g>
      
      {/* Data Packets Flowing */}
      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <circle r="5" fill="url(#capture-gradient)" filter="url(#capture-glow)">
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
                path="M 130 150 Q 200 100 280 120 T 350 150"
              />
              <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </g>
      
      {/* Data Stream Lines */}
      <path d="M 130 150 Q 200 100 280 120 T 350 150" stroke="url(#capture-gradient)" strokeWidth="2" fill="none" opacity="0.3">
        <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="3s" repeatCount="indefinite" />
      </path>
      
      {/* Capture Engine */}
      <g transform="translate(280, 100)">
        <rect x="0" y="0" width="100" height="100" rx="12" fill="hsl(var(--card))" stroke="hsl(var(--aqua))" strokeWidth="2" />
        <text x="50" y="30" textAnchor="middle" fill="hsl(var(--aqua))" fontSize="9" fontWeight="bold">CAPTURE</text>
        <text x="50" y="45" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">ENGINE</text>
        
        {/* Recording indicator */}
        <circle cx="50" cy="65" r="10" fill="hsl(var(--destructive))" opacity="0.8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="65" r="5" fill="hsl(var(--destructive))" />
        
        <text x="50" y="90" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">60fps Recording</text>
      </g>
      
      {/* Event Types */}
      {[
        { y: 220, label: "Clicks", color: "azure" },
        { y: 240, label: "Scrolls", color: "aqua" },
        { y: 260, label: "Forms", color: "orange" },
      ].map((item, i) => (
        <g key={item.label} transform={`translate(160, ${item.y})`}>
          <rect x="0" y="0" width="80" height="16" rx="4" fill={`hsl(var(--${item.color}))`} opacity="0.2">
            <animate attributeName="width" values="0;80" dur="0.5s" begin={`${i * 0.2}s`} fill="freeze" />
          </rect>
          <text x="8" y="11" fill={`hsl(var(--${item.color}))`} fontSize="8" fontWeight="bold">{item.label}</text>
        </g>
      ))}
    </svg>
  );
}

// Intelligence Features Hero Animation - Neural Network Brain
export function IntelligenceHeroAnimation({ className }: { className?: string }) {
  return (
    <svg className={cn("w-full h-full", className)} viewBox="0 0 400 300" fill="none">
      <defs>
        <linearGradient id="intel-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--aqua))" />
          <stop offset="100%" stopColor="hsl(var(--azure))" />
        </linearGradient>
        <filter id="intel-glow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="brain-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--aqua))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--aqua))" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Brain outline */}
      <g transform="translate(200, 150)">
        {/* Outer glow */}
        <circle r="90" fill="url(#brain-glow)">
          <animate attributeName="r" values="85;95;85" dur="3s" repeatCount="indefinite" />
        </circle>
        
        {/* Brain core */}
        <ellipse rx="60" ry="55" fill="hsl(var(--card))" stroke="hsl(var(--aqua))" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </ellipse>
        
        {/* Neural connections */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const x1 = Math.cos(angle) * 30;
          const y1 = Math.sin(angle) * 25;
          const x2 = Math.cos(angle) * 55;
          const y2 = Math.sin(angle) * 50;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--aqua))" strokeWidth="1.5" opacity="0.5">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
            </line>
          );
        })}
        
        {/* Core nodes */}
        <circle r="20" fill="url(#intel-gradient)" filter="url(#intel-glow)">
          <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <text y="5" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="10" fontWeight="bold">AI</text>
      </g>
      
      {/* Orbiting AI Agents */}
      {[
        { name: "SA", angle: 0, color: "azure" },
        { name: "JM", angle: 45, color: "aqua" },
        { name: "CE", angle: 90, color: "orange" },
        { name: "UV", angle: 135, color: "azure" },
        { name: "RI", angle: 180, color: "aqua" },
        { name: "TA", angle: 225, color: "orange" },
        { name: "AG", angle: 270, color: "azure" },
        { name: "PO", angle: 315, color: "aqua" },
      ].map((agent, i) => (
        <g key={agent.name} transform="translate(200, 150)">
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${agent.angle} 0 0`}
              to={`${agent.angle + 360} 0 0`}
              dur="20s"
              repeatCount="indefinite"
            />
            <circle cx="85" cy="0" r="16" fill={`hsl(var(--${agent.color}))`} opacity="0.2" />
            <circle cx="85" cy="0" r="12" fill="hsl(var(--card))" stroke={`hsl(var(--${agent.color}))`} strokeWidth="2" />
            <text x="85" textAnchor="middle" y="4" fill={`hsl(var(--${agent.color}))`} fontSize="7" fontWeight="bold">{agent.name}</text>
          </g>
        </g>
      ))}
      
      {/* Data flowing to brain */}
      {[0, 1, 2].map((i) => (
        <circle key={i} r="4" fill="hsl(var(--aqua))" filter="url(#intel-glow)">
          <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1}s`} path="M 50 150 Q 100 100 200 150" />
          <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
        </circle>
      ))}
      
      {/* Output insights */}
      {[0, 1, 2].map((i) => (
        <circle key={i} r="4" fill="hsl(var(--orange))" filter="url(#intel-glow)">
          <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1}s`} path="M 200 150 Q 300 100 350 150" />
          <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
        </circle>
      ))}
      
      {/* Labels */}
      <text x="50" y="140" fill="hsl(var(--muted-foreground))" fontSize="8">Raw Data</text>
      <text x="330" y="140" fill="hsl(var(--muted-foreground))" fontSize="8">Insights</text>
    </svg>
  );
}

// Security Features Hero Animation - Shield with Layers
export function SecurityHeroAnimation({ className }: { className?: string }) {
  return (
    <svg className={cn("w-full h-full", className)} viewBox="0 0 400 300" fill="none">
      <defs>
        <linearGradient id="security-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--orange))" />
          <stop offset="100%" stopColor="hsl(var(--azure))" />
        </linearGradient>
        <filter id="security-glow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shield Base */}
      <g transform="translate(200, 150)">
        {/* Outer shield glow */}
        <path d="M 0 -80 L 70 -50 L 70 30 Q 70 80 0 100 Q -70 80 -70 30 L -70 -50 Z" 
              fill="none" stroke="hsl(var(--orange))" strokeWidth="3" opacity="0.3" filter="url(#security-glow)">
          <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </path>
        
        {/* Shield layers */}
        {[60, 45, 30].map((size, i) => (
          <path key={i} 
                d={`M 0 ${-size - 15} L ${size} ${-size + 10} L ${size} ${size/3} Q ${size} ${size + 15} 0 ${size + 25} Q ${-size} ${size + 15} ${-size} ${size/3} L ${-size} ${-size + 10} Z`}
                fill="hsl(var(--card))" 
                stroke={i === 0 ? "hsl(var(--orange))" : i === 1 ? "hsl(var(--azure))" : "hsl(var(--aqua))"}
                strokeWidth="2"
                opacity={1 - i * 0.2}>
            <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </path>
        ))}
        
        {/* Lock icon in center */}
        <rect x="-12" y="-5" width="24" height="20" rx="3" fill="hsl(var(--orange))" />
        <path d="M -8 -5 L -8 -15 A 8 8 0 0 1 8 -15 L 8 -5" fill="none" stroke="hsl(var(--orange))" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="5" r="3" fill="hsl(var(--background))" />
        
        {/* Scanning effect */}
        <line x1="-65" y1="0" x2="65" y2="0" stroke="hsl(var(--aqua))" strokeWidth="2" opacity="0.5">
          <animate attributeName="y1" values="-70;90;-70" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y2" values="-70;90;-70" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
        </line>
      </g>
      
      {/* Data packets being encrypted */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          {/* Unencrypted */}
          <rect width="30" height="10" rx="2" fill="hsl(var(--destructive))" opacity="0.6">
            <animateMotion dur="4s" repeatCount="indefinite" begin={`${i * 1}s`} path="M 30 150 L 120 150" />
            <animate attributeName="opacity" values="0;0.6;0" dur="2s" begin={`${i * 1}s`} repeatCount="indefinite" />
          </rect>
          {/* Encrypted */}
          <rect width="30" height="10" rx="2" fill="hsl(var(--aqua))">
            <animateMotion dur="4s" repeatCount="indefinite" begin={`${i * 1 + 2}s`} path="M 280 150 L 370 150" />
            <animate attributeName="opacity" values="0;1;0" dur="2s" begin={`${i * 1 + 2}s`} repeatCount="indefinite" />
          </rect>
        </g>
      ))}
      
      {/* Labels */}
      <g transform="translate(40, 230)">
        <rect width="80" height="24" rx="4" fill="hsl(var(--orange))" opacity="0.2" />
        <text x="40" y="16" textAnchor="middle" fill="hsl(var(--orange))" fontSize="9" fontWeight="bold">Zero-Trust</text>
      </g>
      <g transform="translate(160, 230)">
        <rect width="80" height="24" rx="4" fill="hsl(var(--azure))" opacity="0.2" />
        <text x="40" y="16" textAnchor="middle" fill="hsl(var(--azure))" fontSize="9" fontWeight="bold">E2E Encrypt</text>
      </g>
      <g transform="translate(280, 230)">
        <rect width="80" height="24" rx="4" fill="hsl(var(--aqua))" opacity="0.2" />
        <text x="40" y="16" textAnchor="middle" fill="hsl(var(--aqua))" fontSize="9" fontWeight="bold">PII Redact</text>
      </g>
    </svg>
  );
}

// Enterprise Features Hero Animation - Multi-Deployment Architecture
export function EnterpriseHeroAnimation({ className }: { className?: string }) {
  return (
    <svg className={cn("w-full h-full", className)} viewBox="0 0 400 300" fill="none">
      <defs>
        <linearGradient id="ent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--azure))" />
          <stop offset="50%" stopColor="hsl(var(--aqua))" />
          <stop offset="100%" stopColor="hsl(var(--orange))" />
        </linearGradient>
        <filter id="ent-glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Central Hub */}
      <g transform="translate(200, 150)">
        <circle r="50" fill="hsl(var(--card))" stroke="url(#ent-gradient)" strokeWidth="3">
          <animate attributeName="stroke-dasharray" values="0,315;315,0" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle r="35" fill="hsl(var(--card))" stroke="hsl(var(--azure))" strokeWidth="2" opacity="0.5" />
        <text y="-5" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">TRACEFLOW</text>
        <text y="10" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">Enterprise Hub</text>
      </g>
      
      {/* Cloud Deployment */}
      <g transform="translate(80, 60)">
        <rect x="-30" y="-20" width="60" height="40" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--azure))" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </rect>
        <path d="M -10 0 Q -15 -10 -5 -10 Q 0 -18 10 -10 Q 18 -10 15 0" stroke="hsl(var(--azure))" strokeWidth="2" fill="none" />
        <text y="15" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">SaaS</text>
        
        {/* Connection to hub */}
        <line x1="30" y1="10" x2="90" y2="70" stroke="hsl(var(--azure))" strokeWidth="2" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
        </line>
      </g>
      
      {/* Hybrid Deployment */}
      <g transform="translate(320, 60)">
        <rect x="-30" y="-20" width="60" height="40" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--aqua))" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </rect>
        <rect x="-15" y="-8" width="12" height="16" rx="2" fill="hsl(var(--aqua))" opacity="0.5" />
        <path d="M 5 0 Q 0 -10 10 -8" stroke="hsl(var(--aqua))" strokeWidth="2" fill="none" />
        <text y="15" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">Hybrid</text>
        
        <line x1="-30" y1="10" x2="-90" y2="70" stroke="hsl(var(--aqua))" strokeWidth="2" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
        </line>
      </g>
      
      {/* On-Prem Deployment */}
      <g transform="translate(80, 240)">
        <rect x="-30" y="-20" width="60" height="40" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--orange))" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="-12" y="-10" width="24" height="20" rx="2" stroke="hsl(var(--orange))" strokeWidth="1.5" fill="none" />
        <line x1="-8" y1="-4" x2="8" y2="-4" stroke="hsl(var(--orange))" strokeWidth="1" />
        <line x1="-8" y1="0" x2="8" y2="0" stroke="hsl(var(--orange))" strokeWidth="1" />
        <line x1="-8" y1="4" x2="8" y2="4" stroke="hsl(var(--orange))" strokeWidth="1" />
        <text y="15" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">On-Prem</text>
        
        <line x1="30" y1="-10" x2="90" y2="-70" stroke="hsl(var(--orange))" strokeWidth="2" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
        </line>
      </g>
      
      {/* Air-Gapped Deployment */}
      <g transform="translate(320, 240)">
        <rect x="-30" y="-20" width="60" height="40" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--destructive))" strokeWidth="2">
          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" begin="0.9s" repeatCount="indefinite" />
        </rect>
        <path d="M -10 -8 L 10 8 M -10 8 L 10 -8" stroke="hsl(var(--destructive))" strokeWidth="2" strokeLinecap="round" />
        <text y="15" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">Air-Gap</text>
        
        <line x1="-30" y1="-10" x2="-90" y2="-70" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="4,4">
          <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
        </line>
      </g>
      
      {/* Data Packets */}
      {[
        { path: "M 115 80 L 165 120", color: "azure" },
        { path: "M 285 80 L 235 120", color: "aqua" },
        { path: "M 115 220 L 165 180", color: "orange" },
        { path: "M 285 220 L 235 180", color: "destructive" },
      ].map((line, i) => (
        <circle key={i} r="4" fill={`hsl(var(--${line.color}))`} filter="url(#ent-glow)">
          <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.5}s`} path={line.path} />
        </circle>
      ))}
    </svg>
  );
}
