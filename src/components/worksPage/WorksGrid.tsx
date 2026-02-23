"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


const projects = [
  {
    title: "Nova Financial Core",
    desc: "Reimagining institutional banking interfaces with predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Nexus AI",
    desc: "Natural language processing interface for complex industrial data.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Cipher Wallet",
    desc: "Next-gen crypto asset management systems for global enterprises.",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Fortress Cloud",
    desc: "Enterprise-grade threat detection visualization and response systems.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Aura Branding",
    desc: "A complete visual identity system for a forward-thinking AI research lab.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
  },
];

const WorksGrid = () => {

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
              <div className="py-8">
                <h3 className="text-xl text-primary mb-4">{project.title}</h3>
                <p className="text-textMain text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksGrid;
