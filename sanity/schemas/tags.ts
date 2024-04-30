import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tags',
  title: 'Tags',
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
      name: "meta_description",
      title: "Descrição Meta",
      description: "resumo do conteúdo que aparece na página de pesquisa do Google",
      type: "text",
    }),
  ],
})
