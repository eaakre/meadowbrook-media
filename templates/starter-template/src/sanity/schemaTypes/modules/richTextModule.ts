import { defineArrayMember, defineField, defineType } from "sanity";

export const richTextModule = defineType({
  name: "richTextModule",
  title: "Rich text",
  type: "object",
  fields: [
    defineField({
      name: "body",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Rich text", subtitle: "Rich text" }),
  },
});
