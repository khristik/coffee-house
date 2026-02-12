import type { Metadata } from 'next';
import { Inter, Cormorant, Raleway, PT_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Для основного тексту
  weight: ['400', '500', '600'],
});

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-serif', // Для заголовків з засічками
  weight: ['400', '700'],
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-heading', // Змінив на heading
  weight: ['300', '400', '500', '600', '700'],
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt-sans', // Окремо для PT Sans
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Coffee Place',
  description: 'Premium coffee & cozy atmosphere',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} ${raleway.variable} ${ptSans.variable}`}
    >
      <body className="font-sans text-gray-800 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
