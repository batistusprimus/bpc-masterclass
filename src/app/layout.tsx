import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BPC Masterclass | La masterclass ultime pour entrepreneurs B2B',
  description: 'La masterclass BPC est notre produit ultime, mis à disposition gratuitement et sans inscription pour les entrepreneurs et solopreneurs du B2B.',
  icons: {
    icon: [
      { url: '/5.png' },
      { url: '/favicon.ico' }
    ],
    apple: { url: '/5.png' },
    shortcut: { url: '/5.png' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
