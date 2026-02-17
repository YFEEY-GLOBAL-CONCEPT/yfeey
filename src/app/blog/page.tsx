"use client";

import React from "react";
import BlogHero from "@/components/blogPage/BlogHero";
import BlogGrid from "@/components/blogPage/BlogGrid";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <div className="py-24">
        <BlogGrid />
      </div>
    </main>
  );
}
