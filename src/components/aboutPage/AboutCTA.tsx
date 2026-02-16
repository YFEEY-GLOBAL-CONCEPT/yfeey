"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import AuroraBackground from "@/components/ui/AuroraBackground";

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        opacity: 0,
        y: 40,
        duration: 1.2,
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
      className="py-32 md:py-48 bg-white relative overflow-hidden flex items-center justify-center font-display"
    >
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="cta-content relative bg-gray-900 rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl text-center">
          {/* Concentrated Aurora inside the card */}
          <AuroraBackground className="opacity-40" />

          <div className="relative z-10">
            <h5 className="text-primary/80 uppercase tracking-[0.3em] font-bold mb-8 text-xs">
              Ready to begin?
            </h5>
            <h2 className="mb-12 text-white font-serif-brand italic font-light leading-tight tracking-tight text-4xl md:text-6xl">
              Let{"'"}s build your{" "}
              <span className="not-italic font-medium">next era.</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                href="/contact"
                size="lg"
                className="rounded-2xl w-full sm:w-64 py-6"
                withArrow
              >
                Start a Project
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="rounded-2xl w-full sm:w-64 py-6 border-white/20 text-white hover:bg-white/5 active:scale-95 transition-all"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
