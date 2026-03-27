"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AuroraBackground from "@/components/ui/AuroraBackground";
import Image from "next/image";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 1.2,
          },
          "-=0.6",
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.05,
            duration: 1.5,
          },
          "-=1",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-svh flex items-center bg-white overflow-hidden "
    >
      <AuroraBackground variant="light" />

      <div className="container mx-auto px-6 md:px-10 max-w-7xl mt-24 lg:mt-0 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center md:text-left">
            <h1
              ref={titleRef}
              className="text-gray-900 mb-6 text-4xl md:text-5xl lg:text-7xl"
            >
              We Build the Systems Behind{" "}
              <span className=" text-primary">
                Ambitious Companies.
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-gray-600 max-w-xl md:mx-0 mx-auto text-lg"
            >
              YFEEY helps founders and businesses build powerful digital infrastructure designed for growth, performance, and long term success.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
