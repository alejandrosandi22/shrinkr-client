'use client';

import { buttonVariants } from '@/components/common/button';
import CreateURLForm from '@/components/common/navbar/create-url-form';
import ThemeToggle from '@/components/common/navbar/theme-toggle';
import UserDropdown from '@/components/common/navbar/user-dropdown';
import { User } from '@/models/users';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Options({ data }: { data: User | null }) {
  const router = useRouter();

  useEffect(() => {
    if (data) return;
    router.refresh();
  }, [router, data]);

  return (
    <>
      <ThemeToggle />
      {data ? (
        <div className='flex items-center gap-5'>
          <CreateURLForm />
          <UserDropdown user={data} />
        </div>
      ) : (
        <ul className='flex gap-3'>
          <li>
            <Link
              className={buttonVariants({ variant: 'outline' })}
              href='/auth/login'
            >
              Log in
            </Link>
          </li>
          <li>
            <Link className={buttonVariants()} href='/auth/signup'>
              Sign up
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
