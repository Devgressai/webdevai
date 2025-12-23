import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website ROI Optimization Solution | Transform Cost Center to Revenue',
  description: 'Transform your website from a cost center into a revenue-generating machine with proven conversion optimization strategies. Increase ROI and website revenue with data-driven CRO.',
  keywords: [
    'website ROI optimization',
    'website revenue',
    'conversion optimization',
    'CRO services',
    'website ROI',
    'revenue generation',
    'website performance',
    'conversion rate optimization'
  ],
  openGraph: {
    title: 'Website ROI Optimization Solution | Web Vello',
    description: 'Transform your website from a cost center into a revenue-generating machine with proven conversion optimization strategies.',
    url: 'https://webvello.com/solutions/website-roi',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-website-roi.jpg',
        width: 1200,
        height: 630,
        alt: 'Website ROI Optimization Solution - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website ROI Optimization Solution | Web Vello',
    description: 'Transform your website from a cost center into a revenue-generating machine with proven strategies.',
    images: ['https://webvello.com/og-website-roi.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/solutions/website-roi',
  },
}

export default function WebsiteROILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}











