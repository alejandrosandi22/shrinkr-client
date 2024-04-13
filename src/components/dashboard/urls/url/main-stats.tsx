import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/card';

export default function MainStats() {
  return (
    <section className='grid gap-5 md:grid-cols-3'>
      <Card>
        <CardHeader className='pb-6'>
          <CardDescription>Visits</CardDescription>
          <CardTitle className='text-4xl'>689</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className='pb-6'>
          <CardDescription>Unique visitors</CardDescription>
          <CardTitle className='text-4xl'>597</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className='pb-6'>
          <CardDescription>Return visitors</CardDescription>
          <CardTitle className='text-4xl'>425</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
}
