'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/accordion';
import { Button } from '@/components/common/button';
import { PUBLIC_CLIENT_APP_URL } from '@/lib/constants';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useQRCode } from 'next-qrcode';
import { useTheme } from 'next-themes';
import { useRef } from 'react';

interface QRGeneratorProps {
  url: string;
}

export default function QRGenerator({ url }: QRGeneratorProps) {
  const { Canvas } = useQRCode();
  const { resolvedTheme } = useTheme();

  const clipboard = useRef<HTMLButtonElement | null>(null);

  const copyToClipboard = () => {
    const canva = document.getElementsByTagName('canvas')[0];
    const link = document.createElement('a');
    link.href = canva.toDataURL('image/png');
    link.download = `shrink-qr-${url}.png`;
    link.click();
  };

  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1' className='border-none'>
        <AccordionTrigger>QR Generated</AccordionTrigger>
        <AccordionContent>
          <div className='flex gap-3 pt-4'>
            <div className='flex w-full items-center justify-center overflow-hidden rounded-lg border border-border p-2'>
              <Canvas
                text={`${PUBLIC_CLIENT_APP_URL}/${url}`}
                options={{
                  type: 'image/jpeg',
                  errorCorrectionLevel: 'high',
                  margin: 2,
                  scale: 4,
                  width: 200,
                  color: {
                    dark: resolvedTheme === 'dark' ? '#F5F8FA' : '#020713',
                    light: resolvedTheme === 'dark' ? '#020817' : '#F8FAFC',
                  },
                }}
              />
            </div>
            <div>
              <Button
                type='button'
                variant='secondary'
                ref={clipboard}
                onClick={copyToClipboard}
              >
                <span className='text-card-foreground'>
                  <ArrowDownTrayIcon width={20} height={20} />
                </span>
              </Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
