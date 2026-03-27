import { Metadata } from "next";
import Hero from "@/components/landingPage/Hero";
import Expertise from "@/components/landingPage/Expertise";
import Services from "@/components/landingPage/Services";
import Process from "@/components/landingPage/Process";
import Testimonials from "@/components/landingPage/Testimonials";

export const metadata: Metadata = {
  title: "Intelligent Automation & AI Software Studio",
  description:
    "Transforming ideas into scalable systems. Yfeey empowers startups and businesses to maximize efficiency through people, technology, AI, and smart automation.",
  openGraph: {
    title: "Yfeey - Intelligent Automation & AI Software Studio",
    description: "Engineering significant impact through people, technology, AI, and smart automation.",
    url: "https://yfeey.com",
  },
};

export default function Home() {
  return (
    <main className="grow">
      <Hero />
      <Expertise />
      <Process />
      {/* <Testimonials /> */}
    </main>
  );
}
