"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import AuroraBackground from "@/components/ui/AuroraBackground";
import DiagonalMarquee from "@/components/ui/DiagonalMarquee";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(badgeRef.current, { y: 20, opacity: 0, duration: 0.8 })
        .from(titleRef.current, { y: 40, opacity: 0 }, "-=0.4")
        .from(subtitleRef.current, { y: 30, opacity: 0 }, "-=0.6")
        .from(buttonsRef.current, { y: 20, opacity: 0 }, "-=0.6");
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-deep-midnight"
    >
      {/* Aurora Gradient Background */}
      <AuroraBackground />

      <div className="mx-auto w-full relative z-20 flex items-start flex-col lg:flex-row">
        <div className="w-full">
          <h1 ref={titleRef} className="mb-8 mt-16 max-w-4xl text-white">
            We Design Scalable <br /> Digital Systems
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-gray-400 max-w-xl leading-relaxed mb-8"
          >
            Yfeey is a digital agency focused on software, intelligent
            automation, and AI-driven systems. We help businesses replace
            fragmented tools and manual processes with technology that is clear,
            efficient, and built to scale.
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <Button withArrow href="/contact" className="w-full sm:w-auto">
              Start a Project
            </Button>
            <Button
              variant="outline"
              href="/consultation"
              className="w-full sm:w-auto"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
        {/* Diagonal crossing marquee */}
        <DiagonalMarquee className="lg:mt-16" />
      </div>
    </section>
  );
};

export default Hero;
