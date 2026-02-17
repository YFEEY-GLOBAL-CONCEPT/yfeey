"use client";

import React from "react";
import AuroraBackground from "@/components/ui/AuroraBackground";

const AboutNarrative = () => {
  return (
    <section className="relative bg-deep-midnight overflow-hidden">
      <AuroraBackground variant="dark" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
            <h2 className="text-white">
              Clarity is the <br />
              <span className="text-primary">
                byproduct of discipline.
              </span>
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-8">
            <p className="text-xl md:text-3xl text-white/90">
              {`At Yfeey, we don't believe in building for today. We believe in
              building for what comes next. Our studio was founded to bridge the
              gap between creative ambition and technical robustness. Every tool we implement and every interface we design is rooted in
              the principles of structural integrity. We strip away the
              unnecessary until only the essential remains, ensuring your
              digital systems are not just beautiful, but built to scale.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNarrative;
