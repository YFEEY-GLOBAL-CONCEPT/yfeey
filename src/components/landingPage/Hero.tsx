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
      className="relative min-h-screen bg-deepMidnight flex items-center pt-28 pb-20 overflow-hidden "
    >

      <div className="container mx-auto max-w-8xl relative z-20 flex items-start flex-col md:flex-row gap-12 lg:gap-0">
        <div className="w-full md:w-1/2">
          <h1 ref={titleRef} className="mb-8 mt-16 max-w-4xl text-white">
            We Love a Good Challenge.
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-gray-100 max-w-xl leading-relaxed mb-8 text-lg"
          >
            Transforming Ideas into Scalable Systems. Yfeey empowers startups, businesses, and individuals to maximize efficiency and impact through people, technology, AI, and smart automation.
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <Button variant="outline" withArrow href="https://forms.office.com/e/Jc2nz54Hw8" className="w-full sm:w-auto">
              Start a Project
            </Button>
            <Button
              variant="secondary"
              href="/contact"
              className="w-full sm:w-auto"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
        {/* Diagonal crossing marquee */}
        <DiagonalMarquee className="md:mt-16 md:flex-1" />
      </div>
    </section>
  );
};

export default Hero;