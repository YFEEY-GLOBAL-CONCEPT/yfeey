"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactHero = () => {
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
      className="relative pt-32 md:pt-48 pb-12 md:pb-20 bg-deep-midnight overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 text-center">
  
        <h1 className="reveal text-primary max-w-4xl mx-auto text-4xl md:text-5xl lg:text-7xl">
          Let’s Build the Systems of Tomorrow.
        </h1>
        <p className="reveal text-textMain mt-8 max-w-2xl mx-auto text-lg md:text-xl">
          Whether you have a specific project in mind or just want to explore
          possibilities, we’re ready to help you engineer significant impact.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
