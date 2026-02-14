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
      className="relative pt-40 pb-20 bg-deep-midnight overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="reveal text-badge text-primary mb-6 inline-block uppercase tracking-widest">
          Portfolio
        </span>
        <h1 className="reveal text-white max-w-4xl mx-auto leading-tight italic">
          Engineering Impact Through <br />
          <span className="not-italic font-bold">Intelligent Design.</span>
        </h1>
        <p className="reveal text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
          A showcase of our architectural approach to digital refinement, where
          growth is engineered into every system we build.
        </p>
      </div>
    </section>
  );
};

export default WorksHero;
