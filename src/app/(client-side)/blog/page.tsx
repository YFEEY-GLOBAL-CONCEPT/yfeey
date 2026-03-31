import React from "react";
import { Metadata } from "next";
import BlogHero from "@/components/blogPage/BlogHero";
import BlogGrid from "@/components/blogPage/BlogGrid";
import { client } from "@/sanity/lib/client";
import { SanityPost } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Insights & Perspectives",
  description:
    "Exploring the intersection of technology, AI, and human impact. Read our latest thoughts on intelligent automation and system architecture.",
};

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt, 
  "mainImage": image, 
  excerpt
}`;

export default async function BlogPage() {
  const posts = await client.fetch<SanityPost[]>(
    POSTS_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  return (
    <main className="min-h-screen bg-deepMidnight">
      <BlogHero />
      <div className="py-24">
        <BlogGrid posts={posts} />
      </div>
    </main>
  );
}
