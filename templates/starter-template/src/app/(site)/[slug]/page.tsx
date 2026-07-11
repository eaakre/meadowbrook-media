import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PageBuilder } from "@/components/PageBuilder";
import { client } from "@/sanity/client";
import { getPageBySlug, metadataForPage } from "@/sanity/getPage";
import { pageSlugsQuery } from "@/sanity/queries";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(pageSlugsQuery);
  return slugs.filter((slug) => slug !== "index").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return metadataForPage(await getPageBySlug(params.slug));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug);
  if (!page) notFound();

  return <PageBuilder modules={page.pageBuilder} />;
}
