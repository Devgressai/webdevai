import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'raffleEntry',
  title: 'Raffle Entries',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hasCurrentSite',
      title: 'Has Current Website',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'consent',
      title: 'Marketing Consent',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      description: 'Internal notes about this entry (not visible to user)',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New Entry', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Winner', value: 'winner' },
          { title: 'Not Selected', value: 'not-selected' },
        ],
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'email',
      status: 'status',
      submittedAt: 'submittedAt',
    },
    prepare(selection) {
      const { title, subtitle, status, submittedAt } = selection
      const statusEmoji = 
        status === 'winner' ? '🎉' :
        status === 'contacted' ? '📞' :
        status === 'not-selected' ? '❌' : '🎫'
      
      return {
        title: `${statusEmoji} ${title}`,
        subtitle: `${subtitle} • ${new Date(submittedAt).toLocaleDateString()}`,
      }
    },
  },
  orderings: [
    {
      title: 'Submitted Date (Newest First)',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Submitted Date (Oldest First)',
      name: 'submittedAtAsc',
      by: [{ field: 'submittedAt', direction: 'asc' }],
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'firstName', direction: 'asc' }],
    },
  ],
})

