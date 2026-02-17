import React from "react";
import Link from "next/link";
import BlogDetail from "@/components/blogPage/BlogDetail";
import { blogPosts } from "@/data/blogData";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Debug log (server-side)
  console.log("Server received slug:", slug);
  console.log(
    "Available slugs:",
    blogPosts.map((p) => p.slug),
  );

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Post Not Found</h1>
          <p className="mb-4 text-gray-600">Looking for slug: {slug}</p>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return <BlogDetail post={post} />;
}
