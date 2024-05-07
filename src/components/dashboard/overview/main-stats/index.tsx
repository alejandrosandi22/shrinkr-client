import { MainStatsValues } from '@/models/analytics';
import Card from './card';

interface MainStatsProps {
  uniqueVisitors?: MainStatsValues;
  visits?: MainStatsValues;
  topCountry?: MainStatsValues;
  topReferrer?: MainStatsValues;
}

export default async function MainStats({
  visits,
  uniqueVisitors,
  topCountry,
  topReferrer,
}: MainStatsProps) {
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      {uniqueVisitors ? (
        <Card
          title={uniqueVisitors.title}
          value={uniqueVisitors.value}
          difference={uniqueVisitors.difference}
        />
      ) : (
        <Card title='Unique Visits' value='0' difference={0} />
      )}

      {visits ? (
        <Card
          title={visits.title}
          value={visits.value}
          difference={visits.difference}
        />
      ) : (
        <Card title='Visits' value='0' difference={0} />
      )}

      {topCountry ? (
        <Card
          title={topCountry.title}
          value={topCountry.value}
          difference={topCountry.difference}
        />
      ) : (
        <Card title='Top Country' value='N/D' difference={0} />
      )}

      {topReferrer ? (
        <Card
          title={topReferrer.title}
          value={topReferrer.value}
          difference={topReferrer.difference}
        />
      ) : (
        <Card title='Top Referrer' value='N/D' difference={0} />
      )}
    </section>
  );
}
