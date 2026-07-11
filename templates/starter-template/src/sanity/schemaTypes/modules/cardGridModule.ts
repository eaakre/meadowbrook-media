import { defineField, defineType } from "sanity";

export const cardGridModule = defineType({
  name: "cardGridModule",
  title: "Card grid",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({
      name: "cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "cardItem",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "body", type: "text", rows: 2 }),
            defineField({ name: "image", type: "image", options: { hotspot: true } }),
            defineField({ name: "href", type: "string" }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Card grid", subtitle: "Card grid" }),
  },
});
