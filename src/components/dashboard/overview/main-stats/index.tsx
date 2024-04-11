import { getMainStats } from '@/services/analytics/queries/getMainStats';
import Card from './card';

export default async function MainStats() {
  const response = await getMainStats();

  const { error, success } = response;

  if (!success?.data || error)
    return (
      <section className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4'>
        <Card title='Unique Visits' value='0' difference={0} />
        <Card title='Visits' value='0' difference={0} />
        <Card title='Top Country' value='N/D' difference={0} />
        <Card title='Top Referrer' value='N/D' difference={0} />
      </section>
    );

  const { uniqueVisitors, visits, topCountry, topReferrer } = success.data;

  return (
    <section className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4'>
      <Card
        title={uniqueVisitors.title}
        value={uniqueVisitors.value}
        difference={uniqueVisitors.difference}
      />
      <Card
        title={visits.title}
        value={visits.value}
        difference={visits.difference}
      />
      <Card
        title={topCountry.title}
        value={topCountry.value}
        difference={topCountry.difference}
      />
      <Card
        title={topReferrer.title}
        value={topReferrer.value}
        difference={topReferrer.difference}
      />
    </section>
  );
}
