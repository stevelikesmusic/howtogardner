import type React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Roboto as Typeface } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const typeface = Typeface({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Steve Gardner - Fractional CTO & Software Consulting',
  description:
    'Engineering leadership for growing companies. Fractional CTO services and software consulting to scale your technology and build high-performing teams.',
  keywords: [
    'fractional CTO',
    'software consulting',
    'engineering leadership',
    'technology strategy',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={typeface.className}>
        <Header />
        <main className="pt-16">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
