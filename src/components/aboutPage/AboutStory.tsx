"use client";

import React from "react";

const AboutStory = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-12">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
                Our Story
              </p>
              <h2 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl max-w-md">
                Where We <span className="text-primary italic">Started</span>
              </h2>
              <p className="mt-4">Built to solve real growth problems. Now helping businesses scale with better systems.</p>
            </div>
            
            <div className="pt-8 border-l-4 border-primary pl-10">
              <div className="text-6xl md:text-8xl font-bold text-primary leading-none mb-2">1+</div>
              <p className="text-gray-500 font-semibold tracking-wide uppercase text-sm">
                Years building systems that scale
              </p>
            </div>
          </div>
          
          <div className="space-y-8 text-gray-600 text-lg md:text-xl ">
            <p>
              YFEEY began as a response to a market gap that kept showing up in the same form: talented founders with real vision, held back by fragmented tools, disconnected teams, and digital systems that weren&apos;t built to scale.
            </p>
            <p>
              What started as a small consultancy has grown into a multi-disciplinary firm delivering across AI and automation, custom software, brand strategy, content systems, and team augmentation working with clients ranging from early-stage startups to government institutions.
            </p>
            <p>
              Today, we operate across two continents, with a team that brings together technical depth, creative rigour, and operational experience to every project we take on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
