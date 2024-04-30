import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'series',
  title: 'Séries',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
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
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "meta_description",
      title: "Descrição Meta",
      description: "resumo do conteúdo que aparece na página de pesquisa do Google",
      type: "text",
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
      name: "body",
      title: "Conteúdo",
      type: "blockContent",
    }),
    defineField({
        name: 'publishedAt',
        title: 'Data de publicação',
        type: 'datetime',
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
})
