import { Card } from '@/components/common/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/table';

export default function URLInformation() {
  return (
    <Card className='w-full overflow-auto'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Original URL</TableHead>
            <TableHead>Short URL</TableHead>
            <TableHead>Expiration Date</TableHead>
            <TableHead>Visits</TableHead>
            <TableHead>Unique Visitors</TableHead>
            <TableHead>Active</TableHead>
            <TableHead>Creataed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>https://longurl.com/long</TableCell>
            <TableCell>https://shrk.io/vBjPtk</TableCell>
            <TableCell>April 18, 2024 11:15 PM</TableCell>
            <TableCell>425</TableCell>
            <TableCell>398</TableCell>
            <TableCell>
              <span
                className={`me-2 rounded px-2.5 py-0.5 text-xs font-medium ${true ? 'dark:bg-green-900 dark:text-green-300' : 'dark:bg-red-900 dark:text-red-300'}`}
              >
                {true ? 'Yes' : 'No'}
              </span>
            </TableCell>
            <TableCell>2 months ago</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
