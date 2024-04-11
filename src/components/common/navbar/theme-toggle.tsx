'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <SunIcon width={24} height={24} />;

  if (resolvedTheme === 'dark') {
    return (
      <button onClick={() => setTheme('light')}>
        <SunIcon width={24} height={24} />
      </button>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <button onClick={() => setTheme('dark')}>
        <MoonIcon width={24} height={24} />
      </button>
    );
  }
}
