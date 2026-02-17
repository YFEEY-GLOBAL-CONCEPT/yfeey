
import AboutHero from "@/components/aboutPage/AboutHero";
import AboutNarrative from "@/components/aboutPage/AboutNarrative";
import AboutValues from "@/components/aboutPage/AboutValues";
import AboutMethodology from "@/components/aboutPage/AboutMethodology";
import AboutTrust from "@/components/aboutPage/AboutTrust";
import AboutCTA from "@/components/aboutPage/AboutCTA";

export const metadata = {
  title: "About Yfeey - A Studio Built on Structure",
  description:
    "We specialize in the architectural refinement of digital systems, ensuring that growth is not just expected, but engineered.",
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white" >
      <AboutHero />
      <AboutNarrative />
      <AboutValues />
      <AboutMethodology />
      <AboutTrust />
      <AboutCTA />
    </main>
  );
};

export default AboutPage;
