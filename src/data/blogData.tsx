import React from "react";

export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  content: React.ReactNode;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Architecture of Tomorrow: Why Systems Trump Solutions",
    excerpt: "In an era of fleeting digital trends, building scalable infrastructure requires a shift from point-solutions to systemic thinking.",
    author: "Alex Rivera",
    date: "April 12, 2024",
    readTime: "6 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    slug: "architecture-of-tomorrow",
    content: (
      <>
        <p>
          In the rapidly evolving landscape of digital technology, the
          temptation to jump straight into solutions is stronger than ever. New
          frameworks, languages, and tools emerge daily, promising to solve
          every problem with a simple implementation. However, as many
          engineering teams have discovered, a solution without a sound
          architectural system is a recipe for technical debt and fragmentation.
        </p>
        <h2>The Diagnostic Mindset</h2>
        <p>
          At Yfeey, we approach every project with what we call a diagnostic
          mindset. We don't start with the tool; we start with the
          architecture of the problem. This means understanding not just what a
          piece of software is supposed to do, but how it fits into the broader
          systemic context of the organization.
        </p>
        <p>
          Building for the future requires a shift from linear thinking to
          systemic thinking. Instead of seeing a feature as a standalone unit,
          we see it as a node within a larger network. This structural approach
          ensures that every interaction is intentional and every system is
          built to last.
        </p>
        <blockquote>
          `Architectural excellence is not about making things complex; it's
          about making things clear. It's the discipline of eliminating
          digital noise to reveal the core purpose.`
        </blockquote>
        <h2>Scalability and Longevity</h2>
        <p>
          Truly intelligent systems are those that can withstand the test of
          time. By adhering to rigid logical frameworks and clean code
          principles, we engineer solutions that don't just solve today's
          problems but provide a foundation for tomorrow's growth.
        </p>
      </>
    ),
  },
  {
    title: "Intelligent Automation: Beyond the Hype of AI",
    excerpt: "AI is only as good as the systems it powers. Discover how we're engineering intelligent workflows that actually drive impact.",
    author: "Elena Chen",
    date: "May 05, 2024",
    readTime: "8 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    slug: "intelligent-automation-impact",
    content: (
      <>
        <p>
          AI has become the catch-all buzzword of the decade. From simple
          chatbots to complex generative models, the hype cycle is in full
          swing. But at its core, AI is simply a tool—and like any tool, its
          impact is limited by the system it inhabits.
        </p>
        <h2>Engineering Impact</h2>
        <p>
          Intelligent automation isn't just about adding AI to existing
          processes; it's about redesigning those processes from the ground
          up to leverage machine intelligence. This requires a deep
          understanding of data flows, decision-making logic, and user behavior.
        </p>
        <p>
          When automation is engineered with architectural discipline, it
          transforms fragmented workflows into seamless, high-performance
          engines. It eliminates repetitive tasks not just for speed, but to
          free up human capacity for strategic excellence.
        </p>
      </>
    ),
  },
  {
    title: "The Disciplined Design: Aesthetic and Functional Excellence",
    excerpt: "Why premium brands are returning to architectural principles in digital design to foster longevity and user trust.",
    author: "Jordan Smith",
    date: "June 20, 2024",
    readTime: "5 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    slug: "disciplined-design-excellence",
    content: (
      <>
        <p>
          Design is often misunderstood as purely aesthetic. While visual
          excellence is critical, especially for premium brands, the most
          impactful designs are those rooted in function and logic.
        </p>
        <h2>The Architectural Principle</h2>
        <p>
          Returning to architectural principles in digital design means
          prioritizing structure and hierarchy. It means every element on a
          screen has a reason for being there. This discipline creates a sense
          of trust and clarity that fragmented, trend-driven designs cannot
          match.
        </p>
      </>
    ),
  },
];
