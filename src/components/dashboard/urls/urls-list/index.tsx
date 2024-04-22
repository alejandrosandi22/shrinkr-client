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
import UrlOptionsDropdown from '@/components/dashboard/urls/url-options-dropdown';
import { getURLsByUser } from '@/services/urls/queries/getURLsByUser';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';

dayjs.extend(relativeTime);

export default async function LinksList() {
  const { error, success } = await getURLsByUser();

  if (error) {
    return (
      <div className='w-full p-6 text-center'>
        <Label>Error when getting the urls</Label>
      </div>
    );
  }

  if (!success) {
    return <span>Loadng..</span>;
  }

  if (!success.data.length) {
    return (
      <div className='flex w-full items-center gap-2.5 py-6'>
        <h6 className='mb-px text-3xl font-bold'>
          Start shortening your first link:
        </h6>
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
              <TableHead>Original url</TableHead>
              <TableHead>Short url</TableHead>
              <TableHead>Visits</TableHead>
              <TableHead>Expiration Date</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Active</TableHead>
              <TableHead>Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {success.data.map((url) => (
              <TableRow key={url.id}>
                <TableCell className='max-w-56 truncate'>
                  {url.originalUrl}
                </TableCell>
                <TableCell>
                  <Link
                    href={`${process.env.CLIENT_APP_URL}/${url.shortUrl}`}
                    target='_blank'
                  >
                    {`${process.env.CLIENT_APP_URL}/${url.shortUrl}`}
                  </Link>
                </TableCell>
                <TableCell>{url.requestCount}</TableCell>
                <TableCell>
                  {!url.expirationDate
                    ? 'No expiration date'
                    : dayjs(url.expirationDate).format('MMMM D, YYYY h:mm A')}
                </TableCell>
                <TableCell>{dayjs(url.createdAt).fromNow()}</TableCell>
                <TableCell>
                  <span
                    className={`me-2 rounded px-2.5 py-0.5 text-xs font-medium ${url.active ? 'dark:bg-green-900 dark:text-green-300' : 'dark:bg-red-900 dark:text-red-300'}`}
                  >
                    {url.active ? 'Yes' : 'No'}
                  </span>
                </TableCell>
                <TableCell className='flex justify-center'>
                  <UrlOptionsDropdown url={url} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
