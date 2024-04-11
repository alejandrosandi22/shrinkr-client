import { Card } from '@/components/common/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/table';
import { getTopCountries } from '@/services/analytics/queries/getTopCountries';
import Link from 'next/link';

export default async function TopCountries() {
  const response = await getTopCountries();

  const { error, success } = response;

  if (!success || error) {
    return (
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Country</TableHead>
              <TableHead>Visits</TableHead>
              <TableHead>Unique Visitors</TableHead>
              <TableHead>Most Visited</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
        </Table>
      </Card>
    );
  }

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Country</TableHead>
            <TableHead>Visits</TableHead>
            <TableHead>Unique Visitors</TableHead>
            <TableHead>Most Visited</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {success.data.map((url, index) => (
            <TableRow key={`${url.country}-${index}`}>
              <TableCell>{url.country}</TableCell>
              <TableCell>{url.visits}</TableCell>
              <TableCell>{url.uniqueVisitors}</TableCell>
              <TableCell className='max-w-56 truncate'>
                <Link
                  href={`${process.env.CLIENT_APP_URL}/${url.mostVisitedUrl}`}
                >
                  {`${process.env.CLIENT_APP_URL}/${url.mostVisitedUrl}`}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
