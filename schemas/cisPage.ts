import { defineField, defineType } from 'sanity'

export const cisPage = defineType({
  name: 'cisPage',
  title: 'City × Industry × Service Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title / H1', validation: (r) => r.required().min(15).max(120) }),
    defineField({ name: 'city', type: 'reference', to: [{ type: 'city' }], validation: (r) => r.required() }),
    defineField({ name: 'industry', type: 'reference', to: [{ type: 'industry' }], validation: (r) => r.required() }),
    defineField({ name: 'service', type: 'string', title: 'Service', options: { list: [
      { title: 'Web Development', value: 'web-development' },
      { title: 'SEO', value: 'seo' },
      { title: 'Website Design', value: 'website-design' },
    ]}, validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug (auto)', options: { source: (doc: any) => `${doc?.city?._ref || 'city'}/${doc?.industry?._ref || 'industry'}/${doc?.service || 'service'}` } }),
    defineField({ name: 'metaTitle', type: 'string', title: 'Meta Title', validation: (r) => r.min(30).max(60) }),
    defineField({ name: 'metaDescription', type: 'text', title: 'Meta Description', validation: (r) => r.min(80).max(160) }),
    defineField({ name: 'hero', type: 'text', title: 'Hero Intro (150–250 words)', validation: (r) => r.min(300) }),
    defineField({ name: 'content', type: 'array', title: 'Sections', of: [{ type: 'block' }],
      validation: (r) => r.custom((val) => {
        // Rough word count check for 4k+: count words in plain text blocks
        if (!val) return 'Add content sections'
        const text = val.map((b: any) => (b._type === 'block' ? b.children?.map((c: any) => c.text).join(' ') : '')).join(' ')
        const words = (text || '').trim().split(/\s+/).filter(Boolean).length
        return words >= 3500 || 'Aim for at least ~3500–4000 words'
      })
    }),
    defineField({ name: 'faqs', type: 'array', title: 'FAQs', of: [{ type: 'object', fields: [
      defineField({ name: 'question', type: 'string', title: 'Question' }),
      defineField({ name: 'answer', type: 'text', title: 'Answer' }),
    ] }], validation: (r) => r.min(6) }),
    defineField({ name: 'status', type: 'string', title: 'Status', options: { list: ['draft', 'in-review', 'published'] }, initialValue: 'draft' }),
    defineField({ name: 'lastReviewed', type: 'datetime', title: 'Last Reviewed' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'service' },
  },
})


