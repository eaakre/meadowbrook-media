import { defineField, defineType } from "sanity";

export const heroModule = defineType({
  name: "heroModule",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", type: "text", rows: 3 }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "primaryCta", type: "link" }),
    defineField({ name: "secondaryCta", type: "link" }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Hero", subtitle: "Hero" }),
  },
});
