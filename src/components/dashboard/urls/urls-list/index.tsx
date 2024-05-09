import { buttonVariants } from '@/components/common/button';
import { Card } from '@/components/common/card';
import { Label } from '@/components/common/label';
import CreateURLForm from '@/components/common/navbar/create-url-form';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/table';
import UpdateURLForm from '@/components/dashboard/urls/update-url-form';
import UrlOptionsDropdown from '@/components/dashboard/urls/url-options-dropdown';
import { CLIENT_APP_URL } from '@/lib/constants';
import { getURLsByUser } from '@/services/urls/queries/getURLsByUser';
import { ChartBarIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import DeleteURL from './delete-url';

dayjs.extend(relativeTime);

export default async function LinksList() {
  const { error, success } = await getURLsByUser();

  if (error) {
    return (
      <div className='flex h-full w-full items-center justify-center p-6 text-center'>
        <Label>Error when getting the urls</Label>
      </div>
    );
  }

  if (!success) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div className='ldrs-ring-container' />
      </div>
    );
  }

  if (!success.data.length) {
    return (
      <div className='flex h-[50%] w-full flex-col items-center justify-center gap-5 py-6'>
        <Label className='max-w-sm text-center text-base'>
          You have not shortened any URLs, start shortening your first link
        </Label>
        <CreateURLForm />
      </div>
    );
  }

  return (
    <>
      <header className='pb-6'>
        <h1 className='mb-px text-3xl font-bold'>URLs list</h1>
        <p className='text-gray-400'>Select one to see its statistics</p>
      </header>
      <Card className='w-full overflow-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='max-[1024px]:hidden'>
                Original url
              </TableHead>
              <TableHead>Short url</TableHead>
              <TableHead className='max-[1024px]:hidden'>Visits</TableHead>
              <TableHead className='max-[1024px]:hidden'>
                Expiration Date
              </TableHead>
              <TableHead className='max-[1024px]:hidden'>Created</TableHead>
              <TableHead className='max-[1024px]:hidden'>Active</TableHead>
              <TableHead className='max-[1024px]:hidden'>Options</TableHead>
              <TableHead className='text-center lg:hidden'>Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {success.data.map((url) => (
              <TableRow key={url.id}>
                <TableCell className='max-w-56 truncate max-[1024px]:hidden'>
                  {url.originalUrl}
                </TableCell>
                <TableCell>
                  <Link
                    href={`${CLIENT_APP_URL}/${url.shortUrl}`}
                    target='_blank'
                  >
                    {`${CLIENT_APP_URL}/${url.shortUrl}`}
                  </Link>
                </TableCell>
                <TableCell className='max-[1024px]:hidden'>
                  {url.requestCount}
                </TableCell>
                <TableCell className='max-[1024px]:hidden'>
                  {!url.expirationDate
                    ? 'No expiration date'
                    : dayjs(url.expirationDate).format('MMMM D, YYYY h:mm A')}
                </TableCell>
                <TableCell className='max-[1024px]:hidden'>
                  {dayjs(url.createdAt).fromNow()}
                </TableCell>
                <TableCell className='max-[1024px]:hidden'>
                  <span
                    className={`me-2 rounded px-2.5 py-0.5 text-xs font-medium ${url.active ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`}
                  >
                    {url.active ? 'Yes' : 'No'}
                  </span>
                </TableCell>
                <TableCell className='hidden justify-center lg:flex'>
                  <UrlOptionsDropdown url={url} />
                </TableCell>
                <TableCell className='flex items-center gap-5 lg:hidden'>
                  <Link
                    href={`/dashboard/urls/${url.shortUrl}`}
                    className={buttonVariants({
                      variant: 'secondary',
                      className:
                        'flex w-full items-center gap-3 rounded-md text-sm',
                    })}
                  >
                    <ChartBarIcon height={24} width={24} />
                    Stats
                  </Link>
                  <div className={buttonVariants({ variant: 'secondary' })}>
                    <UpdateURLForm url={url} />
                  </div>
                  <div className={buttonVariants({ variant: 'secondary' })}>
                    <DeleteURL id={url.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
