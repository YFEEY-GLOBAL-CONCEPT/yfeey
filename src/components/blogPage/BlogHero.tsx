"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AuroraBackground from "@/components/ui/AuroraBackground";

const BlogHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        delay: 0.2,
      }).from(
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
      className="relative pt-40 pb-20 bg-deepMidnight overflow-hidden"
    >
      <AuroraBackground className="opacity-30" />

      <div className="container mx-auto relative z-10 text-center">
        <h1 ref={titleRef} className="text-white max-w-4xl mx-auto mb-8">
           Insights for the <br />
<span className="text-primary ">Next Digital Era.</span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-white max-w-2xl mx-auto text-xl"
        >
          Deep dives into intelligent systems, startup scalability, and the architectural discipline that drives significant impact.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
