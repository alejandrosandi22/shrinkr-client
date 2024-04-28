'use client';

import { Button } from '@/components/common/button';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  children: ReactNode;
  className?: string;
}

export default function SubmitButton({
  children,
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      className={cn('w-full', className)}
      aria-disabled={pending}
    >
      {pending ? (
        <div className='ldrs-ring-container ldrs-ring-sm' />
      ) : (
        children
      )}
    </Button>
  );
}
