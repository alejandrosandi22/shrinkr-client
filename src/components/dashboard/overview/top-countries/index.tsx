import { Card } from '@/components/common/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/table';
import { CLIENT_APP_URL } from '@/lib/constants';
import { TopCountry } from '@/models/analytics';
import { ErrorState } from '@/types';
import Link from 'next/link';

interface TopCountriesProps {
  data?: TopCountry[];
  error: null | ErrorState;
}

export default async function TopCountries({ data, error }: TopCountriesProps) {
  if (!data || error) {
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
    <Card className='w-full overflow-auto'>
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
          {data.map((url, index) => (
            <TableRow key={`${url.country}-${index}`}>
              <TableCell>{url.country}</TableCell>
              <TableCell>{url.visits}</TableCell>
              <TableCell>{url.uniqueVisitors}</TableCell>
              <TableCell className='max-w-56 truncate'>
                <Link href={`${CLIENT_APP_URL}/${url.mostVisitedURL}`}>
                  {`${CLIENT_APP_URL}/${url.mostVisitedURL}`}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
