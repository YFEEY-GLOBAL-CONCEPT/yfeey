"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-40 bg-deep-midnight relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-matrix-dark opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-6 text-center cta-content relative z-10">
        <h2 className="mb-12 text-white italic">Work With Us</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            href="/contact"
            size="lg"
            className="rounded-full w-full sm:w-64"
          >
            Start a Project
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="rounded-full w-full sm:w-64 border-white/20 text-white"
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
