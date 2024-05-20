import { defineField, defineType } from "sanity";

export default defineType({
  name: "snippet",
  title: "Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "A URL (ou rota) do conteúdo",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "meta_description",
      title: "Descrição Meta",
      description: "resumo do conteúdo que aparece na página de pesquisa do Google",
      type: "text",
    }),
    defineField({
      name: "meta_tags",
      title: "Tags da Meta",
      description: 'Palavras buscáveis no Google - valores separados por vírgulas',
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tags" } }],
    }),

    defineField({
      name: "isSeries",
      title: "É uma série",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    }),
    defineField({
      name: "series",
      title: "Séries",
      type: "reference",
      to: { type: "series" },
    }),

    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "body",
      title: "Conteúdo",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `por ${author}` };
    },
  },
});
