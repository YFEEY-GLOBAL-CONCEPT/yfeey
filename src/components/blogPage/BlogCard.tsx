"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

interface BlogCardProps {
  title: string;
  excerpt?: string;
  publishedAt?: string;
  author?: string;
  mainImage?: SanityImageSource;
  slug: string;
}

const BlogCard = ({
  title,
  excerpt,
  publishedAt,
  author,
  mainImage,
  slug,
}: BlogCardProps) => {
  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-deepMidnight relative border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-white/5">
        {mainImage ? (
          <Image
            src={urlFor(mainImage).width(800).height(500).url()}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/20">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-deepMidnight/20 group-hover:bg-deepMidnight/0 transition-colors duration-500"></div>

        {/* Badge */}
        {author && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-primary text-[10px] font-bold uppercase tracking-widest text-white border border-primary/20 backdrop-blur-sm">
              {author}
            </span>
          </div>
        )}

        {/* Hover Arrow Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-deepMidnight/40 backdrop-blur-[2px]">
           <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg shadow-primary/20">
              <ArrowUpRight size={20} />
           </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-3 h-3 text-primary" />
          <span className="text-[10px] text-gray-400 font-display uppercase tracking-widest">
            {date}
          </span>
        </div>

        <h3 className="text-white text-xl mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
          {title}
        </h3>

        {excerpt && (
          <p className="text-gray-400 line-clamp-2 text-sm leading-relaxed mb-4">
            {excerpt}
          </p>
        )}

        <div className="pt-4 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
           <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Read More</span>
           <div className="h-[1px] w-8 bg-primary/40 group-hover:w-12 transition-all duration-300"></div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
