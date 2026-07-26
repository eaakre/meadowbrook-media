import type { Metadata } from "next";

import { PageBuilder } from "@/components/PageBuilder";
import { getPageBySlug, metadataForPage } from "@/sanity/getPage";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return metadataForPage(await getPageBySlug("index"));
}

export default async function Home() {
  const page = await getPageBySlug("index");

  if (!page) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="text-2xl font-semibold">No homepage yet</h1>
        <p className="mt-2 text-neutral-600">
          Create a Page document in{" "}
          <a href="/studio" className="underline">
            Sanity Studio
          </a>{" "}
          with the slug <code>index</code> to populate this page.
        </p>
      </div>
    );
  }

  return <PageBuilder modules={page.pageBuilder} />;
}
