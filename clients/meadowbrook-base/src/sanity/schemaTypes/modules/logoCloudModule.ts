import { defineField, defineType } from "sanity";

export const logoCloudModule = defineType({
  name: "logoCloudModule",
  title: "Logo cloud",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({
      name: "logos",
      type: "array",
      of: [
        {
          type: "object",
          name: "logoItem",
          fields: [
            defineField({ name: "name", type: "string", validation: (r) => r.required() }),
            defineField({ name: "image", type: "image", validation: (r) => r.required() }),
            defineField({ name: "href", type: "string" }),
          ],
          preview: {
            select: { title: "name" },
          },
        },
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Logo cloud", subtitle: "Logo cloud" }),
  },
});
