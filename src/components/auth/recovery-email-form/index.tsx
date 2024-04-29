'use client';

import { buttonVariants } from '@/components/common/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import SubmitButton from '@/components/common/submit-button';
import { sendRecoveryEmail } from '@/services/auth/mutations/sendRecoveryEmail';
import Link from 'next/link';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const INITIAL_STATE = { success: null, error: null };

export default function RecoveryEmailForm() {
  const [state, dispatch] = useFormState(sendRecoveryEmail, INITIAL_STATE);

  const { error, success } = state;

  useEffect(() => {
    if (!success) return;
    toast.success(success.message, {
      duration: 10000,
    });
  }, [success]);

  useEffect(() => {
    if (!error) return;
    if (error.type) return;
    toast.error(error.message);
  }, [error]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Forgot password?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='mt-5'>
          <form action={dispatch}>
            <div className='grid gap-y-4'>
              <div>
                <div className='relative'>
                  <Label
                    htmlFor='email'
                    className='mb-2 ml-1 block text-sm font-bold dark:text-white'
                  >
                    Email
                  </Label>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your email address'
                    required
                  />
                </div>
                <div>
                  {state.error && (
                    <span className='my-2.5 text-sm text-red-500'>
                      {state.error.message}
                    </span>
                  )}
                </div>
              </div>
              <SubmitButton>Send</SubmitButton>
              <Link
                href='/auth/login'
                className={buttonVariants({ variant: 'link' })}
              >
                Go back
              </Link>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
