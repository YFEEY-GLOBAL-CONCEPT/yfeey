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
      className="relative flex items-center bg-white overflow-hidden "
    >
      <AuroraBackground variant="light" />

      <div className="container mx-auto mt-24 lg:mt-0 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-gray-900 mb-6"
            >
              Building the Next <br /> Era of{" "}
              <span className=" text-primary">
                Digital Systems.
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-gray-600 max-w-xl lg:mx-0 mx-auto"
            >
              Yfeey is an architectural refinement studio. We engineer systems
              that transform fragmented workflows into clear, scalable digital
              infrastructure.
            </p>
          </div>

          <div
            ref={imageRef}
            className="flex-1 relative w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden "
          >
            <Image
              src="https://images.unsplash.com/photo-1681505531034-8d67054e07f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern architectural office interior"
              fill
              className="object-cover"
              priority
            />
            {/* Grain Overlay on image */}
            <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
