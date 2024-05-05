import MainStats from '@/components/dashboard/overview/main-stats';
import TopCountries from '@/components/dashboard/overview/top-countries';
import TopDevices from '@/components/dashboard/overview/top-devices';
import TopPlatforms from '@/components/dashboard/overview/top-platforms';
import TopReferrers from '@/components/dashboard/overview/top-referrers';
import { getOverview } from '@/services/analytics/queries/getOverview';

export default async function Dashboard() {
  const { error, success } = await getOverview();

  return (
    <main>
      <header className='pb-6'>
        <h1 className='mb-px text-3xl font-bold'>Overview</h1>
        <p className='text-gray-400'>
          Your link&apos;s performance over the last 30 days
        </p>
      </header>
      <div className='space-y-5'>
        <MainStats
          topCountry={success?.data.mainStats.topCountry}
          topReferrer={success?.data.mainStats.topReferrer}
          uniqueVisitors={success?.data.mainStats.uniqueVisitors}
          visits={success?.data.mainStats.visits}
        />
        <section className='grid w-full grid-cols-1 gap-5 xl:grid-cols-3'>
          <TopReferrers data={success?.data.topReferrers} />
          <TopPlatforms data={success?.data.topPlatforms} />
          <TopDevices data={success?.data.topDevices} />
        </section>
        <section>
          <TopCountries data={success?.data.topCountries} error={error} />
        </section>
      </div>
    </main>
  );
}
