import React from "react";

interface AuroraBackgroundProps {
  className?: string;
}

const AuroraBackground = ({ className = "" }: AuroraBackgroundProps) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-linear-to-br from-deep-midnight via-[#1a1035] to-deep-midnight"></div>

      {/* Aurora blob 1 */}
      <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-primary/40 blur-[140px] animate-aurora-1"></div>

      {/* Aurora blob 2 */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[#5b3a9e]/45 blur-[120px] animate-aurora-2"></div>

      {/* Aurora blob 3 — accent */}
      <div className="absolute top-[20%] right-[5%] w-[50%] h-[50%] rounded-full bg-[#6d4bbf]/35 blur-[100px] animate-aurora-3"></div>

      {/* Silky mesh gradient */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(128,98,192,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(91,58,158,0.2) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(109,75,191,0.25) 0%, transparent 50%)",
        }}
      ></div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 w-full h-full mix-blend-overlay opacity-40 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
    </div>
  );
};

export default AuroraBackground;
