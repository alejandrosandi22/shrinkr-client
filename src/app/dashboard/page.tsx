import MainStats from '@/components/dashboard/overview/main-stats';
import TopCountries from '@/components/dashboard/overview/top-countries';
import TopDevices from '@/components/dashboard/overview/top-devices';
import TopPlatforms from '@/components/dashboard/overview/top-platforms';
import TopReferrers from '@/components/dashboard/overview/top-referrers';

export default async function Dashboard() {
  return (
    <main>
      <header className='pb-6'>
        <h1 className='mb-px text-3xl font-bold'>Overview</h1>
        <p className='text-gray-400'>
          Your link&apos;s performance over the last 30 days
        </p>
      </header>
      <div className='space-y-5'>
        <MainStats />
        <section className='grid w-full grid-cols-1 gap-5 md:grid-cols-3'>
          <TopReferrers />
          <TopPlatforms />
          <TopDevices />
        </section>
        <section>
          <TopCountries />
        </section>
      </div>
    </main>
  );
}
