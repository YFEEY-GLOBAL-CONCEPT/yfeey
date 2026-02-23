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
    desc: "Leverage cutting-edge AI to automate content creation, lead generation, and customer service. Build custom chatbots, streamline workflows, and implement intelligent automation to transform your business operations.",
    icon: Bot,
  },
  {
    title: "Custom Software",
    desc: "Full websites, mobile apps, and AI-integrated platforms from MVPs to enterprise-scale systems.",
    icon: Terminal,
  },
  {
    title: "Content & Growth",
    desc: "AI-generated videos, faceless YouTube channels, automated social media, and content built for organic growth, lead generation, and paid advertising.",
    icon: TrendingUp,
  },
  {
    title: "Team Augmentation",
    desc: "Top-tier developers, designers, and technical specialists to augment your team and accelerate project delivery with seamless integration.",
    icon: UserPlus,
  },
  {
    title: "Branding",
    desc: "Professional logo design, brand guidelines, and marketing materials to build a cohesive visual identity system for your business.",
    icon: Palette,
  },
  {
    title: "Training",
    desc: "Training programs, executive development, and AI workshops designed to bridge the skill gap and empower your team.",
    icon: GraduationCap,
  },
];

const Services = () => {
  return (
    <section className="relative bg-deepMidnight py-24" id="services">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-12">
          <h1 className=" text-white mb-6 uppercase">Our Services</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between overflow-hidden border border-white bg-white/10 p-8 transition-all duration-500 lg:border-white/50 lg:bg-white/5 lg:hover:border-white lg:hover:bg-white/10 cursor-default"
              >
                <div className="absolute inset-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none">
                  <AuroraBackground />
                </div>

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
