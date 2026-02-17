"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";

interface Post {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: React.ReactNode;
}

const BlogDetail = ({ post }: { post: Post }) => {
  return (
    <main className="min-h-screen bg-white pb-32">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-deep-midnight overflow-hidden">
        <AuroraBackground className="opacity-30" />
        <div className="container mx-auto relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary mb-8 hover:translate-x-1 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Back to Insights
            </span>
          </Link>
          <h1 className="text-white max-w-4xl mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-21/9 overflow-hidden shadow-2xl mb-16">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="text-gray-700 space-y-8 font-body leading-relaxed blog-content-styles">
                {post.content}
              </div>
            </div>

            <style jsx global>{`
              .blog-content-styles h2 {
                color: #111827;
                font-family: var(--font-poppins);
                font-weight: 600;
                font-size: 2rem;
                margin-top: 3rem;
                margin-bottom: 1.5rem;
              }
              .blog-content-styles p {
                font-size: 1.125rem;
                color: #374151;
              }
              .blog-content-styles blockquote {
                border-left: 4px solid #8062c0;
                padding-left: 1.5rem;
                font-style: italic;
                font-family: var(--font-literata);
                font-size: 1.5rem;
                color: #4b5563;
                margin: 3rem 0;
              }
            `}</style>

            <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">Expert Contributor</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                  <span className="sr-only">Share</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
