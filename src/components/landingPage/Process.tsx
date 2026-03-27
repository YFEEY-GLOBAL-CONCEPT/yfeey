"use client";

import { Search, Hammer, Rocket, MonitorCog } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    desc: "We audit your business, map your constraints, and identify the highest-leverage opportunities for technology and automation.",
  },
  {
    num: "02",
    icon: MonitorCog,
    title: "System Design",
    desc: "We architect the solution defining the technical framework, tooling, and integration strategy aligned to your goals and growth stage.",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Build",
    desc: "Agile, structured development with clear milestones, quality standards, and stakeholder visibility throughout.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch",
    desc: "Seamless deployment with handover documentation, team onboarding, and performance monitoring to protect your investment from day one.",
  },
];

const Process = () => {
  return (
    <section
      className="py-20 md:py-32 relative bg-background-alt border-t border-gray-100"
      id="process"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-text-main uppercase text-4xl md:text-5xl lg:text-7xl">
            The Process
            <br />
            <span className="text-primary block md:inline md:ml-2">
              to Excellence
            </span>
          </h2>
          <p className="text-text-muted mt-4 max-w-md text-lg">
            A structured engagement model designed for clarity, speed, and measurable
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="process-step relative flex flex-col gap-8 p-4 lg:p-12 bg-primary"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-6xl lg:text-7xl font-extrabold text-white">
                  {step.num}
                </span>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-white mb-4 tracking-tight text-xl lg:text-2xl">{step.title}</h2>
                <p className="text-white/80 text-sm lg:text-base">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
