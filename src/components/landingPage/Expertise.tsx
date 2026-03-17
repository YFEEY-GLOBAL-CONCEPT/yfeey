"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrustedBy from "./TrustedBy";

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
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
      className="relative bg-white py-24"
      id="expertise"
    >
      <div className="flex flex-col items-center justify-center gap-16">
      <div className="container mx-auto max-w-7xl px-6 md:px-10 text-center relative z-10">
          <h2 className="uppercase text-text-main mb-8 text-4xl md:text-5xl lg:text-6xl">
            Our Thoughtful <br />
            Approach
          </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
            <p
              ref={textRef}
              className="text-display-philosophy text-text-main relative z-10 mx-auto text-xl md:text-2xl lg:text-3xl leading-relaxed"
            >
              We don’t just write code we engineer outcomes. <br />In a world
              drowning in noise and inefficiency, Yfeey strips away the
              complexity. We design systems that are{" "}
              <span className="text-primary font-medium not-italic">
                precise, scalable, and inherently logical
              </span>
              .
            </p>
          </div>
        </div>
        <div>
          <TrustedBy />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
