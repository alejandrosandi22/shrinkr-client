/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import SocialAuthentication from '@/components/auth/social-authentication';
import { Checkbox } from '@/components/common/checkbox';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import SubmitButton from '@/components/common/submit-button';
import { authenticate } from '@/services/auth/mutations/authenticate';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const FORM_INITIAL_STATE = { error: null, success: null };
const LOCAL_STORAGE_KEY = 'shrinkr-remember-user';

export default function LoginForm() {
  const [formState, dispatch] = useFormState(authenticate, FORM_INITIAL_STATE);
  const [email, setEmail] = useState<string>('');
  const [rememberEmail, setRememberEmail] = useState<boolean>(false);
  const { error } = formState;

  const updateCheckbox = (checked: boolean) => {
    setRememberEmail(checked);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const item = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (item) {
      setEmail(item);
      setRememberEmail(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!rememberEmail) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return;
    }

    if (rememberEmail) {
      localStorage.setItem(LOCAL_STORAGE_KEY, email);
      return;
    }
  }, [email, rememberEmail]);

  useEffect(() => {
    if (!error) return;
    toast.error(error.message);
  }, [error]);

  return (
    <form action={dispatch} className='m-auto max-w-xs space-y-3 py-10'>
      <div className='mb-10'>
        <h1 className='mb-px text-3xl font-bold'>Welcome back</h1>
        <p className='text-primary-600 dark:text-gray-400'>
          Log in to your account to continue
        </p>
      </div>
      <div className='w-full'>
        <div className='mb-5 w-full space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            name='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-5 w-full space-y-2'>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='password'
            name='password'
            placeholder='Enter password'
            required
            minLength={6}
          />
        </div>
        <div className='mt-3 flex items-center justify-between'>
          <div className='flex items-start'>
            <div className='flex h-5 items-center'>
              <Checkbox
                id='remember'
                aria-describedby='remember'
                checked={rememberEmail}
                onCheckedChange={updateCheckbox}
              />
            </div>
            <div className='ml-3 text-sm'>
              <Label htmlFor='remember'>Remember me</Label>
            </div>
          </div>
          <Link
            href='/auth/recovery'
            className='text-sm text-primary underline-offset-4 hover:underline'
          >
            Forgot password?
          </Link>
        </div>
      </div>
      <div className='mt-4'>
        <SubmitButton>Log in</SubmitButton>
      </div>
      <p className='my-5 text-center'>or</p>
      <SocialAuthentication />
      <p className='text-sm text-muted-foreground'>
        Don’t have an account yet?{' '}
        <Link
          href='/auth/signup'
          className='text-primary underline-offset-4 hover:underline'
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
