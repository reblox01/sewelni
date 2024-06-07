import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: 'Sewelni - Chatbot',
    template: `Sewelni`
  },
  description: 'Sewelni is an advanced AI chatbot, enhanced for superior performance in Moroccan Arabic (Darija) and Classical Arabic. It provides specialized knowledge in Technology like programming languages and aslo in Islamic teachings and practices, delivering culturally sensitive and accurate interactions. Ideal for personal assistance, learning, and engaging in respectful conversations about Muslim-related topics.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    maskable: '/safari-pinned-tab.svg',
    msTileImage: '/mstile-150x150.png',
    msTileColor: '#000000',
    android: '/android-chrome-512x512.png',
    manifest: '/site.webmanifest',
    themeColor: '#fffff'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
          <TailwindIndicator />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
