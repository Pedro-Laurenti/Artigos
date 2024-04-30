import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contato",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Conteúdo",
      type: "blockContent",
    }),
    
  ],
});
