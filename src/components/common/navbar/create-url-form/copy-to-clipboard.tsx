'use client';

import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import { CLIENT_APP_URL } from '@/lib/constants';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useRef } from 'react';

interface CopyToClipboardProps {
  success: {
    message: string;
    data?: any;
  } | null;
}

export default function CopyToClipboard({ success }: CopyToClipboardProps) {
  const clipboard = useRef<HTMLButtonElement | null>(null);
  const tooltip = useRef<HTMLDivElement | null>(null);
  const defaultIconRef = useRef<HTMLSpanElement | null>(null);
  const successIconRef = useRef<HTMLSpanElement | null>(null);
  const defaultTooltipMessageRef = useRef<HTMLSpanElement | null>(null);
  const successTooltipMessageRef = useRef<HTMLSpanElement | null>(null);

  const handleCopy = useCallback(() => {
    showSuccess();

    setTimeout(() => {
      resetToDefault();
    }, 2000);
  }, []);

  useEffect(() => {
    const currentClipboard = clipboard.current;

    if (!currentClipboard) return;
    currentClipboard.addEventListener('mousedown', handleCopy);

    return () => {
      if (!currentClipboard) return;
      currentClipboard.removeEventListener('mousedown', handleCopy);
    };
  }, [handleCopy]);

  const showSuccess = () => {
    defaultIconRef.current?.classList.add('hidden');
    successIconRef.current?.classList.remove('hidden');
    defaultTooltipMessageRef.current?.classList.add('hidden');
    successTooltipMessageRef.current?.classList.remove('hidden');
    tooltip.current?.classList.add('visible');
  };

  const resetToDefault = () => {
    defaultIconRef.current?.classList.remove('hidden');
    successIconRef.current?.classList.add('hidden');
    defaultTooltipMessageRef.current?.classList.remove('hidden');
    successTooltipMessageRef.current?.classList.add('hidden');
    tooltip.current?.classList.remove('visible');
  };

  const copyToClipboard = () => {
    if (!success) return;
    navigator.clipboard.writeText(`${CLIENT_APP_URL}/${success.data}`);
  };

  return (
    <div className='mt-4 w-full'>
      <div className='relative mb-5 w-full pt-2.5'>
        <Label htmlFor='copy-shortened_url' className='sr-only'>
          Short URL
        </Label>
        <div className='flex w-full gap-3'>
          <Input
            id='copy-shortened_url'
            type='text'
            value={`${success ? `${CLIENT_APP_URL}/${success.data}` : ''}`}
            placeholder='Shortened URL'
            readOnly
          />
          <Button
            type='button'
            variant='secondary'
            ref={clipboard}
            onClick={copyToClipboard}
          >
            <span ref={defaultIconRef} className='text-white'>
              <ClipboardIcon width={20} height={20} />
            </span>
            <span
              ref={successIconRef}
              className='hidden items-center text-white'
            >
              <CheckIcon width={20} height={20} />
            </span>
          </Button>
        </div>
        <div
          ref={tooltip}
          role='tooltip'
          className='tooltip bg-primary-dark-900 dark:bg-primary-dark-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300'
        >
          <span ref={defaultTooltipMessageRef}>Copy to clipboard</span>
          <span ref={successTooltipMessageRef} className='hidden'>
            Copied!
          </span>
          <div className='tooltip-arrow' data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}
