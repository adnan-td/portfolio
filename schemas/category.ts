import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "color",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
