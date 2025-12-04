import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Conversion Optimization Solution | Increase Conversions',
  description: 'Optimize every element of your website to guide visitors through the perfect conversion funnel. Increase conversion rates and revenue with data-driven optimization.',
  keywords: [
    'conversion optimization',
    'website conversion',
    'conversion rate optimization',
    'CRO services',
    'website optimization',
    'increase conversions',
    'conversion funnel',
    'website performance'
  ],
  openGraph: {
    title: 'Website Conversion Optimization Solution | Web Vello',
    description: 'Optimize every element of your website to guide visitors through the perfect conversion funnel. Increase conversion rates and revenue.',
    url: 'https://webvello.com/solutions/website-conversion',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-website-conversion.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Conversion Optimization Solution - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Conversion Optimization Solution | Web Vello',
    description: 'Optimize every element of your website to guide visitors through the perfect conversion funnel.',
    images: ['https://webvello.com/og-website-conversion.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/solutions/website-conversion',
  },
}

export default function WebsiteConversionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}





