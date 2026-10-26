import type { MetadataRoute } from "next";
import posts from "@/data/posts.json" with { type: "json" };

const BASE_URL = "https://www.ohenry.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...articles];
}
