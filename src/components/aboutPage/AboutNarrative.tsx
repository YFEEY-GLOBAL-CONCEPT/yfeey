"use client";

const AboutNarrative = () => {
  return (
    <section className="relative bg-deepMidnight overflow-hidden py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl relative z-10">
        <div className="space-y-6">
          <div className="max-w-lg">
            <h2 className="text-primary">
              Not an Agency. A Systems Partner.
            </h2>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-8">
            <p className="text-xl md:text-3xl text-white/90">
              YFEEY was founded on a simple but powerful observation: most startups don&apos;t fail from a lack of ambition — they fail because their systems can&apos;t keep up with their vision. We exist to close that gap.
            </p>
            <p className="text-lg md:text-xl text-white/70">
              We are a team of engineers, designers, strategists, and operators who believe that great technology should be invisible — quietly doing the work, removing friction, and compounding results over time.
            </p>
            <p className="text-lg md:text-xl text-white/70">
              Every engagement we take on is approached with the same discipline: understand the problem deeply, design the solution precisely, and build it to last. We don&apos;t chase trends. We engineer outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNarrative;
