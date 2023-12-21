import type { Metadata, Viewport } from 'next';
import { Silkscreen } from 'next/font/google';
import './globals.css';

const silkscreen = Silkscreen({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Pokedex App',
  description: 'Search for and learn about Pokemon, by Isaac Rivera.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={silkscreen.className}>{children}</body>
    </html>
  );
}
