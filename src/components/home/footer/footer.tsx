import favicon from '@/assets/favicon.svg';
import { buttonVariants } from '@/components/common/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between gap-8 py-16 lg:flex-row'>
          <Link href='/' className='flex items-center gap-2 text-lg font-bold'>
            <Image
              src={favicon}
              alt='Icon for the website'
              width={50}
              height={50}
              className='h-5 w-5'
            />
            <span>Shrinkr</span>
          </Link>
          <ul className='items-cente justify-center gap-14 text-center text-lg transition-all duration-500 sm:flex lg:gap-10 xl:gap-14'>
            <li>
              <Link href='/' className={buttonVariants({ variant: 'ghost' })}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='https://alejandrosandi.dev'
                target='_blank'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Portfolio
              </Link>
            </li>
            <li className='my-2 sm:my-0'>
              <Link
                href='/terms-and-conditions'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Terms and conditions
              </Link>
            </li>
            <li>
              <Link
                href='/privacy-policy'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
          <div className='flex  space-x-4 sm:justify-center  '>
            <Link
              href='https://github.com/alejandrosandi22/shrinkr-client'
              target='_blank'
              className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary hover:bg-primary'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                <path d='M9 18c-4.51 2-5-2-7-2' />
              </svg>
            </Link>
            <Link
              href='https://linkedin.com/in/alejandrosandi'
              className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary hover:bg-primary'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                <rect width='4' height='12' x='2' y='9' />
                <circle cx='4' cy='4' r='2' />
              </svg>
            </Link>
            <Link
              href='mailto:a.sandi.developer@gmail.com'
              className='flex h-9 w-9 items-center justify-center rounded-full bg-secondary hover:bg-primary'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect width='20' height='16' x='2' y='4' rx='2' />
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
              </svg>
            </Link>
          </div>
        </div>
        <div className='border-t border-gray-700 py-7'>
          <div className='flex items-center justify-center'>
            <span className='text-muted-foreground '>
              ©Shrinkr 2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
