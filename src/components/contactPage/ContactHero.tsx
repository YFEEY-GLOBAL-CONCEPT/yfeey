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
      className="relative pt-40 pb-20 bg-deep-midnight overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 text-center">
  
        <h1 className="reveal text-white max-w-4xl mx-auto">
          Let’s Build the Systems of Tomorrow.
        </h1>
        <p className="reveal text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
          Whether you have a specific project in mind or just want to explore
          possibilities, we’re ready to help you engineer significant impact.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
