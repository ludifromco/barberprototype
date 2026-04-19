import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { IMAGES } from '@/lib/images'
import { SITE } from '@/lib/site'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: SITE.legalName,
  telephone: SITE.phoneTel,
  url: SITE.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.streetAddress,
    addressLocality: SITE.addressLocality,
    addressRegion: SITE.addressRegion,
    postalCode: SITE.postalCode,
    addressCountry: SITE.addressCountry,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | Barber Shop | Sun City Center, FL`,
  description:
    'Professional haircuts, fades, beard trims, and hot towel shaves in Sun City Center. Walk-ins welcome. Book your appointment.',
  keywords: [
    'barber',
    'barbershop',
    'haircut',
    'fade',
    'beard trim',
    'Sun City Center',
    'Sun City Barber',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Sharp Cuts. Clean Style.`,
    description:
      'Professional barber services in Sun City Center — haircuts, fades, beard trims, and more. Book your appointment.',
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: 'Sun City Barber — professional barber service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Sharp Cuts. Clean Style.`,
    description:
      'Haircuts, fades, and beard trims in Sun City Center. Walk-ins welcome. Book today.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
