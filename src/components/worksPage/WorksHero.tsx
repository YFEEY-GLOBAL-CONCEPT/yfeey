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
      <div className="container mx-auto px-6 md:px-10 max-w-7xl relative z-10 text-center">
        <h1 className="reveal text-primary mt-16 max-w-3xl mx-auto text-4xl md:text-5xl lg:text-7xl">
          Built With Intention. Designed to Perform.
        </h1>
        <p className="reveal text-textMain mt-8 max-w-2xl mx-auto text-lg md:text-xl">
          A selection of internal products and client systems showcasing how we design, build, and deploy scalable digital infrastructure across industries
        </p>
      </div>
    </section>
  );
};

export default WorksHero;
