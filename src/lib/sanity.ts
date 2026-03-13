import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

let _client: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (_client) return _client;
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId) return null;
  _client = createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: true,
  });
  return _client;
}

export function urlFor(source: SanityImageSource) {
  const client = getSanityClient();
  if (!client) {
    const stub = { url: () => "", width: () => stub, height: () => stub, auto: () => stub, fit: () => stub, format: () => stub };
    return stub;
  }
  return imageUrlBuilder(client).image(source);
}

// GROQ queries
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) [0...6] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  "categories": categories[]->title
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  mainImage,
  "categories": categories[]->title
}`;

export const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  "categories": categories[]->title
}`;
