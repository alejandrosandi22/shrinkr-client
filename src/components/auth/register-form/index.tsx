'use client';

import SocialAuthentication from '@/components/auth/social-authentication';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import SubmitButton from '@/components/common/submit-button';
import { register } from '@/services/auth/register';
import Link from 'next/link';
import { useFormState } from 'react-dom';

const FORM_INITIAL_STATE = {
  error: null,
  success: null,
};

export default function LoginForm() {
  const [formState, dispatch] = useFormState(register, FORM_INITIAL_STATE);
  const { error } = formState;

  return (
    <form action={dispatch} className='m-auto max-w-xs space-y-3 py-10'>
      <div className='mb-10'>
        <h1 className='mb-px text-3xl font-bold'>Welcome to Shrinkr</h1>
        <p className='text-primary-600 dark:text-gray-400'>
          Create an account to enjoy our benefits
        </p>
      </div>
      <div className='w-full'>
        <div className='mb-2.5 w-full space-y-2'>
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='mb-2.5 w-full space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='mb-2.5 w-full space-y-2'>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='Enter a secure password'
            required
          />
        </div>
      </div>
      <div className='mt-4'>
        <SubmitButton>Sign up</SubmitButton>
      </div>
      <p className='my-5 text-center'>or</p>
      <SocialAuthentication />
      <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
        Already have an account?{' '}
        <Link
          href='/auth/login'
          className='text-secondary-600 dark:text-primary-500 font-medium hover:underline'
        >
          Log in
        </Link>
      </p>
    </form>
  );
}
