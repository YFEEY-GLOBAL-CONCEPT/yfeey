import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-10 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className=" text-text-main mb-4 uppercase text-4xl md:text-5xl lg:text-7xl">
            Ready to Automate <br />
            <span className="text-primary">
              the Future?
            </span>
          </h1>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto text-lg">
            Join the forward-thinking companies leveraging Yfeey&apos;s
            intelligent solutions to reclaim time and enhance capability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto" withArrow href="/contact">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
