import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Gorkha Ventures — Operator-Led Accelerator',
  description:
    'An operator-led accelerator for founders building in India. Six months of direct execution with operators leading companies with ₹1,000Cr+ in combined revenue.',
  metadataBase: new URL('https://www.gorkhaventures.com'),
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/assets/logo_tile_cobalt.png'
  },
  openGraph: {
    title: 'Gorkha Ventures — Operator-Led Accelerator',
    description:
      'An operator-led accelerator for founders building in India. Six months of direct execution with operators leading companies with ₹1,000Cr+ in combined revenue.',
    url: 'https://www.gorkhaventures.com',
    siteName: 'Gorkha Ventures',
    images: [
      {
        url: '/assets/logo_tile_cobalt.png',
        width: 1024,
        height: 1024,
        alt: 'Gorkha Ventures'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gorkhaventures',
    creator: '@gorkhaventures',
    title: 'Gorkha Ventures — Operator-Led Accelerator',
    description:
      'An operator-led accelerator for founders building in India. Six months of direct execution with operators leading companies with ₹1,000Cr+ in combined revenue.',
    images: ['/assets/logo_tile_cobalt.png']
  },
  other: {
    'theme-color': '#14161A'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gorkha Ventures',
    url: 'https://www.gorkhaventures.com',
    logo: 'https://www.gorkhaventures.com/logo.svg',
    description: 'An operator-led accelerator for founders building in India.',
    sameAs: [
      'https://x.com/gorkhaventures',
      'https://www.linkedin.com/company/gorkhaventures/',
      'https://www.instagram.com/gorkhaventures/',
      'https://www.youtube.com/@gorkhaventures'
    ]
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="theme-bone">{children}</body>
    </html>
  );
}
