'use client';

import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import SubmitButton from '@/components/common/submit-button';
import { Textarea } from '@/components/common/textarea';
import { supportEmail } from '@/services/users/mutations/support-email';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const INITIAL_STATE = { error: null, success: null };

export default function SupportForm() {
  const [status, dispatch] = useFormState(supportEmail, INITIAL_STATE);
  const formRef = useRef<HTMLFormElement | null>(null);

  const { error, success } = status;

  useEffect(() => {
    if (!success) return;
    toast.success(success.message);

    if (!formRef.current) return;
    formRef.current.reset();
  }, [success]);

  useEffect(() => {
    if (!error) return;
    toast.error(error.message);
  }, [error]);

  return (
    <form ref={formRef} action={dispatch} className='max-w-sm'>
      <div className='mb-5 space-y-2.5'>
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
          required
        />
      </div>
      <div className='mb-5 space-y-2.5'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          required
        />
      </div>
      <div className='mb-5 space-y-2.5'>
        <Label htmlFor='reason'>Reason</Label>
        <Input
          type='text'
          id='reason'
          name='reason'
          placeholder='Tell us about it'
          required
        />
      </div>
      <div className='mb-5 space-y-2.5'>
        <Label htmlFor='message'>Message</Label>
        <Textarea
          id='message'
          name='message'
          placeholder='Leave a message'
          required
        />
      </div>
      <SubmitButton className='my-5 w-full'>Send</SubmitButton>
    </form>
  );
}
