import { defineField, defineType } from 'sanity'

export const cisPage = defineType({
  name: 'cisPage',
  title: 'City × Industry × Service Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title / H1', validation: (r) => r.required() }),
    defineField({ name: 'city', type: 'reference', to: [{ type: 'city' }], validation: (r) => r.required() }),
    defineField({ name: 'industry', type: 'reference', to: [{ type: 'industry' }], validation: (r) => r.required() }),
    defineField({ name: 'service', type: 'string', title: 'Service', options: { list: [
      { title: 'Web Development', value: 'web-development' },
      { title: 'SEO', value: 'seo' },
      { title: 'Website Design', value: 'website-design' },
    ]}, validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug (auto)', options: { source: (doc: any) => `${doc?.city?._ref || 'city'}/${doc?.industry?._ref || 'industry'}/${doc?.service || 'service'}` } }),
    defineField({ name: 'metaTitle', type: 'string', title: 'Meta Title' }),
    defineField({ name: 'metaDescription', type: 'text', title: 'Meta Description' }),
    defineField({ name: 'hero', type: 'text', title: 'Hero Intro (150–250 words)' }),
    defineField({ name: 'content', type: 'array', title: 'Sections', of: [{ type: 'block' }] }),
    defineField({ name: 'faqs', type: 'array', title: 'FAQs', of: [{ type: 'object', fields: [
      defineField({ name: 'question', type: 'string', title: 'Question' }),
      defineField({ name: 'answer', type: 'text', title: 'Answer' }),
    ] }] }),
    defineField({ name: 'status', type: 'string', title: 'Status', options: { list: ['draft', 'in-review', 'published'] }, initialValue: 'draft' }),
    defineField({ name: 'lastReviewed', type: 'datetime', title: 'Last Reviewed' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'service' },
  },
})


