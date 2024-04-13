import { Card } from '@/components/common/card';
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
      <div>
        <p>Error when getting the urls</p>
      </div>
    );
  }

  if (!success) {
    return <span>Loadng..</span>;
  }

  return (
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
  );
}
