import Navbar from '@/components/common/navbar';
import Providers from '@/components/common/providers';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { LayoutProps } from '@/types';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Shrinkr',
    default:
      'Shrinkr - Streamline Your Links with Lightning-Fast URL Shortening',
  },
  description:
    'URL shortening service or a platform that helps users compress or shrink their online content, such as links, files, or images.',
  icons: { icon: './favicon.ico' },
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={cn('bg-background', inter.className)}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
