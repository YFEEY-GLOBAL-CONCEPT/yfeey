
import WorksHero from "@/components/worksPage/WorksHero";
import WorksGrid from "@/components/worksPage/WorksGrid";
import CTA from "@/components/landingPage/CTA";

export const metadata = {
  title: "Our Works - Yfeey Studio",
  description:
    "A selection of our latest projects in AI automation, software development, and branding.",
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
