import ServicesHero from "@/components/servicesPage/ServicesHero";
import ServicesList from "@/components/servicesPage/ServicesList";
import ServicesCTA from "@/components/servicesPage/ServicesCTA";

export const metadata = {
  title: "Our Services",
  description:
    "Everything you need to scale with confidence. Six integrated disciplines engineered for your growth.",
  openGraph: {
    title: "Services | YFEEY - Systems for Growth",
    description: "Discover our integrated approach to AI, Software, Growth, and more.",
    url: "https://yfeey.com/services",
  },
};

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesList />
      {/* <ServicesCTA /> */}
    </main>
  );
};

export default ServicesPage;
