"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TrustedBy = () => {
  const logos = [
    { name: "TCN", image: "/images/tcn-logo.png" },
    { name: "KWARA STATE", image: "/images/kwara-state-logo.png" },
    { name: "UBEC", image: "/images/ubec-logo.png" },
    { name: "CHURCHGATE", image: "/images/churchgate.png" },
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      const el = marqueeRef.current;
      if (!el) return;

      const totalWidth = el.scrollWidth / 2;

      gsap.to(el, {
        x: `-=${totalWidth}`,
        duration: 20,
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

    return () => mm.revert();
  }, []);

  const duplicated = [...logos, ...logos]; // for seamless loop (mobile only)

  return (
    <div className="py-6 relative overflow-hidden">
      <div className="container mx-auto  lg:px-6 max-w-7xl relative z-10">
        <div className="text-center">
          <span className="text-lg font-semibold font-display tracking-widest uppercase text-muted-foreground/60 whitespace-nowrap">
            Who We Have Worked With
          </span>

          {/* Desktop: normal layout */}
          <div className="hidden mt-8 md:flex flex-wrap justify-center items-center gap-16 w-full duration-300">
            {logos.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </div>

          {/* Mobile: marquee */}
          <div className="md:hidden mt-4 overflow-hidden w-full max-w-[100vw]">
            <div ref={marqueeRef} className="flex gap-10 w-max">
              {duplicated.map((logo, i) => (
                <LogoItem key={`${logo.name}-${i}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoItem = ({ logo }: { logo: { name: string; image: string } }) => (
  <div className="flex items-center gap-3 cursor-pointer group shrink-0">
    <div className="relative h-24 w-24 overflow-hidden">
      <Image
        src={logo.image}
        alt={`${logo.name} logo`}
        fill
        className="object-contain"
      />
    </div>
    <span className="font-display font-bold text-lg text-primary transition-colors whitespace-nowrap">
      {logo.name}
    </span>
  </div>
);

export default TrustedBy;
