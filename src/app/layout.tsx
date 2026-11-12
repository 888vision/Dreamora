import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { getLocale } from 'gt-next/server';
import { GTProvider } from 'gt-next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const siteUrl = 'https://aipctool.com';
const title = 'Dreamora — Build Your Dream City';
const description = 'Create, build, and explore your own living isometric city. Design neighborhoods, manage resources, and watch traffic, trains, planes, and citizens bring your dream city to life.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: 'Dreamora — %s',
  },
  applicationName: 'Dreamora',
  description,
  keywords: [
    'city builder game',
    'online city building game',
    'isometric city builder',
    'free city simulator',
    'build your own city',
    'browser city building game',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'Dreamora',
    url: siteUrl,
    images: [{
      url: '/opengraph-image.png',
      width: 1179,
      height: 1406,
      type: 'image/png',
      alt: 'Dreamora isometric city builder game',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Dreamora',
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      ko: '/ko',
      de: '/de',
      ja: '/ja',
      'pt-BR': '/pt-BR',
      'x-default': '/en',
    },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0f1219',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`dark ${playfair.variable} ${dmSans.variable}`} lang={await getLocale()}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0f1219" />
        <link rel="apple-touch-icon" href="/assets/buildings/residential.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/sprites_red_water_new.webp" as="image" type="image/webp" />
        <link rel="preload" href="/assets/water.webp" as="image" type="image/webp" />
      </head>
      <body className="bg-background text-foreground antialiased font-sans overflow-hidden">
        <GTProvider>{children}<Analytics /></GTProvider>
      </body>
    </html>
  );
}
