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
import SubmitButton from '@/components/common/submit-button';
import { Switch } from '@/components/common/switch';
import { Url } from '@/models/urls';
import { updateUrl } from '@/services/urls/mutations/updateUrl';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const INITIAL_STATE = { error: null, success: null };

export default function UpdateURLForm({ url }: { url: Url }) {
  const [formState, dispatch] = useFormState(updateUrl, INITIAL_STATE);

  const { error, success } = formState;

  const formRef = useRef<HTMLFormElement | null>(null);

  const [originalUrl, setOriginalUrl] = useState<string>(url.originalUrl);
  const [isActive, setActive] = useState<boolean>(url.active);
  const [expirationDateError, setExpirationDateError] = useState<string | null>(
    null,
  );
  const [customAlias, setCustomAlias] = useState<string | null>(
    url.customAlias,
  );
  const [expirationDate, setExpirationDate] = useState<Date | undefined>(
    url.expirationDate,
  );

  useEffect(() => {
    if (!error) return;
    toast.error(error.message);
  }, [error]);

  useEffect(() => {
    if (!success) return;
    toast.success(success.message);
  }, [success]);

  return (
    <Dialog>
      <DialogTrigger className='flex w-full items-center gap-3 rounded-md text-sm'>
        <PencilSquareIcon height={24} width={24} />
        Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update URL</DialogTitle>
        </DialogHeader>
        <form action={dispatch} ref={formRef} className='mt-2'>
          <input type='hidden' id='urlId' name='urlId' value={url.id} />
          <input
            type='hidden'
            id='shortUrl'
            name='shortUrl'
            value={url.shortUrl}
          />
          <div className='mb-5 space-y-2.5'>
            <Label htmlFor='originalUrl'>Original URL</Label>
            <Input
              id='originalUrl'
              type='text'
              name='originalUrl'
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder='Enter your URL'
            />
          </div>
          <div className='mb-5 space-y-2.5'>
            <Label htmlFor='originalUrl'>Custom alias (Optional)</Label>
            <div className='flex gap-3'>
              <Input
                id='customAlias'
                type='text'
                name='customAlias'
                value={customAlias ?? ''}
                onChange={(e) => setCustomAlias(e.target.value)}
                placeholder='Enter your custom alias'
              />
              <Button
                type='button'
                variant='secondary'
                onClick={() => setCustomAlias('')}
              >
                <TrashIcon width={20} height={20} />
              </Button>
            </div>
          </div>
          <div className='mb-5 space-y-2.5'>
            <Label htmlFor='expirationDate'>Expiration Date (Optional)</Label>
            <input
              type='datetime-local'
              id='expirationDate'
              name='expirationDate'
              value={
                expirationDate
                  ? dayjs(expirationDate).format('YYYY-MM-DDTHH:mm:ss')
                  : undefined
              }
              hidden
            />
            <DatePicker date={expirationDate} setDate={setExpirationDate} />
          </div>
          <div className='mb-5 flex items-center space-x-2'>
            <Switch
              id='active'
              checked={isActive}
              onCheckedChange={(e) => setActive(e)}
            />
            <Label>Set availability</Label>
          </div>
          <DialogFooter className='mt-4 space-y-2'>
            <div className='mt-4 flex space-x-2'>
              <DialogClose asChild>
                <Button type='button' variant='secondary'>
                  Close
                </Button>
              </DialogClose>
              <SubmitButton className='w-32'>Save Changes</SubmitButton>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
