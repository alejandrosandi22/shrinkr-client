'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/common/dropdown';
import { URLModel } from '@/models/urls';
import { deleteURL } from '@/services/urls/mutations/deleteURL';
import {
  ChartBarIcon,
  EllipsisVerticalIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import UpdateURLForm from '../update-url-form';

interface UrlOptionsDropdownProps {
  url: URLModel;
}

export default function UrlOptionsDropdown({ url }: UrlOptionsDropdownProps) {
  const deleteURLWithId = deleteURL.bind(null, url.id);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <EllipsisVerticalIcon width={24} height={24} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className='relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-muted focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
            <Link
              href={`/dashboard/urls/${url.shortUrl}`}
              className='flex w-full items-center gap-3 rounded-md text-sm'
            >
              <ChartBarIcon height={24} width={24} />
              See stats
            </Link>
          </div>
          <div className='relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-muted focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
            <UpdateURLForm url={url} />
          </div>
          <div className='relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-muted focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
            <form action={deleteURLWithId}>
              <button className='flex w-full items-center gap-3 rounded-md text-sm'>
                <TrashIcon height={24} width={24} />
                Delete
              </button>
            </form>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
