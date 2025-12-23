import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Lead Generation Solution | 24/7 Lead Generation Machine',
  description: 'Turn your website into a 24/7 lead generation machine that captures and nurtures qualified prospects automatically. Increase lead generation by 400%+ with strategic lead capture systems.',
  keywords: [
    'website lead generation',
    'lead generation solution',
    'lead capture',
    'lead nurturing',
    'qualified leads',
    'lead generation automation',
    'website leads',
    'lead generation strategy'
  ],
  openGraph: {
    title: 'Website Lead Generation Solution | Web Vello',
    description: 'Turn your website into a 24/7 lead generation machine that captures and nurtures qualified prospects automatically.',
    url: 'https://webvello.com/solutions/website-leads',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-website-leads.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Lead Generation Solution - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Lead Generation Solution | Web Vello',
    description: 'Turn your website into a 24/7 lead generation machine that captures and nurtures qualified prospects.',
    images: ['https://webvello.com/og-website-leads.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/solutions/website-leads',
  },
}

export default function WebsiteLeadsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}











