"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  category,
  image,
  slug,
}: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block relative bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-silky-hover"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-500"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary border border-gray-100">
            {category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500 font-display uppercase tracking-wider">
            {date}
          </span>
          <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <h3 className="text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
          {excerpt}
        </p>
      </div>

      {/* Decorative hover line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></div>
    </Link>
  );
};

export default BlogCard;
