import { ErrorState, FormErrorState } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleError(errorState: ErrorState | string): FormErrorState {
  if (typeof errorState === 'string') {
    return {
      error: {
        message: errorState,
      },
    };
  }

  return {
    error: {
      message: errorState.message,
      type: errorState.type,
    },
  };
}
