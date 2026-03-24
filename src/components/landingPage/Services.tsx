"use client";

import React from "react";
import {
  Bot,
  Terminal,
  TrendingUp,
  UserPlus,
  Palette,
  GraduationCap,
  MoveRight,
} from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";

const services = [
  {
    title: "AI & Automation",
    desc: "Intelligent systems that reduce manual overhead, accelerate decision-making, and unlock operational capacity — so your team can focus on what moves the needle.",
    icon: Bot,
  },
  {
    title: "Custom Software",
    desc: "Full-stack web and mobile platforms engineered for performance, security, and scale — from MVP to enterprise-grade infrastructure.",
    icon: Terminal,
  },
  {
    title: "Content & Growth",
    desc: "Data-informed content strategies, AI-assisted production, and performance marketing designed to build authority and generate qualified demand.",
    icon: TrendingUp,
  },
  {
    title: "Team Augmentation",
    desc: "Senior developers, designers, and strategists embedded directly into your workflow — no recruitment lag, no culture friction.",
    icon: UserPlus,
  },
  {
    title: "Branding",
    desc: "Brand identity systems built for clarity and longevity — from visual identity to messaging frameworks that position you for the market you're entering.",
    icon: Palette,
  },
  {
    title: "Training",
    desc: "Structured programmes in AI tools, digital workflows, and executive capability — equipping your team to operate at a higher level.",
    icon: GraduationCap,
  },
];

const Services = () => {
  return (
    <section className="relative bg-deepMidnight py-24" id="services">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-12 px-6 lg:px-0">
          <h1 className="text-white mb-6 uppercase text-4xl md:text-5xl lg:text-7xl">Our Services</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between hover:primary-dark duration-500 overflow-hidden border border-white bg-white/10 p-8 transition-all duration-500 lg:border-white/50 lg:bg-white/5 lg:hover:border-white lg:hover:bg-white/10 cursor-default"
              >
                {/* <div className="absolute inset-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none">
                  <AuroraBackground />
                </div> */}

                <div className="relative z-10 mb-4 w-fit ">
                  <Icon strokeWidth={1} className="h-8 w-8 text-white" />
                </div>

                <div className="relative z-10 mb-4 space-y-4">
                  <h3 className=" uppercase tracking-wide text-white">
                    {service.title}
                  </h3>
                  <hr className="border-white/50" />
                  <p className="text-sm leading-relaxed text-zinc-400 max-w-[90%]">
                    {service.desc}
                  </p>
                </div>

                <div className="relative mt-4 z-10 flex justify-end">
                  <MoveRight
                    strokeWidth={1.5}
                    className="h-6 w-8 text-white transition-all duration-500 translate-x-0 opacity-100 lg:-translate-x-4 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
