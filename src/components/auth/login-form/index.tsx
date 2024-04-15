'use client';

import SocialAuthentication from '@/components/auth/social-authentication';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import SubmitButton from '@/components/common/submit-button';
import { authenticate } from '@/services/auth/authenticate';
import Link from 'next/link';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const FORM_INITIAL_STATE = { error: null, success: null };

export default function LoginForm() {
  const [formState, dispatch] = useFormState(authenticate, FORM_INITIAL_STATE);
  const { error } = formState;

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
              <input
                id='remember'
                aria-describedby='remember'
                type='checkbox'
                className='focus:ring-3 focus:ring-primary-300 dark:border-primary-600 dark:bg-primary-700 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:ring-offset-gray-800'
              />
            </div>
            <div className='ml-3 text-sm'>
              <label
                htmlFor='remember'
                className='text-gray-500 dark:text-gray-300'
              >
                Remember me
              </label>
            </div>
          </div>
          <Link
            href='auth/recovery'
            className='text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline'
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
      <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
        Don’t have an account yet?{' '}
        <Link
          href='/auth/signup'
          className='text-secondary-600 dark:text-primary-500 font-medium hover:underline'
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
