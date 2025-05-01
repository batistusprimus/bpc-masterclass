import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: 'BPC Masterclass | La masterclass ultime pour entrepreneurs B2B',
  description: 'La masterclass BPC est notre produit ultime, mis à disposition gratuitement et sans inscription pour les entrepreneurs et solopreneurs du B2B.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-TD1JS07QVN`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TD1JS07QVN');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <Script
          src="https://app.iclosed.io/assets/widget.js"
          strategy="lazyOnload"
        />
        <Analytics />
      </body>
    </html>
  );
}
