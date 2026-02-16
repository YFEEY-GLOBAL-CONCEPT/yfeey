import Hero from "@/components/landingPage/Hero";
import Expertise from "@/components/landingPage/Expertise";
import Services from "@/components/landingPage/Services";
import Works from "@/components/landingPage/Works";
import Process from "@/components/landingPage/Process";
import Testimonials from "@/components/landingPage/Testimonials";
import CTA from "@/components/landingPage/CTA";

export default function Home() {
  return (
    <main className="grow">
      <Hero />
      <Expertise />
      <Services />
      <Works />
      <Process />
      <Testimonials />
    </main>
  );
}
