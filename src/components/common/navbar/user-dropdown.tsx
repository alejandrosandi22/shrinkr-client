'use client';

import defaultAvatar from '@/assets/default-avatar.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/common/dropdown';
import { User } from '@/models/users';
import { signOut } from '@/services/auth/signOut';
import {
  ArrowLeftStartOnRectangleIcon,
  Cog8ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useFormState } from 'react-dom';

export default function UserDropdown({ user }: { user: User }) {
  const [state, dispatch] = useFormState(signOut, undefined);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Image
            src={user.avatar ?? defaultAvatar}
            alt={`Profile picture of the user ${user.name}`}
            width={100}
            height={100}
            className='h-9 w-9 rounded-full'
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='mt-2.5'>
        <DropdownMenuItem>
          <Link
            href='/dashboard'
            className='flex w-full items-center gap-3 rounded-md text-sm'
          >
            <HomeIcon width={20} height={20} />
            Overview
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href='/dashboard/settings'
            className='flex w-full items-center gap-3 rounded-md text-sm'
          >
            <Cog8ToothIcon width={20} height={20} />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href='/dashboard'
            className='flex w-full items-center gap-3 rounded-md text-sm'
          >
            <ArrowLeftStartOnRectangleIcon width={20} height={20} />
            Log out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
