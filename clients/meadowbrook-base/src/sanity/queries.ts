import { groq } from "next-sanity";

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    seo,
    pageBuilder[]{ ... }
  }
`;

export const pageSlugsQuery = groq`
  *[_type == "page" && defined(slug.current)][].slug.current
`;
