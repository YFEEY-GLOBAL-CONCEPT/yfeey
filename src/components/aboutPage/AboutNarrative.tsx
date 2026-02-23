"use client";

const AboutNarrative = () => {
  return (
    <section className="relative bg-deepMidnight overflow-hidden py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl relative z-10">
        <div className="space-y-6">
          <div className="max-w-lg">
            <h2 className="text-primary">
              Clarity is the byproduct of discipline.
            </h2>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-8">
            <p className="text-xl md:text-3xl text-white/90">
              {`At Yfeey, we don't believe in building for today. We believe in
              building for what comes next. Our studio was founded to bridge the
              gap between creative ambition and technical robustness. Every tool we implement and every interface we design is rooted in
              the principles of structural integrity. We strip away the
              unnecessary until only the essential remains, ensuring your
              digital systems are not just beautiful, but built to scale.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNarrative;
