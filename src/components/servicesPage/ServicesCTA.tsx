"use client";

import React from "react";
import { Button } from "../ui/button";

const ServicesCTA = () => {
  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl text-center text-white">
        <h2 className="text-4xl md:text-6xl font-serif-brand mb-8 italic">
          Ready to Get Started?
        </h2>
        <p className="text-white/70 max-w-lg mx-auto mb-12 text-lg md:text-xl">
          Tell us what you&apos;re building. We&apos;ll tell you exactly how we&apos;d approach it.
        </p>
        <Button
          href="/contact"
          variant="outline"
          className="bg-white text-primary hover:bg-white/90 border-transparent text-lg py-6 px-10"
        >
          Book a Strategy Call &rarr;
        </Button>
      </div>
    </section>
  );
};

export default ServicesCTA;
