import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { SanityWork } from "@/sanity/types";

interface WorksGridProps {
  works: SanityWork[];
}

const WorksGrid = ({ works }: WorksGridProps) => {

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.length > 0 ? (
            works.map((work) => (
              <Link
                key={work._id}
                href={work.link || "#"}
                target="_blank"
                className="group relative flex flex-col bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  {work.mainImage ? (
                    <Image
                      src={urlFor(work.mainImage).width(800).height(500).url()}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : work.imageUrl ? (
                    <Image
                      src={work.imageUrl}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/40">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <h3 className="text-xl text-primary mb-1">{work.title}</h3>
                  <p className="text-textMain text-sm leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-white/50">
              <p>No works found yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorksGrid;
