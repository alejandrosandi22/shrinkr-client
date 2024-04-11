'use client';

import Input from '@/components/common/input';
import { register } from '@/services/auth/register';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import SocialAuthentication from '../social-authentication';
import SubmitButton from '../submit-button';

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
        <h1 className='mb-px text-3xl font-bold'>Welcome to Sitename</h1>
        <p className='text-primary-600 dark:text-gray-400'>
          Create an account to enjoy our benefits
        </p>
      </div>
      <div className='w-full'>
        <Input
          type='text'
          caption='Name'
          id='name'
          name='name'
          placeholder='Enter your name'
          error={error}
          required
        />
        <Input
          type='email'
          caption='Email'
          id='email'
          name='email'
          placeholder='Enter your email'
          error={error}
          required
        />
        <Input
          type='password'
          caption='Password'
          id='password'
          name='password'
          placeholder='Enter a secure password'
          error={error}
          required
        />
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
