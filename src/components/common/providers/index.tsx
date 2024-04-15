'use client';

import { LayoutProps } from '@/types';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <Toaster position='top-center' reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
}
