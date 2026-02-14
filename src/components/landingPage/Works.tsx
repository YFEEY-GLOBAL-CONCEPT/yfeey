"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Nova Financial Core",
    category: "FinTech",
    desc: "Reimagining institutional banking interfaces with predictive analytics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-U3xwV6KMH0nRfqzvcZpf65nZ6VMv5D7Ilo4ayXYgCsijaHGc2o6KplD0W7OBca-IELwmvZKMOWJ8q5zQ-UpjFZTjb-qezWApYFQj3wKi23bCYNOoqRsSArjCN7TQjqJM0aO1qBos_nAOSBZzyMsmnJGH3qbQti-4lZ-MjdhRkoVZ1UTkqEGVE5fJ_Oe85v9z613FKdcjyWDv1pCrNWnyV6AAko_af0dEo0TZNe8q8qKWC0DkaOpM9jHoTP5YYQGrYYPDLSvmx9Y",
    colSpan: "md:col-span-2",
  },
  {
    title: "Nexus AI",
    category: "AI Model",
    desc: "Natural language processing interface for complex data.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5dWcYvzR229_8TxitkkwcmDCjKruyRqfMOgeEttT4oU0eDBRCT2lXQqOY0mQV4QIkUYVTSYBVE33OIqVii2OSamKqC3rW7Cz1UgV_Xmx_406Pd3Khoz1bIohEl5umSzA4a2pceram1wqv_oXW6Lp4ZhbIlnXOCjQaYm441gW2Y8au5rC4eLNt713UpuGjEcgpJQOZomDTdkaKeOeGXdvRVjycvMLTle2VwDuJp0gGyJYfmkRIV0XtG7NZf1k8Esy5lo2ER3VDOuY",
    colSpan: "md:col-span-1",
  },
  {
    title: "Cipher Wallet",
    category: "Web3",
    desc: "Next-gen crypto asset management systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdue5MKHjnq39ibvs6A5SGAgxsGrY559OGmEmaDYltjMikd1CL7SY7ko0vO9NLOOIkWajzA2aA5Zn5mmDAskVy75Rpd9_k_k9WGUp7cRy_TC03JRsSJKgpeAoOFM5JJfiK0h7-DUakZOKqaB9DOe0XBecwaKWEINUMQkBHg9If07JdyQqU8NEol8EpK9q5dB5daXUhdG5EUL4bWnWVg5gg60BOrCffsTn4_EfTEa82cYqfAENUKmsVCOMbjOF0W4c5qYEaC2fyg2M",
    colSpan: "md:col-span-1",
  },
  {
    title: "Fortress Cloud",
    category: "Cybersecurity",
    desc: "Enterprise-grade threat detection visualization.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIVA5_iEy5D8yo77FtEW32AFyWbrh_IY5Cf8LVCHJFwDm6IuoSASs9nltUy40flAVNnsis2ZfOEYIDnrTIhnFnSuzavZRYNKpiQ0Y2_Fn7VCJmk6yn6CoXqiHygMhfs4iQJzhl6YaBoox7zZ0_eCq50x3biVE4-54N1uVpsHTbiFUo_NZKg0dq2k5CCiacZ4z5I_Fvi6wlUgMByO1z6bRJVJT3kcWoFCtVbgXZb0TxxCyBfiGplxTe_Xc-PgGdTMuTzE9iTwAxRJw",
    colSpan: "md:col-span-2",
  },
];

const Works = () => {
  return (
    <section className="relative bg-primary" id="work">
      <div className="absolute inset-0 bg-dot-matrix-dark opacity-[0.05] pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div>
            <h1 className="text-white mb-4 uppercase">Selected Works</h1>
            <p className="text-white max-w-xl">
              Case studies in automation and intelligent design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[500px]">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden ${project.colSpan} transition-all duration-500 bg-gray-900 border border-white/5`}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 p-6 lg:p-12 z-20 w-full">
                <div className="flex gap-3 mb-6">
                  <span className="px-5 py-1.5 text-badge text-white bg-primary rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-card-title-lg text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 max-w-md opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">
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


export default Works;