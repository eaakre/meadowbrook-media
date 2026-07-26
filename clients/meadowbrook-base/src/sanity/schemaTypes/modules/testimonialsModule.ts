import { defineField, defineType } from "sanity";

export const testimonialsModule = defineType({
  name: "testimonialsModule",
  title: "Testimonials",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({
      name: "items",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          name: "testimonialItem",
          fields: [
            defineField({ name: "quote", type: "text", rows: 3, validation: (r) => r.required() }),
            defineField({ name: "name", type: "string", validation: (r) => r.required() }),
            defineField({ name: "role", type: "string" }),
            defineField({ name: "avatar", type: "image", options: { hotspot: true } }),
          ],
          preview: {
            select: { title: "name", subtitle: "role" },
          },
        },
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Testimonials", subtitle: "Testimonials" }),
  },
});
