import type { Metadata } from "next";

import { client } from "./client";
import { urlFor } from "./imageUrl";
import { pageBySlugQuery } from "./queries";
import type { PageData } from "./types";

export async function getPageBySlug(slug: string) {
  try {
    return await client.fetch<PageData | null>(pageBySlugQuery, { slug });
  } catch (error) {
    console.error(`[sanity] Failed to fetch page "${slug}":`, error);
    return null;
  }
}

export function metadataForPage(page: PageData | null): Metadata {
  if (!page) return {};

  const title = page.seo?.metaTitle || page.title;
  const description = page.seo?.metaDescription;
  const ogImage = page.seo?.ogImage
    ? urlFor(page.seo.ogImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    robots: page.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
  };
}
