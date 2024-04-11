'use client';

import { Button } from '@/components/common/button';
import { Ring } from '@uiball/loaders';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  children: ReactNode;
}

export default function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button className='w-full' aria-disabled={pending}>
      {pending ? <Ring color='#FFFFFF' size={24} /> : children}
    </Button>
  );
}
