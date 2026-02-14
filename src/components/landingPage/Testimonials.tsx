"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom type for standard Swiper navigation
import type { Swiper as SwiperType } from "swiper";

const testimonials = [
  {
    quote:
      "Legally Always has been an invaluable partner in navigating the complexities of business law.",
    author: "Sarah Mitchell",
    role: "Small Business Owner",
    image: "/images/user1.jpg",
    company: "FinVision",
  },
  {
    quote:
      "Their expertise in intellectual property rights protected our innovations and secured our market position.",
    author: "James Carter",
    role: "Tech Startup Founder",
    image: "/images/user2.jpg",
    company: "TechNova",
  },
  {
    quote:
      "We rely on their strategic counsel for all our major mergers and acquisitions. Simply indispensable.",
    author: "Elena Rodriguez",
    role: "CEO, Horizon Group",
    image: "/images/user3.jpg",
    company: "Horizon",
  },
  {
    quote:
      "Professional, responsive, and incredibly knowledgeable. They handled our litigation with absolute precision.",
    author: "Marcus Thorne",
    role: "Director, Omega Corp",
    image: "/images/user4.jpg",
    company: "Omega",
  },
];

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative overflow-hidden" id="testimonials">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16">
          <Quote className="w-12 h-12 text-primary mb-6 opacity-80" />
          <h2 className=" mb-4">Why Clients Rely on Us</h2>
          <p className=" max-w-xl">
            Specializing in business, entertainment, employment, and conflict
            resolution, we advocate for entrepreneurs and stakeholders.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            className="overflow-x-hidden"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="h-80 p-8 border border-white bg-white/10 flex flex-col justify-between transition-all duration-500 relative overflow-hidden group">
                  {/* Active State Background Effect */}
                  <div className="absolute inset-0 pointer-events-none rounded-lg opacity-100">
                    <AuroraBackground />
                  </div>

                  <div className="relative z-10">
                    <p className="font-serif-brand text-xl leading-relaxed mb-8 text-white">
                      {t.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto relative z-10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/20 shrink-0 border border-white/10">
                      {/* Placeholder or actual image */}
                      <div className="w-full h-full flex items-center justify-center text-xs font-bold text-white">
                        {t.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold font-display text-sm text-white">
                        {t.company}
                      </p>
                      <p className="text-xs text-white/60">
                        {t.author} - {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & Progress Line */}
          <div className="mt-4 flex items-center justify-between pt-8 relative">
            <div className="flex gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-3 bg-primary text-white hover:bg-primary-dark transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-3 bg-primary text-white hover:bg-primary-dark transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
