"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blogData";

const BlogGrid = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
