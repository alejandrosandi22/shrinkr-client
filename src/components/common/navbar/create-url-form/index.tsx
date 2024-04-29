'use client';

import { Button } from '@/components/common/button';
import { DatePicker } from '@/components/common/date-picker';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/dialog';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import CopyToClipboard from '@/components/common/navbar/create-url-form/copy-to-clipboard';
import SubmitButton from '@/components/common/submit-button';
import { createURL } from '@/services/urls/mutations/createURL';
import { useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const INITIAL_STATE = { success: null, error: null };

export default function CreateURLForm() {
  const [formState, dispatch] = useFormState(createURL, INITIAL_STATE);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [expirationDate, setExpirationDate] = useState<Date | undefined>();

  const { success, error } = formState;

  useEffect(() => {
    if (!formRef.current) return;

    if (!success) return;
    toast.success(success.message);
    formRef.current.reset();
  }, [success]);

  useEffect(() => {
    if (!error || error.type) return;
    toast.error(error.message);
  }, [error]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New link</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create new URL</DialogTitle>
        </DialogHeader>
        <form action={dispatch} ref={formRef} className='mt-2'>
          <div className='mb-5 space-y-2.5'>
            <Label htmlFor='originalUrl'>Original URL</Label>
            <Input
              id='originalUrl'
              type='text'
              name='originalUrl'
              placeholder='Enter your URL'
            />
          </div>
          <div className='mb-5 space-y-2.5'>
            <Label htmlFor='customAlias'>Custom alias (Optional)</Label>
            <Input
              id='customAlias'
              type='text'
              name='customAlias'
              placeholder='Enter your custom alias'
            />
          </div>
          <div className='mb-5 space-y-2.5'>
            <Label htmlFor='expirationDate'>Expiration Date (Optional)</Label>
            <DatePicker date={expirationDate} setDate={setExpirationDate} />
            <input
              id='expirationDate'
              name='expirationDate'
              type='text'
              value={`${expirationDate}`}
              hidden
            />
          </div>
          <CopyToClipboard success={success} />

          <DialogFooter>
            <div className='mt-4 flex space-x-2'>
              <DialogClose asChild>
                <Button type='button' variant='secondary'>
                  Close
                </Button>
              </DialogClose>
              <SubmitButton>Create</SubmitButton>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
