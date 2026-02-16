"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WorksHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".reveal", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative pb-8 pt-32 bg-deep-midnight overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="reveal text-white max-w-3xl mx-auto">
          Engineering Impact Through Intelligent Design.
        </h1>
        <p className="reveal text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
          A showcase of our architectural approach to digital refinement, where
          growth is engineered into every system we build.
        </p>
      </div>
    </section>
  );
};

export default WorksHero;
