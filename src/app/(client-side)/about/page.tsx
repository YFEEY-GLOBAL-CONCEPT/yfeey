import AboutHero from "@/components/aboutPage/AboutHero";
import AboutWho from "@/components/aboutPage/AboutWho";
import AboutMission from "@/components/aboutPage/AboutMission";
import AboutValues from "@/components/aboutPage/AboutValues";
import AboutStory from "@/components/aboutPage/AboutStory";
import AboutCTA from "@/components/aboutPage/AboutCTA";

export const metadata = {
  title: "About Our Studio",
  description:
    "YFEEY is a technology and systems company engineering the infrastructure that serious growth demands.",
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
      <AboutWho />
      {/* <AboutMission /> */}
      <AboutValues />
      <AboutStory />
      {/* <AboutCTA /> */}
    </main>
  );
};

export default AboutPage;
