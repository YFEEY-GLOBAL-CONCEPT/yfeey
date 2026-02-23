import React from "react";
import { Metadata } from "next";
import BlogHero from "@/components/blogPage/BlogHero";
import BlogGrid from "@/components/blogPage/BlogGrid";

export const metadata: Metadata = {
  title: "Insights & Perspectives",
  description:
    "Exploring the intersection of technology, AI, and human impact. Read our latest thoughts on intelligent automation and system architecture.",
  openGraph: {
    title: "Yfeey Blog - Perspectives on Intelligent Automation",
    description: "Our latest articles on software, AI, and engineered growth.",
    url: "https://yfeey.com/blog",
  },
};

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
