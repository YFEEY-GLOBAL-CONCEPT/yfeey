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
    <section
      ref={containerRef}
      className=" bg-white"
    >
      <div className="container mx-auto px-6  space-y-32">
        {/* Methodology */}
        <div className="methodology-section flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className=" text-gray-900">
              Our Structural Approach
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="font-serif-brand text-xl md:text-2xl text-gray-700">
              {
                "We approach every project with a diagnostic mindset. We don't start with solutions; we start with the architecture of the problem."
              }
            </p>
            <div className="mt-12 space-y-10 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-100 md:hidden lg:block"></div>

              {[
                {
                  num: "01",
                  title: "Systemic Audit",
                  desc: "A deep dive into existing workflows to identify fragmented processes and technical debt.",
                },
                {
                  num: "02",
                  title: "Structural Blueprinting",
                  desc: "Designing the logical framework that will govern your digital operations.",
                },
                {
                  num: "03",
                  title: "Iterative Execution",
                  desc: "Phased deployment of systems with continuous refinement and scalability testing.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="relative flex flex-col md:flex-row items-start gap-8 group"
                >
                  <div className="w-8 h-8 bg-white border-2 border-primary flex items-center justify-center z-10 group-hover:bg-primary transition-colors duration-300">
                    <span className="font-display text-[10px] font-bold text-primary group-hover:text-white transition-colors duration-300">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className=" font-medium text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethodology;
