'use client';

import { PUBLIC_SERVER_BASE_API } from '@/lib/constants';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SocialAuthentication() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className='space-y-5'>
        <Link
          href={`${PUBLIC_SERVER_BASE_API}/auth/google`}
          className='inline-flex h-10 w-full items-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
        >
          <svg
            className='mr-2 h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='-0.5 0 48 48'
            version='1.1'
          >
            <g
              id='Icons'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g id='Color-' transform='translate(-401.000000, -860.000000)'>
                <g id='Google' transform='translate(401.000000, 860.000000)'>
                  <path
                    d='M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24'
                    id='Fill-1'
                    fill='#FFFFFF'
                  ></path>
                  <path
                    d='M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333'
                    id='Fill-2'
                    fill='#FFFFFF'
                  ></path>
                  <path
                    d='M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667'
                    id='Fill-3'
                    fill='#FFFFFF'
                  ></path>
                  <path
                    d='M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24'
                    id='Fill-4'
                    fill='#FFFFFF'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <span>Continue with Google</span>
        </Link>
        <Link
          href={`${PUBLIC_SERVER_BASE_API}/auth/facebook`}
          className='inline-flex h-10 w-full items-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
        >
          <svg
            className='mr-2 h-6 w-6'
            fill='#FFFFFF'
            viewBox='0 0 32 32'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              <title>facebook</title>
              <path d='M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z'></path>{' '}
            </g>
          </svg>

          <span>Continue with Facebook</span>
        </Link>
      </div>
    );

  return (
    <div className='space-y-5'>
      <Link
        href={`${PUBLIC_SERVER_BASE_API}/auth/google`}
        className='inline-flex h-10 w-full items-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
      >
        <svg
          className='mr-2 h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='-0.5 0 48 48'
          version='1.1'
        >
          <g
            id='Icons'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
          >
            <g id='Color-' transform='translate(-401.000000, -860.000000)'>
              <g id='Google' transform='translate(401.000000, 860.000000)'>
                <path
                  d='M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24'
                  id='Fill-1'
                  fill={resolvedTheme === 'dark' ? '#FFFFFF' : '#FBBC05'}
                ></path>
                <path
                  d='M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333'
                  id='Fill-2'
                  fill={resolvedTheme === 'dark' ? '#FFFFFF' : '#EB4335'}
                ></path>
                <path
                  d='M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667'
                  id='Fill-3'
                  fill={resolvedTheme === 'dark' ? '#FFFFFF' : '#34A853'}
                ></path>
                <path
                  d='M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24'
                  id='Fill-4'
                  fill={resolvedTheme === 'dark' ? '#FFFFFF' : '#4285F4'}
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <span>Continue with Google</span>
      </Link>
      <Link
        href={`${PUBLIC_SERVER_BASE_API}/auth/facebook`}
        className='inline-flex h-10 w-full items-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
      >
        <svg
          className='mr-2 h-6 w-6'
          fill={resolvedTheme === 'dark' ? '#FFFFFF' : '#4460A0'}
          viewBox='0 0 32 32'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <title>facebook</title>
            <path d='M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z'></path>{' '}
          </g>
        </svg>

        <span>Continue with Facebook</span>
      </Link>
    </div>
  );
}
