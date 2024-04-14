import { Card } from '@/components/common/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/table';
import { getURLInfo } from '@/services/urls/queries/getURLInfo';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default async function URLInformation({ url }: { url: string }) {
  const response = await getURLInfo(url);

  const { error, success } = response;

  if (error || !success) return null;

  const { data } = success;

  return (
    <Card className='w-full overflow-auto'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Original URL</TableHead>
            <TableHead>Short URL</TableHead>
            <TableHead>Expiration Date</TableHead>
            <TableHead>Visits</TableHead>
            <TableHead>Active</TableHead>
            <TableHead>Creataed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{data.originalUrl}</TableCell>
            <TableCell>https://shrk.io/{data.shortUrl}</TableCell>
            <TableCell>
              {data.expirationDate
                ? dayjs(data.expirationDate).format('MMMM D, YYYY h:mm A')
                : 'No expiration date'}
            </TableCell>
            <TableCell>{data.requestCount}</TableCell>
            <TableCell>
              <span
                className={`me-2 rounded px-2.5 py-0.5 text-xs font-medium ${data.active ? 'dark:bg-green-900 dark:text-green-300' : 'dark:bg-red-900 dark:text-red-300'}`}
              >
                {data.active ? 'Yes' : 'No'}
              </span>
            </TableCell>
            <TableCell>{dayjs(data.createdAt).fromNow()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
