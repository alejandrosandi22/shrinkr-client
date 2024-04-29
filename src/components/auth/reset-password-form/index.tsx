'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import SubmitButton from '@/components/common/submit-button';
import { resetPassword } from '@/services/auth/mutations/resetPassword';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const INITIAL_STATE = { success: null, error: null };

export default function ResetPasswordForm() {
  const [state, dispatch] = useFormState(resetPassword, INITIAL_STATE);
  const router = useRouter();

  const { error, success } = state;

  useEffect(() => {
    if (!success) return;
    toast.success(success.message);
    router.push('/auth/login');
  }, [router, success]);

  useEffect(() => {
    if (!error) return;
    toast.error(error.message);
  }, [error]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reset password</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={dispatch}>
          <div className='mb-5 w-full space-y-2.5'>
            <Label htmlFor='new-password'>New password</Label>
            <Input
              type='password'
              id='new-password'
              name='new-password'
              placeholder='*******'
              minLength={6}
              required
            />
          </div>
          <div className='mb-5 w-full space-y-2.5'>
            <Label htmlFor='confirm-password'>Confirm password</Label>
            <Input
              type='password'
              id='confirm-password'
              name='confirm-password'
              placeholder='*******'
              minLength={6}
              required
            />
          </div>
          <div>
            <SubmitButton>Reset password</SubmitButton>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
