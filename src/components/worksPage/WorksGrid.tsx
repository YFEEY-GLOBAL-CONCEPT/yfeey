import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


const projects = [
  {
    title: "Yfeey Interior",
    image:
      "/images/yfeey-interior.png",
    link: "https://yfeey.space",
  },
  {
    title: "Yfeey Hub",
    image:
      "/images/resturanthub.png",
    link: "https://yfeey.online",
  },
  {
    title: "Yfeey Store",
    image:
      "/images/yfeey-store.png",
    link: "https://yfeey.store",
  },
  {
    title: "Seaf Legal",
    image:
      "/images/seaflegal.png",
    link: "https://seaflegal.com",
  },
  {
    title: "Tracmedy",
    image:
      "/images/tracmedy.png",
    link: "https://tracmedy.com",
  }
];

const WorksGrid = () => {

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={project.link}
              target="_blank"
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
              <div className="py-4">
                <h3 className="text-xl text-primary mb-4">{project.title}</h3>
                {/* <p className="text-textMain text-sm leading-relaxed">
                  {project.desc}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksGrid;
