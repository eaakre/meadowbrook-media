import { defineField, defineType } from "sanity";

export const faqModule = defineType({
  name: "faqModule",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({
      name: "items",
      title: "Questions",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          fields: [
            defineField({ name: "question", type: "string", validation: (r) => r.required() }),
            defineField({ name: "answer", type: "text", rows: 3, validation: (r) => r.required() }),
          ],
          preview: {
            select: { title: "question" },
          },
        },
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "FAQ", subtitle: "FAQ" }),
  },
});
