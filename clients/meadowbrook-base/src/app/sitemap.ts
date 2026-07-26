import type { MetadataRoute } from "next";

import { client } from "@/sanity/client";
import { pageSlugsQuery } from "@/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  let slugs: string[] = [];
  try {
    slugs = await client.fetch<string[]>(pageSlugsQuery);
  } catch (error) {
    console.error("[sanity] Failed to fetch page slugs for sitemap:", error);
  }

  return [
    { url: siteUrl, lastModified: new Date() },
    ...slugs
      .filter((slug) => slug !== "index")
      .map((slug) => ({ url: `${siteUrl}/${slug}`, lastModified: new Date() })),
  ];
}
