"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutNarrative = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
      })
        .from(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.5",
        )
        .from(
          [textRef1.current, textRef2.current],
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-40 bg-deep-midnight">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-16">
          <div className="flex flex-col gap-8">
            <h2 ref={titleRef} className="text-white leading-tight italic">
              Clarity is the byproduct of discipline.
            </h2>
            <div ref={lineRef} className="w-20 h-1 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p
              ref={textRef1}
              className="font-serif-brand text-xl text-white/90 leading-relaxed"
            >
              {`At Yfeey, we don't believe in building for today. We believe in
              building for what comes next. Our studio was founded to bridge the
              gap between creative ambition and technical robustness.`}
            </p>
            <p
              ref={textRef2}
              className="font-serif-brand text-xl text-white/90 leading-relaxed"
            >
              Every line of code we write and every interface we design is
              rooted in the principles of structural integrity. We strip away
              the unnecessary until only the essential remains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNarrative;
