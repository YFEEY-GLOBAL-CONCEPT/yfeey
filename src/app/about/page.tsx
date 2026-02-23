
import AboutHero from "@/components/aboutPage/AboutHero";
import AboutNarrative from "@/components/aboutPage/AboutNarrative";
import AboutValues from "@/components/aboutPage/AboutValues";
import AboutMethodology from "@/components/aboutPage/AboutMethodology";
import AboutTrust from "@/components/aboutPage/AboutTrust";
import AboutCTA from "@/components/aboutPage/AboutCTA";

export const metadata = {
  title: "About Our Studio",
  description:
    "Yfeey is an architectural refinement studio. We engineer systems that transform fragmented workflows into clear, scalable digital infrastructure.",
  openGraph: {
    title: "About Yfeey - Engineering Scalable Systems",
    description: "Discover our thoughtful approach to system architecture and digital refinement.",
    url: "https://yfeey.com/about",
  },
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
