import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and tailwind-merge libraries.
 * @param inputs An array of class names or class name arrays.
 * @returns A string representing the combined class names.
 */
export default function c(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
