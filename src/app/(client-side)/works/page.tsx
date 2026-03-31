import React from "react";
import { Metadata } from "next";
import WorksHero from "@/components/worksPage/WorksHero";
import WorksGrid from "@/components/worksPage/WorksGrid";
import { client } from "@/sanity/lib/client";
import { SanityWork } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "A showcase of our architectural approach to digital refinement, where growth is engineered into every system we build.",
  openGraph: {
    title: "Yfeey Portfolio - Intelligent Design & Engineering",
    description: "Explore our latest projects in AI automation, custom software, and digital infrastructure.",
    url: "https://yfeey.com/works",
  },
};

const WORKS_QUERY = `*[ _type == "work" && defined(slug.current) ]|order(publishedAt desc){
  _id,
  title,
  slug,
  description,
  mainImage,
  imageUrl,
  link,
  publishedAt
}`;

export default async function WorksPage() {
  const works = await client.fetch<SanityWork[]>(
    WORKS_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  return (
    <main className="min-h-screen bg-deep-midnight">
      <WorksHero />
      <WorksGrid works={works} />
    </main>
  );
}
