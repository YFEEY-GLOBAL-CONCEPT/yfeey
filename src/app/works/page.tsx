import WorksHero from "@/components/worksPage/WorksHero";
import WorksGrid from "@/components/worksPage/WorksGrid";

export const metadata = {
  title: "Selected Works",
  description:
    "A showcase of our architectural approach to digital refinement, where growth is engineered into every system we build.",
  openGraph: {
    title: "Yfeey Portfolio - Intelligent Design & Engineering",
    description: "Explore our latest projects in AI automation, custom software, and digital infrastructure.",
    url: "https://yfeey.com/works",
  },
};

const WorksPage = () => {
  return (
    <main className="min-h-screen bg-deep-midnight">
      <WorksHero />
      <WorksGrid />
    </main>
  );
};

export default WorksPage;
