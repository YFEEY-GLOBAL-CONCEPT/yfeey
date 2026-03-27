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
    title: "Precision",
    desc: "We are deliberate in everything we build. Vague briefs become clear architectures. Complex problems become elegant solutions.",
    icon: Eye,
  },
  {
    title: "Scalability",
    desc: "We build for where you're going, not just where you are. Every system we design is capable of growing with your business.",
    icon: Hourglass,
  },
  {
    title: "Integrity",
    desc: "We say what we mean, deliver what we promise, and measure our success by the measurable impact we create for our clients.",
    icon: Network,
  },
  {
    title: "Partnership",
    desc: "We don't hand things over and disappear. We embed, collaborate, and stay accountable for outcomes not just deliverables.",
    icon: HandshakeIcon,
  },
];

const AboutValues = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">What We Stand For</p>
          <h2 className="text-gray-900 text-4xl md:text-5xl">
           The YFEEY <span className="text-primary">Way</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {valueItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-6 p-10 bg-white group hover:bg-gray-50 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 text-xl font-bold mb-4 uppercase">{item.title}</h3>
                  <p className="text-gray-600 text-base">
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
