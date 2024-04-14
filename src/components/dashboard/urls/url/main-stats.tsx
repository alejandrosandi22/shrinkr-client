import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/card';

interface MainStatsProps {
  visits: number;
  uniqueVisitors: number;
  returnVisitors: number;
}

export default function MainStats({
  visits,
  uniqueVisitors,
  returnVisitors,
}: MainStatsProps) {
  return (
    <section className='grid gap-5 md:grid-cols-3'>
      <Card>
        <CardHeader className='pb-6'>
          <CardDescription>Visits</CardDescription>
          <CardTitle className='text-4xl'>{visits}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className='pb-6'>
          <CardDescription>Unique visitors</CardDescription>
          <CardTitle className='text-4xl'>{uniqueVisitors}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className='pb-6'>
          <CardDescription>Return visitors</CardDescription>
          <CardTitle className='text-4xl'>{returnVisitors}</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
}
