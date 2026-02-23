import React from "react";

interface AuroraBackgroundProps {
  className?: string;
  variant?: "dark" | "light";
}

const AuroraBackground = ({
  className = "",
  variant = "dark",
}: AuroraBackgroundProps) => {
  const isLight = variant === "light";

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Base gradient layer */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          isLight
            ? "bg-linear-to-br from-white via-background-alt to-white"
            : "bg-linear-to-br from-deepMidnight via-[#1a1035] to-deepMidnight"
        }`}
      ></div>

      {/* Aurora blob 1 */}
      <div
        className={`absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full blur-[140px] animate-aurora-1 transition-opacity duration-700 ${
          isLight ? "bg-primary/20 opacity-80" : "bg-primary/40"
        }`}
      ></div>

      {/* Aurora blob 2 */}
      <div
        className={`absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[120px] animate-aurora-2 transition-opacity duration-700 ${
          isLight ? "bg-[#5b3a9e]/25 opacity-70" : "bg-[#5b3a9e]/45"
        }`}
      ></div>

      {/* Aurora blob 3 — accent */}
      <div
        className={`absolute top-[20%] right-[5%] w-[50%] h-[50%] rounded-full blur-[100px] animate-aurora-3 transition-opacity duration-700 ${
          isLight ? "bg-[#6d4bbf]/20 opacity-60" : "bg-[#6d4bbf]/35"
        }`}
      ></div>

      {/* Silky mesh gradient */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLight ? "opacity-50" : "opacity-50"
        }`}
        style={{
          background: isLight
            ? "radial-gradient(ellipse at 20% 50%, rgba(128,98,192,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(91,58,158,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(109,75,191,0.12) 0%, transparent 50%)"
            : "radial-gradient(ellipse at 20% 50%, rgba(128,98,192,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(91,58,158,0.2) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(109,75,191,0.25) 0%, transparent 50%)",
        }}
      ></div>

      {/* Grain texture overlay */}
      <div
        className={`absolute inset-0 w-full h-full mix-blend-overlay pointer-events-none transition-opacity duration-700 ${
          isLight ? "opacity-60" : "opacity-40"
        }`}
      >
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
