import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Autor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
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
      name: "designation",
      title: "Designação",
      type: "string",
    }),
    defineField({
      name: "meta_description",
      title: "Descrição Meta",
      description: "Resumo do conteúdo que aparece na página de pesquisa do Google",
      type: "text",
    }),
    defineField({
      name: "profiles",
      title: "Perfis",
      type: "array",
      of: [
        {
          type: "object", // This specifies the type of values in the array
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Platform",
            },
            {
              name: "url",
              type: "url",
              title: "URL",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Imagem",
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
      name: "about",
      title: "Bio completa",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
