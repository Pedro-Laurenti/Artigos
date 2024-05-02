import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
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
      name: "body",
      title: "Conteúdo",
      type: "blockContent",
    }),
    defineField({
      name: "saibaComoParticipar",
      title: "Adicionar 'Saiba como participar'",
      description: "Marque se deseja que apareça um tutorial no formato de fluxo como publicar conteúdos na revista Artigos TLK",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
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
      return { ...selection, subtitle: author && `por ${author}` };
    },
  },
});
