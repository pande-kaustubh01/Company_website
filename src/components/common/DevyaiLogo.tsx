import React from 'react';

interface LogoProps {
  variant?: 'icon' | 'horizontal' | 'stacked';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const DevyaiLogoIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = 'w-10 h-10', 
  size 
}) => {
  return (
    <svg 
      viewBox="0 0 400 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      {/* Circuit Traces */}
      <g stroke="#00C2FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Quadrant Arcs */}
        <path d="M 68 180 A 136 136 0 0 1 180 68" />
        <path d="M 220 68 A 136 136 0 0 1 332 180" />
        <path d="M 332 220 A 136 136 0 0 1 220 332" />
        <path d="M 180 332 A 136 136 0 0 1 68 220" />

        {/* Crosshair Dividers */}
        <line x1="45" y1="200" x2="148" y2="200" strokeWidth="6.5" />
        <line x1="252" y1="200" x2="355" y2="200" strokeWidth="6.5" />
        <line x1="200" y1="45" x2="200" y2="148" strokeWidth="6.5" />
        <line x1="200" y1="252" x2="200" y2="355" strokeWidth="6.5" />

        {/* Top-Left Quadrant */}
        <path d="M 175 145 A 60 60 0 0 0 145 175" />
        <path d="M 185 115 A 90 90 0 0 0 115 185" />
        <path d="M 148 120 L 125 97" />
        <path d="M 160 90 A 115 115 0 0 0 90 160" />
        <path d="M 90 160 L 65 160" />
        <path d="M 105 130 L 80 115" />

        {/* Top-Right Quadrant */}
        <path d="M 225 145 A 60 60 0 0 1 255 175" />
        <path d="M 215 115 A 90 90 0 0 1 285 185" />
        <path d="M 245 130 L 275 130" />
        <path d="M 275 130 L 295 150" />
        <path d="M 240 90 A 115 115 0 0 1 310 160" />
        <path d="M 290 100 L 315 120" />

        {/* Bottom-Left Quadrant */}
        <path d="M 145 225 A 60 60 0 0 0 175 255" />
        <path d="M 115 215 A 90 90 0 0 0 185 285" />
        <path d="M 130 245 L 105 245" />
        <path d="M 105 245 L 85 265" />
        <path d="M 90 240 A 115 115 0 0 0 160 310" />
        <path d="M 120 290 L 95 315" />

        {/* Bottom-Right Quadrant */}
        <path d="M 255 225 A 60 60 0 0 1 225 255" />
        <path d="M 285 215 A 90 90 0 0 1 215 285" />
        <path d="M 255 270 L 275 295" />
        <path d="M 270 255 L 305 255" />
        <path d="M 310 240 A 115 115 0 0 1 240 310" />
        <path d="M 290 300 L 310 280" />
      </g>

      {/* Circuit Nodes / Terminals */}
      <g fill="#00C2FF">
        <circle cx="125" cy="97" r="7.5" />
        <circle cx="80" cy="115" r="7.5" />
        <circle cx="65" cy="160" r="7.5" />
        <circle cx="180" cy="85" r="6.5" />

        <circle cx="295" cy="150" r="7.5" />
        <circle cx="315" cy="120" r="7.5" />
        <circle cx="270" cy="90" r="6.5" />
        <circle cx="325" cy="155" r="6.5" />

        <circle cx="85" cy="265" r="7.5" />
        <circle cx="95" cy="315" r="7.5" />
        <circle cx="140" cy="315" r="6.5" />
        <circle cx="75" cy="225" r="6.5" />

        <circle cx="275" cy="295" r="7.5" />
        <circle cx="305" cy="255" r="7.5" />
        <circle cx="310" cy="280" r="7.5" />
        <circle cx="250" cy="325" r="6.5" />
      </g>

      {/* Center Hub */}
      <circle cx="200" cy="200" r="50" fill="#0A0A0B" stroke="#00C2FF" strokeWidth="6" />

      {/* Center 'D' */}
      <text 
        x="200" 
        y="219" 
        fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" 
        fontSize="54" 
        fontWeight="900" 
        fill="#FFFFFF" 
        textAnchor="middle"
      >
        D
      </text>
    </svg>
  );
};

export const DevyaiLogo: React.FC<LogoProps> = ({ 
  variant = 'horizontal', 
  className = '', 
  size = 'md' 
}) => {
  if (variant === 'icon') {
    const sizeMap = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    };
    return <DevyaiLogoIcon className={`${sizeMap[size]} ${className}`} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <DevyaiLogoIcon className="w-24 h-24 sm:w-28 sm:h-28" />
        <div className="mt-3">
          <div className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            DEVYAI TECHNOLOGY
          </div>
          <div className="text-xs sm:text-sm font-black text-[#00C2FF] tracking-[0.35em] uppercase mt-0.5">
            SERVICES
          </div>
        </div>
      </div>
    );
  }

  // Horizontal variant (default for Navbar and Headers)
  const iconSizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const titleSizeMap = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  const subtitleSizeMap = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-sm tracking-[0.32em]',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
        <DevyaiLogoIcon className={iconSizeMap[size]} />
      </div>
      <div className="flex flex-col">
        <span className={`font-black tracking-tight text-white uppercase leading-none ${titleSizeMap[size]}`}>
          DEVYAI TECHNOLOGY
        </span>
        <span className={`font-black text-[#00C2FF] uppercase mt-1 leading-none ${subtitleSizeMap[size]}`}>
          SERVICES
        </span>
      </div>
    </div>
  );
};
