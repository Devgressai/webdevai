import { defineField, defineType } from 'sanity'

export const city = defineType({
  name: 'city',
  title: 'City',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: (r) => r.required() }),
    defineField({ name: 'state', type: 'string', title: 'State' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name', slugify: (input) => input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }, validation: (r) => r.required() }),
    defineField({ name: 'fullName', type: 'string', title: 'Full Name' }),
    defineField({ name: 'population', type: 'string', title: 'Population' }),
  ],
  preview: {
    select: { title: 'fullName', subtitle: 'state' },
    prepare({ title, subtitle }) {
      return { title: title || 'City', subtitle }
    },
  },
})


