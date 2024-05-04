/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Label } from '@/components/common/label';
import NotFound from '@/components/common/not-found';
import { PUBLIC_SERVER_BASE_API } from '@/lib/constants';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import uaParser from 'ua-parser-js';

interface SendAnalyticsPayload {
  originalURL: string;
  shortURL: string;
  device: string;
  vendor: string;
  platforms: string;
  browser: string;
  referrer: string;
}

export default function SendAnalytics({
  url,
}: {
  url: { originalURL: string; shortURL: string } | undefined;
}) {
  const [error, setError] = useState<boolean>(false);
  const [sentData, setSentData] = useState<boolean>(false);
  const router = useRouter();

  const handleSend = useCallback(async (payload: SendAnalyticsPayload) => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();

    await fetch(
      `${PUBLIC_SERVER_BASE_API}/urls/short-url/${payload.shortURL}`,
      {
        method: 'POST',
        body: JSON.stringify({ ...payload, ip: data.ip }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(async (res) => {
        const resData = await res.json();
        if (!res.ok) return setError(true);
        router.push(resData.original_url);
      })
      .catch((error) => {
        if (error.message === 'Failed to fetch') {
          toast.error('Disable adBlock');
        }
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (!document || !navigator) return;

    const referrer = document.referrer;
    const ua = uaParser(navigator.userAgent);

    if (!url) return;
    if (sentData) return;
    setSentData(true);

    const payload = {
      ...url,
      device: ua.device.type ?? 'desktop',
      vendor: ua.device.vendor ?? 'unknown',
      platforms: ua.os.name ?? 'unknown',
      browser: ua.browser.name ?? 'unknown',
      referrer: referrer ? referrer : 'Direct Search',
    };

    handleSend(payload);
  }, [url, handleSend]);

  if (error) return <NotFound />;

  return (
    <div className='absolute left-[50%] top-[50%] mx-auto w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-6'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='ldrs-ring-container' />
        <Label>Redirecting ...</Label>
      </div>
    </div>
  );
}
