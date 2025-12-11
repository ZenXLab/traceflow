import { cn } from "@/lib/utils";

// Animated SDK Component - Device emitting data packets
export function AnimatedSDK({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 80 80" 
      className={cn("w-full h-full", className)}
      fill="none"
    >
      {/* Device */}
      <rect 
        x="20" y="25" 
        width="25" height="35" 
        rx="3" 
        fill="url(#sdkGradient)"
        className="animate-pulse"
      />
      <rect x="24" y="30" width="17" height="20" rx="1" fill="hsl(222 47% 11%)" />
      <circle cx="32.5" cy="55" r="2" fill="hsl(186 100% 42%)" className="animate-pulse" />
      
      {/* Data packets flowing out */}
      <g className="animate-[dataFlow_2s_ease-in-out_infinite]">
        <circle cx="50" cy="35" r="3" fill="hsl(186 100% 42%)" opacity="0.9" />
      </g>
      <g className="animate-[dataFlow_2s_ease-in-out_0.3s_infinite]">
        <circle cx="55" cy="42" r="2.5" fill="hsl(28 100% 50%)" opacity="0.8" />
      </g>
      <g className="animate-[dataFlow_2s_ease-in-out_0.6s_infinite]">
        <circle cx="52" cy="48" r="2" fill="hsl(218 88% 30%)" opacity="0.7" />
      </g>
      
      {/* Signal waves */}
      <path 
        d="M48 40 Q55 40 58 35" 
        stroke="hsl(186 100% 42%)" 
        strokeWidth="1.5" 
        fill="none"
        strokeDasharray="4 2"
        className="animate-[dash_1s_linear_infinite]"
      />
      <path 
        d="M48 42 Q58 42 62 38" 
        stroke="hsl(186 100% 42%)" 
        strokeWidth="1" 
        fill="none"
        opacity="0.6"
        strokeDasharray="3 2"
        className="animate-[dash_1.2s_linear_infinite]"
      />
      
      <defs>
        <linearGradient id="sdkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(218 88% 30%)" />
          <stop offset="100%" stopColor="hsl(186 100% 42%)" />
        </linearGradient>
      </defs>
      
      <style>{`
        @keyframes dataFlow {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(20px) translateY(-5px); opacity: 0; }
        }
        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }
      `}</style>
    </svg>
  );
}

