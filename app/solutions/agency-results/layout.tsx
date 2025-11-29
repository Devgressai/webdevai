import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency Results & Growth Solution | Scale Your Agency',
  description: 'Scale your agency with proven systems, processes, and strategies that deliver consistent client results. Increase client retention, improve results, and boost agency revenue.',
  keywords: [
    'agency growth',
    'agency results',
    'agency scaling',
    'client retention',
    'agency systems',
    'agency processes',
    'agency consulting',
    'agency optimization'
  ],
  openGraph: {
    title: 'Agency Results & Growth Solution | Web Vello',
    description: 'Scale your agency with proven systems, processes, and strategies that deliver consistent client results.',
    url: 'https://webvello.com/solutions/agency-results',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-agency-results.jpg',
        width: 1200,
        height: 630,
        alt: 'Agency Results & Growth Solution - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency Results & Growth Solution | Web Vello',
    description: 'Scale your agency with proven systems, processes, and strategies that deliver consistent client results.',
    images: ['https://webvello.com/og-agency-results.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/solutions/agency-results',
  },
}

export default function AgencyResultsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}




