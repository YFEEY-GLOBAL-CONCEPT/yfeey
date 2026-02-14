"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutTrust = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".trust-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-32 bg-deep-midnight text-white overflow-hidden relative"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="trust-reveal">
            <h2 className="text-white leading-tight mb-8">
              Built on trust. <br />
              Sustained by results.
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Our clients aren{"'"}t just names in a database; they are partners in
              a long-term vision of digital excellence. We value reliability
              over rapid expansion.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="text-3xl font-bold font-display text-primary">
                  98%
                </p>
                <p className="text-badge text-gray-500 mt-2">Retention Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-display text-primary">
                  24/7
                </p>
                <p className="text-badge text-gray-500 mt-2">
                  Systems Monitoring
                </p>
              </div>
            </div>
          </div>
          <div className="trust-reveal bg-white/5 border border-white/10 p-12 rounded-3xl">
            <p className="font-serif-brand text-2xl italic mb-8">
              {`"Yfeey transformed our chaotic internal workflows into a seamless,
              high-performance engine. Their focus on structure is unmatched." `}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full"></div>
              <div>
                <p className="font-bold text-sm">Strategic Lead</p>
                <p className="text-xs text-gray-500">Global FinTech Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
