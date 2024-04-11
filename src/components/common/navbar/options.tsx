'use client';

import { Button, buttonVariants } from '@/components/common/button';
import ThemeToggle from '@/components/common/navbar/theme-toggle';
import UserDropdown from '@/components/common/navbar/user-dropdown';
import { User } from '@/models/users';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Options({ data }: { data: User | null }) {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (data) return;
    router.refresh();
  }, [router, data]);

  return (
    <>
      <ThemeToggle />
      {data ? (
        <div className='flex items-center gap-5'>
          <Button onClick={() => setOpen(true)}>New link</Button>
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
