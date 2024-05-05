'use client';

import { User } from '@/models/users';
import { ErrorState } from '@/types';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { buttonVariants } from '../button';
import CreateURLForm from './create-url-form';
import UserDropdown from './user-dropdown';

interface NavbarOptionsProps {
  user?: User;
  error: ErrorState | null;
}

export default function Options({ user, error }: NavbarOptionsProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!pathname.startsWith('/dashboard')) return;
    if (user || error) return;

    router.refresh();
  }, [pathname]);

  return (
    <div className='flex items-center gap-5'>
      {user ? (
        <div className='flex items-center gap-5'>
          <CreateURLForm />
          <UserDropdown user={user} />
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
    </div>
  );
}
