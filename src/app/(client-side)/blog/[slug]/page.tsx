import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import BlogDetail from "@/components/blogPage/BlogDetail";
import { client } from "@/sanity/lib/client";
import { SanityPost } from "@/sanity/types";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  "mainImage": image,
  excerpt,
  author,
  body
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityPost>(POST_QUERY, { slug });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Fetch current post
  const post = await client.fetch<SanityPost>(POST_QUERY, { slug });

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-gray-900 font-bold">Post Not Found</h1>
          <p className="mb-8 text-gray-600">The article you are looking for does not exist or has been moved.</p>
          <Link href="/blog" className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Fetch next 2 posts (excluding current one)
  const NEXT_POSTS_QUERY = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...2]{
    _id,
    title,
    slug,
    publishedAt,
    "mainImage": image,
    excerpt,
    author
  }`;
  const nextPosts = await client.fetch<SanityPost[]>(NEXT_POSTS_QUERY, { slug });

  return <BlogDetail post={post} nextPosts={nextPosts} />;
}