// Animated Runner Component - Server with spinning gears + PII wipe
export function AnimatedRunner({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 80 80" 
      className={cn("w-full h-full", className)}
      fill="none"
    >
      {/* Server rack */}
      <rect x="18" y="20" width="44" height="45" rx="4" fill="url(#runnerGradient)" />
      <rect x="22" y="25" width="36" height="8" rx="2" fill="hsl(222 47% 11%)" />
      <rect x="22" y="36" width="36" height="8" rx="2" fill="hsl(222 47% 11%)" />
      <rect x="22" y="47" width="36" height="8" rx="2" fill="hsl(222 47% 11%)" />
      
      {/* Status lights */}
      <circle cx="28" cy="29" r="2" fill="hsl(186 100% 42%)" className="animate-pulse" />
      <circle cx="28" cy="40" r="2" fill="hsl(120 60% 50%)" className="animate-[pulse_1.5s_ease-in-out_infinite]" />
      <circle cx="28" cy="51" r="2" fill="hsl(28 100% 50%)" className="animate-[pulse_2s_ease-in-out_infinite]" />
      
      {/* Spinning gear */}
      <g transform="translate(50, 29)" className="animate-[spin_3s_linear_infinite]" style={{ transformOrigin: "50px 29px" }}>
        <circle cx="0" cy="0" r="5" fill="none" stroke="hsl(186 100% 42%)" strokeWidth="2" />
        <rect x="-1" y="-7" width="2" height="4" fill="hsl(186 100% 42%)" />
        <rect x="-1" y="3" width="2" height="4" fill="hsl(186 100% 42%)" />
        <rect x="-7" y="-1" width="4" height="2" fill="hsl(186 100% 42%)" />
        <rect x="3" y="-1" width="4" height="2" fill="hsl(186 100% 42%)" />
      </g>
      
      {/* PII Redaction wipe effect */}
      <rect x="34" y="28" width="20" height="3" rx="1" fill="hsl(222 47% 15%)">
        <animate attributeName="width" values="20;0;20" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="34" y="39" width="20" height="3" rx="1" fill="hsl(222 47% 15%)">
        <animate attributeName="width" values="20;0;20" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </rect>
      
      <defs>
        <linearGradient id="runnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(218 88% 35%)" />
          <stop offset="100%" stopColor="hsl(218 88% 25%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Animated Streams Component - Flowing particles through conduit
export function AnimatedStreams({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 80 80" 
      className={cn("w-full h-full", className)}
      fill="none"
    >
      {/* Stream conduit */}
      <path 
        d="M10 40 C25 40 25 30 40 30 S55 40 70 40" 
        stroke="url(#streamGradient)" 
        strokeWidth="8" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M10 40 C25 40 25 30 40 30 S55 40 70 40" 
        stroke="hsl(222 47% 11%)" 
        strokeWidth="4" 
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Flowing particles */}
      <circle r="3" fill="hsl(186 100% 42%)">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#streamPath" />
        </animateMotion>
      </circle>
      <circle r="2.5" fill="hsl(28 100% 50%)">
        <animateMotion dur="1.5s" begin="0.5s" repeatCount="indefinite">
          <mpath href="#streamPath" />
        </animateMotion>
      </circle>
      <circle r="2" fill="hsl(218 88% 50%)">
        <animateMotion dur="1.5s" begin="1s" repeatCount="indefinite">
          <mpath href="#streamPath" />
        </animateMotion>
      </circle>
      
      {/* Second stream */}
      <path 
        d="M10 50 C25 50 25 55 40 55 S55 50 70 50" 
        stroke="url(#streamGradient2)" 
        strokeWidth="6" 
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      
      <circle r="2" fill="hsl(186 100% 60%)">
        <animateMotion dur="2s" repeatCount="indefinite">
          <mpath href="#streamPath2" />
        </animateMotion>
      </circle>
      
      <defs>
        <path id="streamPath" d="M10 40 C25 40 25 30 40 30 S55 40 70 40" />
        <path id="streamPath2" d="M10 50 C25 50 25 55 40 55 S55 50 70 50" />
        <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(218 88% 30%)" />
          <stop offset="100%" stopColor="hsl(186 100% 42%)" />
        </linearGradient>
        <linearGradient id="streamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(186 100% 42%)" />
          <stop offset="100%" stopColor="hsl(28 100% 50%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Animated Temporal Component - Workflow nodes pulsing
export function AnimatedTemporal({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 80 80" 
      className={cn("w-full h-full", className)}
      fill="none"
    >
      {/* Connection lines */}
      <line x1="20" y1="40" x2="35" y2="25" stroke="hsl(186 100% 42%)" strokeWidth="2" strokeDasharray="4 2">
        <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="20" y1="40" x2="35" y2="55" stroke="hsl(186 100% 42%)" strokeWidth="2" strokeDasharray="4 2">
        <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="35" y1="25" x2="55" y2="40" stroke="hsl(28 100% 50%)" strokeWidth="2" strokeDasharray="4 2">
        <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <line x1="35" y1="55" x2="55" y2="40" stroke="hsl(28 100% 50%)" strokeWidth="2" strokeDasharray="4 2">
        <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <line x1="55" y1="40" x2="70" y2="40" stroke="hsl(218 88% 50%)" strokeWidth="2" strokeDasharray="4 2">
        <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" begin="0.6s" repeatCount="indefinite" />
      </line>
      
      {/* Nodes */}
      <circle cx="20" cy="40" r="8" fill="url(#temporalGradient)">
        <animate attributeName="r" values="8;9;8" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="35" cy="25" r="6" fill="url(#temporalGradient)">
        <animate attributeName="r" values="6;7;6" dur="1.5s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="35" cy="55" r="6" fill="url(#temporalGradient)">
        <animate attributeName="r" values="6;7;6" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="55" cy="40" r="7" fill="url(#temporalGradient2)">
        <animate attributeName="r" values="7;8;7" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="40" r="5" fill="url(#temporalGradient2)">
        <animate attributeName="r" values="5;6;5" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      
      {/* Inner dots */}
      <circle cx="20" cy="40" r="3" fill="hsl(222 47% 11%)" />
      <circle cx="55" cy="40" r="3" fill="hsl(222 47% 11%)" />
      
      <defs>
        <linearGradient id="temporalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(218 88% 40%)" />
          <stop offset="100%" stopColor="hsl(186 100% 42%)" />
        </linearGradient>
        <linearGradient id="temporalGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(186 100% 42%)" />
          <stop offset="100%" stopColor="hsl(28 100% 50%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Animated PROXIMA AI Component - Neural brain with glowing nodes
export function AnimatedProximaAI({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 80 80" 
      className={cn("w-full h-full", className)}
      fill="none"
    >
      {/* Central brain shape */}
      <ellipse cx="40" cy="40" rx="18" ry="15" fill="url(#brainGradient)">
        <animate attributeName="ry" values="15;16;15" dur="2s" repeatCount="indefinite" />
      </ellipse>
      
      {/* Brain ridges */}
      <path d="M28 35 Q33 30 40 32 Q47 30 52 35" stroke="hsl(222 47% 20%)" strokeWidth="2" fill="none" />
      <path d="M30 42 Q35 38 40 40 Q45 38 50 42" stroke="hsl(222 47% 20%)" strokeWidth="2" fill="none" />
      
      {/* Orbiting agent nodes */}
      <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: "40px 40px" }}>
        <circle cx="40" cy="15" r="4" fill="hsl(186 100% 42%)">
          <animate attributeName="r" values="4;5;4" dur="1s" repeatCount="indefinite" />
        </circle>
        <line x1="40" y1="19" x2="40" y2="25" stroke="hsl(186 100% 42%)" strokeWidth="1" opacity="0.5" />
      </g>
      
      <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: "40px 40px", animationDelay: "-2.67s" }}>
        <circle cx="65" cy="40" r="4" fill="hsl(28 100% 50%)">
          <animate attributeName="r" values="4;5;4" dur="1s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <line x1="61" y1="40" x2="58" y2="40" stroke="hsl(28 100% 50%)" strokeWidth="1" opacity="0.5" />
      </g>
      
      <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: "40px 40px", animationDelay: "-5.33s" }}>
        <circle cx="40" cy="65" r="4" fill="hsl(218 88% 50%)">
          <animate attributeName="r" values="4;5;4" dur="1s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <line x1="40" y1="61" x2="40" y2="55" stroke="hsl(218 88% 50%)" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Glow effect */}
      <ellipse cx="40" cy="40" rx="22" ry="19" fill="none" stroke="hsl(186 100% 42%)" strokeWidth="1" opacity="0.3">
        <animate attributeName="rx" values="22;24;22" dur="2s" repeatCount="indefinite" />
        <animate attributeName="ry" values="19;21;19" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
      </ellipse>
      
      <defs>
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(218 88% 35%)" />
          <stop offset="50%" stopColor="hsl(186 100% 35%)" />
          <stop offset="100%" stopColor="hsl(218 88% 30%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Animated Dashboard Component - Charts with rising bars
export function AnimatedDashboard({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 80 80" 
      className={cn("w-full h-full", className)}
      fill="none"
    >
      {/* Dashboard frame */}
      <rect x="10" y="15" width="60" height="50" rx="4" fill="url(#dashGradient)" />
      <rect x="14" y="19" width="52" height="42" rx="2" fill="hsl(222 47% 11%)" />
      
      {/* Header */}
      <rect x="16" y="21" width="20" height="3" rx="1" fill="hsl(186 100% 42%)" opacity="0.5" />
      <circle cx="62" cy="22.5" r="2" fill="hsl(186 100% 42%)" className="animate-pulse" />
      
      {/* Chart bars */}
      <rect x="18" y="45" width="6" height="12" rx="1" fill="hsl(218 88% 40%)">
        <animate attributeName="height" values="0;12;12" dur="1s" fill="freeze" />
        <animate attributeName="y" values="57;45;45" dur="1s" fill="freeze" />
      </rect>
      <rect x="26" y="38" width="6" height="19" rx="1" fill="hsl(186 100% 42%)">
        <animate attributeName="height" values="0;19;19" dur="1s" begin="0.1s" fill="freeze" />
        <animate attributeName="y" values="57;38;38" dur="1s" begin="0.1s" fill="freeze" />
      </rect>
      <rect x="34" y="42" width="6" height="15" rx="1" fill="hsl(28 100% 50%)">
        <animate attributeName="height" values="0;15;15" dur="1s" begin="0.2s" fill="freeze" />
        <animate attributeName="y" values="57;42;42" dur="1s" begin="0.2s" fill="freeze" />
      </rect>
      <rect x="42" y="35" width="6" height="22" rx="1" fill="hsl(186 100% 42%)">
        <animate attributeName="height" values="0;22;22" dur="1s" begin="0.3s" fill="freeze" />
        <animate attributeName="y" values="57;35;35" dur="1s" begin="0.3s" fill="freeze" />
      </rect>
      <rect x="50" y="30" width="6" height="27" rx="1" fill="hsl(218 88% 40%)">
        <animate attributeName="height" values="0;27;27" dur="1s" begin="0.4s" fill="freeze" />
        <animate attributeName="y" values="57;30;30" dur="1s" begin="0.4s" fill="freeze" />
      </rect>
      <rect x="58" y="33" width="6" height="24" rx="1" fill="hsl(28 100% 50%)">
        <animate attributeName="height" values="0;24;24" dur="1s" begin="0.5s" fill="freeze" />
        <animate attributeName="y" values="57;33;33" dur="1s" begin="0.5s" fill="freeze" />
      </rect>
      
      {/* Trend line */}
      <path 
        d="M20 50 L28 43 L36 46 L44 40 L52 35 L60 37" 
        stroke="hsl(186 100% 60%)" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="60"
        strokeDashoffset="60"
      >
        <animate attributeName="stroke-dashoffset" values="60;0" dur="1.5s" begin="0.5s" fill="freeze" />
      </path>
      
      <defs>
        <linearGradient id="dashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(218 88% 35%)" />
          <stop offset="100%" stopColor="hsl(186 100% 35%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
