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
      className=" bg-white relative overflow-hidden flex items-center justify-center font-display"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="cta-content relative bg-gray-900 md:p-24 overflow-hidden shadow-2xl text-center">
          {/* Concentrated Aurora inside the card */}
          <AuroraBackground className="opacity-40" />

          <div className="relative z-10">
            <h2 className="mb-12 text-white">
              Let{"'"}s build your next era.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                href="/contact"
                withArrow
              >
                Start a Project
              </Button>
              <Button
                href="/contact"
                variant="outline"
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
