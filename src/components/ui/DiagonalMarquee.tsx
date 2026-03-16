"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface MarqueeStripProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number; // lower = faster
}

const MarqueeStrip = ({
  items,
  direction = "left",
  speed = 20,
}: MarqueeStripProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const el = containerRef.current;
      if (!el) return;

      const totalWidth = el.scrollWidth / 2;

      gsap.to(el, {
        x: direction === "left" ? `-=${totalWidth}` : `+=${totalWidth}`,
        duration: speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const wrapped = gsap.utils.wrap(-totalWidth, 0, parseFloat(x));
            return wrapped;
          }),
        },
      });
    });

    return () => ctx.revert();
  }, [direction, speed]);

  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div ref={containerRef} className="flex gap-6 min-w-max">
        {duplicated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/30 bg-white/10 text-primary text-xs font-display uppercase tracking-[0.15em] shrink-0 backdrop-blur-sm hover:bg-white/90 hover:text-primary transition-all duration-300 shadow-sm"
          >
            <span className="w-1 h-1 rounded-full bg-primary/60"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

interface DiagonalMarqueeProps {
  className?: string;
}

const specializations = [
  "Backend",
  "Frontend",
  "Sales Funnel",
  "AI",
  "Graphics",
  "UI/UX Design",
  "Data Analytics",
  "Cloud Infra",
  "DevOps",
  "Mobile Apps",
];

const services = [
  "AI Automation",
  "Digital Marketing",
  "Tech Training",
  "Software Development",
  "Brand Strategy",
  "System Architecture",
  "Content & Growth",
  "Team Augmentation",
  "Consulting",
  "Cyber Security",
];

const DiagonalMarquee = ({ className = "" }: DiagonalMarqueeProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
      style={{ height: "320px" }}
    >
      {/* Strip 1 */}
      <div
        className="absolute w-[140%] left-[-20%]"
        style={{
          top: "30%",
          transform: "rotate(-12deg)",
        }}
      >
        <MarqueeStrip items={specializations} direction="left" speed={25} />
      </div>

      {/* Strip 2 */}
      <div
        className="absolute w-[140%] left-[-20%]"
        style={{
          top: "60%",
          transform: "rotate(12deg)",
        }}
      >
        <MarqueeStrip items={services} direction="right" speed={30} />
      </div>


    </div>
  );
};

export default DiagonalMarquee;
