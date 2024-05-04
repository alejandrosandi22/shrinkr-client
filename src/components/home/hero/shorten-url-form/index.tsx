'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import CopyToClipboard from '@/components/common/navbar/create-url-form/copy-to-clipboard';
import QRGenerator from '@/components/common/navbar/create-url-form/qr-generator';
import SubmitButton from '@/components/common/submit-button';
import shortenURL from '@/services/urls/mutations/shortenURL';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

export default function ShortenURLForm() {
  const [state, dispatch] = useFormState(shortenURL, {
    success: null,
    error: null,
  });

  const { error, success } = state;

  useEffect(() => {
    if (!success) return;
    toast.success(success.message);
  }, [success]);

  useEffect(() => {
    if (!error) return;
    toast.error(error.message);
  }, [error]);

  return (
    <Card className='mx-auto max-w-3xl'>
      <CardHeader>
        <CardTitle>Shorten URL</CardTitle>
        <CardDescription>
          Shortened URLs will be deleted after 30 days, register to enjoy all
          the benefits.
        </CardDescription>
      </CardHeader>
      <form action={dispatch}>
        <CardContent>
          <div className='space-y-2.5'>
            <Label htmlFor='originalURL'>Short URL</Label>
            <Input
              type='url'
              id='originalURL'
              name='originalURL'
              placeholder='Enter the URL you want to shorten'
              required
            />
          </div>
          <CopyToClipboard success={success} />
          {success && <QRGenerator url={success.data} />}
        </CardContent>
        <CardFooter>
          <SubmitButton>Shorten URL</SubmitButton>
        </CardFooter>
      </form>
    </Card>
  );
}
