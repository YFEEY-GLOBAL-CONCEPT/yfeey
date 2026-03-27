"use client";

import React from "react";

const services = [
  {
    number: "01",
    title: "AI & AUTOMATION",
    desc: "From automating daily operations to deploying AI agents that work around the clock we build systems that make your business faster, leaner, and more scalable.",
    details: "AI agents · Workflow automation · Custom chatbots · Process optimisation "
  },
  {
    number: "02",
    title: "CUSTOM SOFTWARE",
    desc: "From idea to launch. We build websites, apps, and MVPs that are fast, functional, and ready to scale from day one.",
    details: "Websites · Mobile apps · MVPs · Web application, API integrations"
  },
  {
    number: "03",
    title: "CONTENT & GROWTH",
    desc: "From building your online presence to driving consistent leads. we design content and growth systems that work hard for your business every day.",
    details: "Social media · SEO content · Paid advertising · Lead generation · AI-generated video "
  },
  {
    number: "04",
    title: "TEAM AUGMENTATION",
    desc: "Bridge global talent with your business.Access high quality African tech talent to build faster, operate efficiently, and scale with confidence.",
    details: "Developers · AI specialists · Product & project Manager · Virtual assistants"
  },
  {
    number: "05",
    title: "BRANDING",
    desc: "From identity to positioning, we create brands that communicate clearly, stand out, and remain consistent across every touchpoint.",
    details: "Logo & visual identity · Brand guidelines · Messaging · Naming · Brand strategy"
  },
  {
    number: "06",
    title: "TRAINING",
    desc: "With a background in corporate training, we deliver programmes in AI, technology, and leadership  equipping teams to operate effectively in a modern digital environment.Delivered onsite and remotely, tailored to each organisation.",
    details: "AI training · Technical training · Leadership development · Workflow systems"
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
                      `  {/* <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
                            {service.number}
                        </p>` */}
                        <h2 className="text-gray-900 text-3xl font-display tracking-widest leading-none">
                            {service.title}
                        </h2>
                    </div>
                    <div className="lg:col-span-2 p-12 space-y-8 flex flex-col justify-center">
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            {service.desc}
                        </p>
                        <p className="text-primary text-sm md:text-base leading-relaxed tracking-wide">
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
