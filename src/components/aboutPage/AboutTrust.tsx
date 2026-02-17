"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AuroraBackground from "@/components/ui/AuroraBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom type for swiper navigation
import type { Swiper as SwiperType } from "swiper";

const testimonials = [
  {
    quote:
      "Yfeey transformed our chaotic internal workflows into a seamless, high-performance engine. Their focus on structure is unmatched.",
    author: "Strategic Lead",
    role: "Global FinTech Partner",
    initials: "SL",
  },
  {
    quote:
      "The architectural approach Yfeey takes is revolutionary. They didn't just build a tool; they built a scalable future for our brand.",
    author: "Creative Director",
    role: "Studio Nexus",
    initials: "CD",
  },
  {
    quote:
      "Their discipline in engineering and visual systems has given us the clarity we needed to scale globally.",
    author: "CTO",
    role: "Innovate Ltd",
    initials: "CT",
  },
];

const AboutTrust = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-background-alt overflow-hidden relative py-16 md:py-24">
      <div className="container mx-auto relative z-10">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-gray-900 max-w-lg mb-6 md:mb-8">
              Built on trust. Sustained by results.
            </h2>
            <p className="text-gray-600 mb-10 md:mb-12 max-w-md text-xl">
              Our partners aren{"'"}t just names in a database; they are
              collaborators in a long-term vision of technical excellence.
            </p>
          </div>

          {/* Right Content */}
          <div className="relative w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              slidesPerView={1}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              className="overflow-hidden"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i} className="h-auto">
                  <div className="min-h-64 lg:h-full p-6 sm:p-8 md:p-14 bg-gray-900 flex flex-col justify-between transition-all duration-500 relative overflow-hidden">
                    <AuroraBackground variant="dark" className="opacity-50" />

                    <div className="relative z-10">
                      <p className="font-serif-brand text-lg sm:text-xl leading-relaxed mb-8 text-white">
                        {`"${t.quote}"`}
                      </p>
                    </div>

                    <div className="flex items-center gap-5 relative z-10">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-full flex items-center justify-center text-primary font-display font-bold border border-primary/20">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-display font-bold text-white">
                          {t.author}
                        </p>
                        <p className="font-display text-xs uppercase tracking-widest text-gray-400 font-bold">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-6 sm:gap-8">
              <div className="relative p-6 sm:p-8 bg-gray-900 overflow-hidden group transition-all duration-500 hover:-translate-y-2">
                <AuroraBackground variant="dark" className="opacity-40" />
                <div className="relative z-10">
                  <p className="text-4xl sm:text-5xl font-medium text-white mb-2">
                    98%
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Retention Rate
                  </p>
                </div>
              </div>

              <div className="relative p-6 sm:p-8 bg-gray-900 overflow-hidden group transition-all duration-500 hover:-translate-y-2">
                <AuroraBackground variant="dark" className="opacity-40" />
                <div className="relative z-10">
                  <p className="text-4xl sm:text-5xl font-medium text-white mb-2">
                    24/7
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Systems Monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
