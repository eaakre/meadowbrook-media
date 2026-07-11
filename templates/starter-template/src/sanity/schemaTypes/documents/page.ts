import { defineField, defineType } from "sanity";

const moduleTypes = [
  { type: "heroModule" },
  { type: "ctaModule" },
  { type: "faqModule" },
  { type: "testimonialsModule" },
  { type: "logoCloudModule" },
  { type: "cardGridModule" },
  { type: "richTextModule" },
];

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
      description: 'Use "index" for the homepage.',
    }),
    defineField({
      name: "pageBuilder",
      title: "Sections",
      type: "array",
      of: moduleTypes,
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare: ({ title, slug }) => ({ title, subtitle: slug ? `/${slug}` : undefined }),
  },
});
