"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMethodology = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".methodology-section", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.4,
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
    <section ref={containerRef} className="py-40 bg-deep-midnight">
      <div className="container mx-auto px-6 max-w-4xl space-y-32">
        {/* Methodology */}
        <div className="methodology-section flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <span className="text-badge text-primary py-1 px-3 border border-primary/20 rounded-full">
              Methodology
            </span>
            <h3 className="mt-6 text-white">How We Work</h3>
          </div>
          <div className="md:w-2/3">
            <p className="font-serif-brand text-xl text-gray-400 leading-relaxed italic">
              {
                "We approach every project with a diagnostic mindset. We don't start with solutions; we start with the architecture of the problem."
              }
            </p>
            <div className="mt-8 space-y-6">
              {[
                { num: "01", title: "Systemic Audit" },
                { num: "02", title: "Structural Blueprinting" },
                { num: "03", title: "Iterative Execution" },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <span className="font-display font-bold text-primary">
                    {step.num}
                  </span>
                  <p className="font-display text-sm uppercase tracking-wider font-semibold text-white/90">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement */}
        <div className="methodology-section flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <span className="text-badge text-primary py-1 px-3 border border-primary/20 rounded-full">
              Engagement
            </span>
            <h3 className="mt-6 text-white">The Kind of Work We Do</h3>
          </div>
          <div className="md:w-2/3">
            <p className="font-serif-brand text-xl text-gray-400 leading-relaxed italic">
              We thrive in complexity. From bespoke automation engines to
              multi-layered brand systems, we build foundations for ambitious
              companies.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="border-l-2 border-white/10 pl-6">
                <p className="text-badge text-gray-500 mb-2">Focus A</p>
                <p className="font-display text-sm font-bold text-white">
                  Enterprise Automation
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-6">
                <p className="text-badge text-gray-500 mb-2">Focus B</p>
                <p className="font-display text-sm font-bold text-white">
                  Structural Branding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethodology;
