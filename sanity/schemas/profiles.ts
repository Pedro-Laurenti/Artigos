import { defineField, defineType } from "sanity";

export default defineType({
  name: "profiles",
  title: "Perfis",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
    }),
    defineField({
      name: "meta_description",
      title: "Descrição Meta",
      description: "resumo do conteúdo que aparece na página de pesquisa do Google",
      type: "text",
    }),
  ],
});
