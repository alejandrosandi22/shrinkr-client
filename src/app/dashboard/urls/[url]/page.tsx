import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import Browsers from '@/components/dashboard/urls/url/browsers';
import DaysWithMoreVisits from '@/components/dashboard/urls/url/days-with-more-visits';
import Devices from '@/components/dashboard/urls/url/devices';
import Last7Days from '@/components/dashboard/urls/url/last-7-days';
import MainStats from '@/components/dashboard/urls/url/main-stats';
import Platforms from '@/components/dashboard/urls/url/platforms';
import Referrers from '@/components/dashboard/urls/url/referrers';
import URLInformation from '@/components/dashboard/urls/url/url-information';
import VisitsByCountry from '@/components/dashboard/urls/url/visits-by-country';
import { getURLAnalytics } from '@/services/analytics/queries/getURLAnalytics';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function URLPage({ params }: { params: { url: string } }) {
  const response = await getURLAnalytics(params.url);

  if (!response.success)
    return (
      <div className='flex h-full items-center justify-center'>
        <Card className='w-[420px] border-none bg-background shadow-none'>
          <CardHeader className='text-center'>
            <CardTitle className='text-4xl lg:text-7xl'>404</CardTitle>
            <CardDescription>
              The page you’re looking for doesn’t exist.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );

  const { data } = response.success;

  return (
    <div>
      <header className='mb-5 flex items-center gap-5'>
        <Link href='/dashboard/urls'>
          <ArrowLeftIcon width={24} height={24} />
        </Link>
        <h1 className='mb-px text-2xl font-bold'>URL stats</h1>
      </header>
      <main className='space-y-5'>
        <URLInformation url={params.url} />
        <MainStats
          visits={data.visits}
          uniqueVisitors={data.uniqueVisitors}
          returnVisitors={data.returnVisitors}
        />
        <section>
          <Last7Days data={data.last7DaysPerformance} />
        </section>
        <section className='grid gap-5 xl:grid-cols-2'>
          <Browsers data={data.browsers} />
          <Devices data={data.devices} />
          <Referrers data={data.referrers} />
          <Platforms data={data.platforms} />
          <VisitsByCountry data={data.visitsByCountry} />
          <DaysWithMoreVisits data={data.daysWithMoreVisits} />
        </section>
      </main>
    </div>
  );
}
