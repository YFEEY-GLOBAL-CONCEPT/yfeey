// types/sanity.ts

import { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";

export type Slug = {
  current: string;
};

export interface SanityAuthor {
  _id: string;
  name: string;
  image?: SanityImageSource;
  bio?: PortableTextBlock[];
}

export interface SanityPostCategory {
  _id: string;
  title: string;
  slug: Slug;
  description?: string;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: Slug;
  publishedAt: string;

  excerpt?: string;

  // Image
  mainImage?: SanityImageSource;

  // Rich content
  body: PortableTextBlock[];

  // Relations
  author?: string;
  categories?: SanityPostCategory[];
}

export interface SanityWork {
  _id: string;
  title: string;
  slug: Slug;
  description: string;
  mainImage?: SanityImageSource;
  imageUrl?: string;
  link: string;
  publishedAt: string;
}