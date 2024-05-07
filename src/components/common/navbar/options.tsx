'use client';

import defaultAvatar from '@/assets/default-avatar.svg';
import { User } from '@/models/users';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { buttonVariants } from '../button';
import CreateURLForm from './create-url-form';
import UserDropdown from './user-dropdown';

interface NavbarOptionsProps {
  user?: User;
}

export default function Options({ user }: NavbarOptionsProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!pathname.startsWith('/dashboard')) return;
    if (user) return;

    router.refresh();
  }, [pathname]);

  useEffect(() => {
    if (!user) return;
    setLoading(false);
  }, [user]);

  if (!user && isLoading && pathname.startsWith('/dashboard'))
    return (
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-5'>
          <CreateURLForm />
          <button>
            <Image
              src={defaultAvatar}
              alt={`Loading profile of the user`}
              width={100}
              height={100}
              className='h-9 w-9 rounded-full'
            />
          </button>
        </div>
      </div>
    );

  if (user && pathname.startsWith('/dashboard'))
    return (
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-5'>
          <CreateURLForm />
          <UserDropdown user={user} />
        </div>
      </div>
    );

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
