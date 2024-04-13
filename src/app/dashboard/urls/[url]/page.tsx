import Browsers from '@/components/dashboard/urls/url/browsers';
import Devices from '@/components/dashboard/urls/url/devices';
import MostActiveDays from '@/components/dashboard/urls/url/last-7-days';
import MainStats from '@/components/dashboard/urls/url/main-stats';
import MoreActiveDays from '@/components/dashboard/urls/url/more-active-days';
import Platforms from '@/components/dashboard/urls/url/platforms';
import Referrers from '@/components/dashboard/urls/url/referrers';
import URLInformation from '@/components/dashboard/urls/url/url-information';
import VisitsByCountry from '@/components/dashboard/urls/url/visits-by-country';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function URLPage({ params }: { params: { url: string } }) {
  return (
    <div>
      <header className='mb-5 flex items-center gap-5'>
        <Link href='/dashboard/urls'>
          <ArrowLeftIcon width={24} height={24} />
        </Link>
        <h1 className='mb-px text-2xl font-bold'>URL stats</h1>
      </header>
      <main className='space-y-5'>
        <URLInformation />
        <MainStats />
        <section>
          <MostActiveDays />
        </section>
        <section className='grid gap-5 xl:grid-cols-2'>
          <Browsers />
          <Devices />
          <Referrers />
          <Platforms />
          <VisitsByCountry />
          <MoreActiveDays />
        </section>
      </main>
    </div>
  );
}
