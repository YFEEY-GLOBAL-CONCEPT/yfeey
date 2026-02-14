"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 1.2,
          },
          "-=0.6",
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-deep-midnight overflow-hidden pt-20"
    >
      {/* Background Morphing Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] hero-glow rounded-[100%] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span
          ref={badgeRef}
          className="text-badge text-primary mb-8 inline-block"
        >
          Established MMXXIV
        </span>
        <h1
          ref={titleRef}
          className="text-white tracking-tight max-w-5xl mx-auto leading-[1.1]"
        >
          A Studio Built on{" "}
          <span className="italic font-light">Structure.</span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-gray-400 mt-10 max-w-2xl mx-auto leading-relaxed text-body-large"
        >
          We specialize in the architectural refinement of digital systems,
          ensuring that growth is not just expected, but engineered.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
