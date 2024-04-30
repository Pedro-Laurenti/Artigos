import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Artigo",
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
      description: "A URL (ou rota) do post",
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
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Imagem principal",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo",
        },
      ],
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
      name: "publishedAt",
      title: "Data de publicação",
      type: "datetime",
    }),
    // create a boolen field if it is an article is a part of any series if it is true then create another field which add series

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
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
