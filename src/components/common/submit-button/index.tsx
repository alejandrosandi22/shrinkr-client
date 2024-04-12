'use client';

import { Button } from '@/components/common/button';
import { cn } from '@/lib/utils';
import { Ring } from '@uiball/loaders';
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
    <Button className={cn('w-full', className)} aria-disabled={pending}>
      {pending ? <Ring color='#FFFFFF' size={24} /> : children}
    </Button>
  );
}
