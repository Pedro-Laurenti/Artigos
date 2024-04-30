import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'openSource',
  title: 'Open Source',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Link Github',
      type: 'url',
    }),
    
    defineField({
        name: 'publishedAt',
        title: 'Data de publicação',
        type: 'datetime',
      }),
  ],
})
