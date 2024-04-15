'use client';

import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import { Textarea } from '@/components/common/textarea';
import { supportEmail } from '@/services/users/mutations/support-email';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const INITIAL_STATE = { error: null, success: null };

export default function SupportForm() {
  const [status, dispatch] = useFormState(supportEmail, INITIAL_STATE);

  const { error, success } = status;

  useEffect(() => {
    if (!success) return;
    toast.success(success.message);
  }, [success]);

  useEffect(() => {
    if (!error) return;
    toast.error(error.message);
  }, [error]);

  return (
    <form action={dispatch} className='max-w-sm'>
      <div className='mb-5 space-y-2.5'>
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
        />
      </div>
      <div className='mb-5 space-y-2.5'>
        <Label htmlFor='email'>Email</Label>
        <Input placeholder='Enter your email' />
      </div>
      <div className='mb-5 space-y-2.5'>
        <Label htmlFor='reason'>Reason</Label>
        <Input
          type='text'
          id='reason'
          name='reason'
          placeholder='Tell us about it'
        />
      </div>
      <div className='mb-5 space-y-2.5'>
        <Label htmlFor='note'>Reason</Label>
        <Textarea id='Note' name='note' placeholder='Leave a note' />
      </div>
      <Button className='my-5 w-full'>Send</Button>
    </form>
  );
}
