"use client";

import React, { useRef, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2, ChevronRight, List, Check } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/sanity/lib/image";
import { SanityPost } from "@/sanity/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BlogDetailProps {
  post: SanityPost;
  nextPosts?: SanityPost[];
}

const BlogDetail = ({ post, nextPosts = [] }: BlogDetailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  // Dynamic Reading Time Calculation
  const readingTime = useMemo(() => {
    if (!post.body) return "1 min read";
    const words = post.body
      .filter((block) => block._type === "block")
      .reduce((acc, block) => {
        const blockText = (block.children as { text?: string }[])
          ?.map((c) => c.text || "")
          .join(" ");
        return acc + (blockText?.split(/\s+/).length || 0);
      }, 0);
    const minutes = Math.ceil(words / 200); // Avg 200 wpm
    return `${minutes} min read`;
  }, [post.body]);

  // Extract headings for Table of Contents
  const headings = useMemo(() => {
    if (!post.body) return [];
    return post.body
      .filter((block: PortableTextBlock) => 
        block._type === "block" && 
        block.style && 
        ["h1", "h2", "h3", "h4"].includes(block.style)
      )
      .map((block: PortableTextBlock) => {
        const text = (block.children as { text?: string }[])
          ?.map((c) => c.text || "")
          .join("") || "Untitled Section";
          
        return {
          title: text,
          id: block._key,
          level: block.style,
        };
      });
  }, [post.body]);

  // Share functionality
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const portableTextComponents: PortableTextComponents = {
    block: {
      h1: ({ children, value }) => (
        <h1 id={value._key} className="scroll-mt-32">
          {children}
        </h1>
      ),
      h2: ({ children, value }) => (
        <h2 id={value._key} className="scroll-mt-32">
          {children}
        </h2>
      ),
      h3: ({ children, value }) => (
        <h3 id={value._key} className="scroll-mt-32">
          {children}
        </h3>
      ),
      h4: ({ children, value }) => (
        <h4 id={value._key} className="scroll-mt-32">
          {children}
        </h4>
      ),
    },
    marks: {
       link: ({ children, value }) => {
         const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
         return (
           <a 
             href={value.href} 
             rel={rel} 
             className="text-primary font-medium hover:underline decoration-primary/30 underline-offset-4"
            >
             {children}
           </a>
         );
       }
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(heroRef.current?.children || [], {
        y: 40,
        opacity: 0,
        stagger: 0.15,
      })
      .from(imageRef.current, {
        scale: 1.05,
        opacity: 0,
        duration: 1.4,
      }, "-=0.6")
      .from(contentRef.current, {
        y: 30,
        opacity: 0,
      }, "-=1");
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-white pb-32">
      {/* Hero Section */}
      <section className="relative bg-deepMidnight overflow-hidden">
        <AuroraBackground className="opacity-30" />
        
        <div className="container mx-auto relative z-10 px-6 pt-32 pb-20">
          <div ref={heroRef} className="max-w-4xl">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "group mb-12 -ml-4"
              )}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Insights</span>
            </Link>

            <h1 className="text-white text-5xl md:text-7xl mb-12 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-10 text-gray-400 border-t border-white/10 pt-10">
              {post.author && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-primary font-bold">Written by</span>
                    <span className="text-white font-medium">{post.author}</span>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                   <Calendar className="w-4 h-4 text-gray-400" />
                 </div>
                 <div>
                   <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold">Published</span>
                   <span className="text-white font-medium">{date}</span>
                 </div>
              </div>

              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                   <Clock className="w-4 h-4 text-gray-400" />
                 </div>
                 <div>
                   <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold">Reading Time</span>
                   <span className="text-white font-medium">{readingTime}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div ref={imageRef} className="container mx-auto px-6 relative z-10 -mb-16">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-3xl border border-white/10 bg-white/5">
            {post.mainImage ? (
              <Image
                src={urlFor(post.mainImage).width(1600).height(800).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-white/10 uppercase tracking-[1em] text-sm">
                    Image Archive
                </div>
            )}
            <div className="absolute inset-0 bg-linear-to-t from-deepMidnight/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 mt-32 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-20">
            {/* Article Body */}
            <article ref={contentRef} className="text-black max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-10 blog-content-styles text-black">
                  <PortableText value={post.body} components={portableTextComponents} />
                </div>
              </div>

              <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                 <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-xl shadow-primary/20 border-2 border-white/10">
                      {post.author ? post.author.charAt(0) : "Y"}
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">
                        {post.author || "Yfeey Team"}
                      </p>
                      <p className="text-primary text-sm font-bold uppercase tracking-widest">Architect of Growth</p>
                    </div>
                 </div>
                 
                 <button 
                  onClick={handleShare}
                  className="px-6 py-3 bg-deepMidnight text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-primary transition-all duration-300"
                 >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
                    {copied ? "Link Copied" : "Share Article"}
                 </button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-12">
                {/* Table of Contents */}
                {headings.length > 0 && (
                  <div className="p-8 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
                      <List className="w-4 h-4 text-primary" />
                      <h4 className="text-black text-sm font-bold uppercase tracking-widest">Table of Contents</h4>
                    </div>
                    <nav className="space-y-4">
                      {headings.map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className={cn(
                            "block text-sm transition-all duration-300 hover:text-primary leading-tight",
                            heading.level === "h1" || heading.level === "h2" 
                              ? "text-gray-900 font-bold" 
                              : "text-gray-500 pl-4 border-l border-gray-200 ml-1 hover:border-primary"
                          )}
                        >
                          {heading.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Next Posts */}
                {nextPosts.length > 0 && (
                  <div className="space-y-8">
                    <h4 className="text-black text-sm font-bold uppercase tracking-widest px-2 italic border-b border-gray-100 pb-2">Next Insights</h4>
                    <div className="space-y-6">
                      {nextPosts.map((nextPost) => (
                        <Link
                          key={nextPost._id}
                          href={`/blog/${nextPost.slug.current}`}
                          className="group block space-y-4 p-2 rounded-xl transition-all duration-300 hover:bg-gray-50"
                        >
                          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 border border-gray-100">
                            {nextPost.mainImage ? (
                              <Image
                                src={urlFor(nextPost.mainImage).width(400).height(225).url()}
                                alt={nextPost.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-300 italic text-xs">No Preview</div>
                            )}
                          </div>
                          <h5 className="text-gray-900 font-bold group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {nextPost.title}
                          </h5>
                          <div className="flex items-center text-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                             Keep Reading <ChevronRight size={12} />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .blog-content-styles h1 {
          color: #111827;
          font-family: inherit;
          font-weight: 700;
          font-size: 2.75rem;
          margin-top: 5rem;
          margin-bottom: 2.5rem;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .blog-content-styles h2 {
          color: #111827;
          font-family: inherit;
          font-weight: 600;
          font-size: 2.25rem;
          margin-top: 4rem;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }
        .blog-content-styles h3 {
          color: #111827;
          font-family: inherit;
          font-weight: 600;
          font-size: 1.75rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }
        .blog-content-styles h4 {
          color: #111827;
          font-family: inherit;
          font-weight: 600;
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content-styles p {
          font-size: 1.25rem;
          color: #374151;
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        .blog-content-styles blockquote {
          border-left: 3px solid #8062c0;
          background: #f9fafb;
          padding: 2.5rem;
          font-style: italic;
          font-size: 1.5rem;
          color: #4b5563;
          margin: 4rem 0;
          border-radius: 0 1rem 1rem 0;
          line-height: 1.5;
        }
        .blog-content-styles ul {
          list-style-type: disc;
          padding-left: 2rem;
          margin-bottom: 2.5rem;
          color: #374151;
        }
        .blog-content-styles ol {
          list-style-type: decimal;
          padding-left: 2rem;
          margin-bottom: 2.5rem;
          color: #374151;
        }
        .blog-content-styles li {
          margin-bottom: 1rem;
          color: #374151;
          font-size: 1.15rem;
        }
      `}</style>
    </main>
  );
};

export default BlogDetail;
