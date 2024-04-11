import { FormErrorState } from '@/types';
import { InputHTMLAttributes } from 'react';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FormErrorState {
  caption: string;
}

export default function Input({
  id,
  type,
  caption,
  error,
  ...rest
}: InputProps) {
  return (
    <>
      {type === 'password' ? (
        <div className='relative'>
          <label htmlFor={id} className='mb-2 mt-5 block text-sm font-medium'>
            {caption}
          </label>
          <input
            {...rest}
            id={id}
            type={type}
            className='flex h-10 w-full rounded-md border-input bg-muted px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
      ) : (
        <div className='relative'>
          <label htmlFor={id} className='mb-2 mt-5 block text-sm font-medium'>
            {caption}
          </label>
          <input
            {...rest}
            id={id}
            type={type}
            className='flex h-10 w-full rounded-md border-input bg-muted px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
      )}
      {error && error.type === id ? (
        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
          {error.message}
        </p>
      ) : null}
    </>
  );
}
