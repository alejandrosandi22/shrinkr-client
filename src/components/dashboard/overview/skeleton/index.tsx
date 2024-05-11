import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/table';

export default function OverviewSkeleton() {
  return (
    <main>
      <header className='pb-6'>
        <h1 className='mb-px text-3xl font-bold'>
          <div className='h-8 w-20 animate-pulse rounded-md bg-muted' />
        </h1>
        <p className='text-gray-400'>
          <div className='h-6 w-80 animate-pulse rounded-md bg-muted' />
        </p>
      </header>
      <div className='space-y-5'>
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
          <Card>
            <CardHeader className='pb-2'>
              <CardDescription>
                <div className='h-4 w-10 animate-pulse rounded-md bg-muted' />
              </CardDescription>
              <CardTitle className='text-4xl'>
                <div className='h-9 w-14 animate-pulse rounded-md bg-muted' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-3 w-10 animate-pulse rounded-md bg-muted' />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <CardDescription>
                <div className='h-4 w-10 animate-pulse rounded-md bg-muted' />
              </CardDescription>
              <CardTitle className='text-4xl'>
                <div className='h-9 w-14 animate-pulse rounded-md bg-muted' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-3 w-10 animate-pulse rounded-md bg-muted' />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <CardDescription>
                <div className='h-4 w-10 animate-pulse rounded-md bg-muted' />
              </CardDescription>
              <CardTitle className='text-4xl'>
                <div className='h-9 w-14 animate-pulse rounded-md bg-muted' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-3 w-10 animate-pulse rounded-md bg-muted' />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <CardDescription>
                <div className='h-4 w-10 animate-pulse rounded-md bg-muted' />
              </CardDescription>
              <CardTitle className='text-4xl'>
                <div className='h-9 w-14 animate-pulse rounded-md bg-muted' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-3 w-10 animate-pulse rounded-md bg-muted' />
            </CardContent>
          </Card>
        </section>

        <section className='grid w-full grid-cols-1 gap-5 xl:grid-cols-3'>
          <Card className='flex h-96 w-full flex-col overflow-hidden border'>
            <CardHeader>
              <CardTitle>
                <div className='h-9 w-20 animate-pulse rounded-md bg-muted' />
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className='flex h-96 w-full flex-col overflow-hidden border'>
            <CardHeader>
              <CardTitle>
                <div className='h-9 w-20 animate-pulse rounded-md bg-muted' />
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className='flex h-96 w-full flex-col overflow-hidden border'>
            <CardHeader>
              <CardTitle>
                <div className='h-9 w-20 animate-pulse rounded-md bg-muted' />
              </CardTitle>
            </CardHeader>
          </Card>
        </section>
        <section>
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
                <TableRow>
                  <TableCell>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                  <TableCell>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                  <TableCell>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                  <TableCell className='max-w-56 truncate'>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                  <TableCell>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                  <TableCell>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                  <TableCell className='max-w-56 truncate'>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                  <TableCell>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                  <TableCell>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                  <TableCell className='max-w-56 truncate'>
                    <div className='h-3 w-8 animate-pulse rounded-md bg-muted' />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>
      </div>
    </main>
  );
}
