"use client";

import React from "react";
import {
  Eye,
  Hourglass,
  Network,
  Handshake as HandshakeIcon,
} from "lucide-react";

const valueItems = [
  {
    title: "Clarity",
    desc: "Eliminating digital noise to reveal the core purpose of every interaction and system.",
    icon: Eye,
  },
  {
    title: "Longevity",
    desc: "Engineering solutions designed to withstand the rapid evolution of digital trends.",
    icon: Hourglass,
  },
  {
    title: "Structure",
    desc: "A rigid adherence to logical systems, architectural excellence, and clean code.",
    icon: Network,
  },
  {
    title: "Partnership",
    desc: "Acting as a strategic extension of your team to ensure long-term structural success.",
    icon: HandshakeIcon,
  },
];

const AboutValues = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <h5 className="text-primary mb-4">Our Values</h5>
          <h2 className="text-gray-900 max-w-xl">
            Anchoring our creative output in discipline.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-8 p-12 bg-primary border-l-2 border-white/10 group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center justify-end">
                  <Icon className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-white mb-4">{item.title}</h3>
                  <p className="text-white/80">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
