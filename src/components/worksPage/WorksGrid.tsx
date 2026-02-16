"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "AI Automation", "Software Dev", "Branding", "Web3"];

const projects = [
  {
    title: "Nova Financial Core",
    category: "Software Dev",
    desc: "Reimagining institutional banking interfaces with predictive analytics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-U3xwV6KMH0nRfqzvcZpf65nZ6VMv5D7Ilo4ayXYgCsijaHGc2o6KplD0W7OBca-IELwmvZKMOWJ8q5zQ-UpjFZTjb-qezWApYFQj3wKi23bCYNOoqRsSArjCN7TQjqJM0aO1qBos_nAOSBZzyMsmnJGH3qbQti-4lZ-MjdhRkoVZ1UTkqEGVE5fJ_Oe85v9z613FKdcjyWDv1pCrNWnyV6AAko_af0dEo0TZNe8q8qKWC0DkaOpM9jHoTP5YYQGrYYPDLSvmx9Y",
  },
  {
    title: "Nexus AI",
    category: "AI Automation",
    desc: "Natural language processing interface for complex industrial data.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5dWcYvzR229_8TxitkkwcmDCjKruyRqfMOgeEttT4oU0eDBRCT2lXQqOY0mQV4QIkUYVTSYBVE33OIqVii2OSamKqC3rW7Cz1UgV_Xmx_406Pd3Khoz1bIohEl5umSzA4a2pceram1wqv_oXW6Lp4ZhbIlnXOCjQaYm441gW2Y8au5rC4eLNt713UpuGjEcgpJQOZomDTdkaKeOeGXdvRVjycvMLTle2VwDuJp0gGyJYfmkRIV0XtG7NZf1k8Esy5lo2ER3VDOuY",
  },
  {
    title: "Cipher Wallet",
    category: "Web3",
    desc: "Next-gen crypto asset management systems for global enterprises.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdue5MKHjnq39ibvs6A5SGAgxsGrY559OGmEmaDYltjMikd1CL7SY7ko0vO9NLOOIkWajzA2aA5Zn5mmDAskVy75Rpd9_k_k9WGUp7cRy_TC03JRsSJKgpeAoOFM5JJfiK0h7-DUakZOKqaB9DOe0XBecwaKWEINUMQkBHg9If07JdyQqU8NEol8EpK9q5dB5daXUhdG5EUL4bWnWVg5gg60BOrCffsTn4_EfTEa82cYqfAENUKmsVCOMbjOF0W4c5qYEaC2fyg2M",
  },
  {
    title: "Fortress Cloud",
    category: "Software Dev",
    desc: "Enterprise-grade threat detection visualization and response systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIVA5_iEy5D8yo77FtEW32AFyWbrh_IY5Cf8LVCHJFwDm6IuoSASs9nltUy40flAVNnsis2ZfOEYIDnrTIhnFnSuzavZRYNKpiQ0Y2_Fn7VCJmk6yn6CoXqiHygMhfs4iQJzhl6YaBoox7zZ0_eCq50x3biVE4-54N1uVpsHTbiFUo_NZKg0dq2k5CCiacZ4z5I_Fvi6wlUgMByO1z6bRJVJT3kcWoFCtVbgXZb0TxxCyBfiGplxTe_Xc-PgGdTMuTzE9iTwAxRJw",
  },
  {
    title: "Aura Branding",
    category: "Branding",
    desc: "A complete visual identity system for a forward-thinking AI research lab.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuGv9OiaQ7E9UoN-Wb-f-lQ_kY_O7_O8I8_9J8_7K-m_6_5_4_3_2_1_0", // Using a placeholder-like structure as the previous ones were long
  },
];

const WorksGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 bg-deep-midnight">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-primary border-primary text-white "
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
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
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-xl text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
