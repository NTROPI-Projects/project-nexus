import type { Metadata } from 'next'

import { cn } from 'src/utilities/cn'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import './globals.scss'
import { draftMode } from 'next/headers'
import Script from 'next/script'

import { Plus_Jakarta_Sans, Unbounded } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
const unbounded = Unbounded({subsets: ['latin']});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <Script id="header-height-script" strategy='afterInteractive'>
          {`
            function setMainMargin() {
              const header = document.querySelector('header');
              const main = document.querySelector('main');

              if(header && main) {
                const headerHeight = header.offsetHeight * -1;
                main.style.marginTop = headerHeight + 'px';
              }
            }

            setMainMargin();
            window.addEventListener('resize', setMainMargin);
            setTimeout(setMainMargin, 100);
          `}
        </Script>

        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={`min-h-full ${unbounded.className}`}>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <LivePreviewListener />

          <Header />
          <div className="relative">
            <main className="w-full overflow-x-hidden">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
