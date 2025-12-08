import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Declining Traffic Recovery Solution | Restore Search Performance',
  description: 'Reverse declining traffic trends and restore your website\'s search performance with emergency SEO recovery strategies. Recover traffic, restore rankings, and improve search performance.',
  keywords: [
    'declining traffic',
    'traffic recovery',
    'SEO recovery',
    'traffic restoration',
    'ranking recovery',
    'search performance',
    'traffic decline',
    'emergency SEO'
  ],
  openGraph: {
    title: 'Declining Traffic Recovery Solution | Web Vello',
    description: 'Reverse declining traffic trends and restore your website\'s search performance with emergency SEO recovery strategies.',
    url: 'https://webvello.com/solutions/declining-traffic',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-declining-traffic.jpg',
        width: 1200,
        height: 630,
        alt: 'Declining Traffic Recovery Solution - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Declining Traffic Recovery Solution | Web Vello',
    description: 'Reverse declining traffic trends and restore your website\'s search performance with emergency SEO recovery.',
    images: ['https://webvello.com/og-declining-traffic.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/solutions/declining-traffic',
  },
}

export default function DecliningTrafficLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}







