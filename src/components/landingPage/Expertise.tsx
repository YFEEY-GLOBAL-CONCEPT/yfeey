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
      className="relative bg-white"
      id="expertise"
    >
      <div className="flex flex-col items-center justify-center h-full gap-10">
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <h2 className="text-text-main mb-6">
            Our Thoughtful <br />
            Approach
          </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
            <p
              ref={textRef}
              className="text-display-philosophy text-text-main relative z-10 mx-auto text-2xl"
            >
              We don’t just write code we engineer outcomes. In a world
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
