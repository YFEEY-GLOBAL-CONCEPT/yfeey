import BlogCard from "./BlogCard";
import { SanityPost } from "@/sanity/types";

interface BlogGridProps {
  posts: SanityPost[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4 md:px-0">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {posts.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                excerpt={post.excerpt}
                publishedAt={post.publishedAt}
                mainImage={post.mainImage}
                slug={post.slug.current}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p>No posts found yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
