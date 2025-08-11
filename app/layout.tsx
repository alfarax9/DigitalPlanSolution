import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'DIPS - Digital Plan Solution | Your Creative Design Partner',
  description: 'Digital Plan Solution - Innovative design solutions that transform visions into compelling digital experiences. Expert team in VR/AR, UI/UX, and digital marketing.',
  keywords: 'digital design, VR, AR, UI/UX, creative solutions, digital marketing',
  authors: [{ name: 'DIPS Team' }],
  viewport: 'width=device-width, initial-scale=1',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0A1628] text-white overflow-x-hidden`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}