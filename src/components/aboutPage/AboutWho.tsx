"use client";

import React from "react";

const AboutWho = () => {
  return (
    <section className="bg-deepMidnight py-24 md:py-32 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              Who We Are
            </p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl max-w-md leading-[1.1]">
              Not an Agency. <br />
              <span className="text-primary">A Systems Partner.</span>
            </h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-6 text-white/70 text-lg md:text-xl leading-relaxed">
              <p>
                YFEEY was founded on a simple but powerful observation: most
                startups don&apos;t fail from a lack of ambition — they fail because
                their systems can&apos;t keep up with their vision. We exist to close
                that gap.
              </p>
              <p>
                We are a team of engineers, designers, strategists, and
                operators who believe that great technology should be invisible
                — quietly doing the work, removing friction, and compounding
                results over time.
              </p>
              <p>
                Every engagement we take on is approached with the same
                discipline: understand the problem deeply, design the solution
                precisely, and build it to last. We don&apos;t chase trends. We
                engineer outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWho;
