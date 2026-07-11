import { defineField, defineType } from "sanity";

export const ctaModule = defineType({
  name: "ctaModule",
  title: "Call to action",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", type: "text", rows: 3 }),
    defineField({ name: "cta", type: "link", validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "CTA", subtitle: "Call to action" }),
  },
});
