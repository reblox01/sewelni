import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import '@/app/globals.css';
import { cn } from '@/lib/utils';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Providers } from '@/components/providers';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: 'Sewelni - AI Chatbot',
    template: `%s - Sewelni`
  },
  description: 'Sewelni is an AI-powered chatbot tailored for Moroccan Arabic (Darija) and Classical Arabic. Offering expertise in technology, programming, and Islamic teachings, Sewelni ensures culturally accurate and sensitive interactions. Perfect for personal assistance, learning, and respectful conversations on Muslim-related topics.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Sewelni - AI Chatbot',
    description: 'Sewelni is an AI-powered chatbot tailored for Moroccan Arabic (Darija) and Classical Arabic. Offering expertise in technology, programming, and Islamic teachings.',
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    type: 'website',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Sewelni Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Seweln1',
    title: 'Sewelni - AI Chatbot',
    description: 'Sewelni is an AI-powered chatbot tailored for Moroccan Arabic (Darija) and Classical Arabic. Offering expertise in technology, programming, and Islamic teachings.',
    images: '/android-chrome-512x512.png',
  }
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Sewelni is an AI-powered chatbot tailored for Moroccan Arabic (Darija) and Classical Arabic. Offering expertise in technology, programming, and Islamic teachings, Sewelni ensures culturally accurate and sensitive interactions. Perfect for personal assistance, learning, and respectful conversations on Muslim-related topics." />
        <meta name="keywords" content="Sewelni, AI chatbot, Moroccan Arabic, Darija, Classical Arabic, technology, programming, Islamic teachings, personal assistance, learning, Muslim conversations" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sewelni - AI Chatbot" />
        <meta property="og:description" content="Sewelni is an AI-powered chatbot tailored for Moroccan Arabic (Darija) and Classical Arabic. Offering expertise in technology, programming, and Islamic teachings." />
        <meta property="og:url" content={process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined} />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Seweln1" />
        <meta name="twitter:title" content="Sewelni - AI Chatbot" />
        <meta name="twitter:description" content="Sewelni is an AI-powered chatbot tailored for Moroccan Arabic (Darija) and Classical Arabic. Offering expertise in technology, programming, and Islamic teachings." />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
      </head>
      <body className={cn('font-sans antialiased', GeistSans.variable, GeistMono.variable)}>
        <Toaster position="top-center" />
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
          <TailwindIndicator />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
