'use client';

import HeroImageDark from '@/assets/hero-image-dark.webp';
import HeroImageLight from '@/assets/hero-image-light.webp';
import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

export default function ValuePropositionImage() {
  const { resolvedTheme } = useTheme();
  const [image, setImage] = useState<StaticImageData>({} as StaticImageData);

  useEffect(() => {
    if (resolvedTheme === 'dark') setImage(HeroImageDark);
    else setImage(HeroImageLight);
  }, [resolvedTheme]);

  return (
    <Image
      src={image}
      width={1600}
      height={1024}
      alt='product preview'
      quality={100}
      className='overflow-hidden rounded-md bg-secondary shadow-2xl ring-1 ring-gray-900/10'
    />
  );
}
