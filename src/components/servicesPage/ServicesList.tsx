"use client";

import React from "react";

const services = [
  {
    number: "01",
    title: "AI & AUTOMATION",
    desc: "Intelligent systems that reduce manual overhead, accelerate decision-making, and unlock operational capacity — so your team can focus on what moves the needle.",
    details: "Custom chatbots & virtual assistants · Workflow automation · AI-generated content pipelines · Predictive analytics · Process optimization"
  },
  {
    number: "02",
    title: "CUSTOM SOFTWARE",
    desc: "Full-stack web and mobile platforms engineered for performance, security, and scale — from MVP to enterprise-grade infrastructure.",
    details: "Web applications · Mobile apps (iOS & Android) · API development · AI-integrated platforms · Enterprise systems · MVPs"
  },
  {
    number: "03",
    title: "CONTENT & GROWTH",
    desc: "Data-informed content strategies, AI-assisted production, and performance marketing designed to build authority and generate qualified demand.",
    details: "AI-generated video · Social media systems · SEO content · Paid advertising · Lead generation · Organic growth"
  },
  {
    number: "04",
    title: "TEAM AUGMENTATION",
    desc: "Senior developers, designers, and strategists embedded directly into your workflow — no recruitment lag, no culture friction.",
    details: "Embedded engineers · UI/UX designers · Technical PMs · QA specialists · DevOps engineers · Seamless integration"
  },
  {
    number: "05",
    title: "BRANDING",
    desc: "Brand identity systems built for clarity and longevity — from visual identity to messaging frameworks that position you for the market you're entering.",
    details: "Logo & visual identity · Brand guidelines · Messaging frameworks · Marketing materials · Naming · Brand strategy"
  },
  {
    number: "06",
    title: "TRAINING",
    desc: "Structured programmes in AI tools, digital workflows, and executive capability — equipping your team to operate at a higher level.",
    details: "AI literacy workshops · Executive development · Digital workflow training · Skill gap bridging · Team onboarding"
  }
];

const ServicesList = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-10">
       <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-px bg-gray-200 border border-gray-200">
            {services.map((service) => (
                <div key={service.number} className="grid grid-cols-1 lg:grid-cols-3 bg-white">
                    <div className="p-12 lg:border-r border-gray-100">
                        <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
                            {service.number}
                        </p>
                        <h2 className="text-gray-900 text-3xl font-display tracking-widest leading-none">
                            {service.title}
                        </h2>
                    </div>
                    <div className="lg:col-span-2 p-12 space-y-8 flex flex-col justify-center">
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            {service.desc}
                        </p>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide">
                            {service.details}
                        </p>
                    </div>
                </div>
            ))}
        </div>
       </div>
    </section>
  );
};

export default ServicesList;
