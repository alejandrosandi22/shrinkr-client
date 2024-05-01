import { buttonVariants } from '@/components/common/button';
import ShortenURLForm from '@/components/home/hero/shorten-url-form';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative isolate pt-20 lg:px-8'>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-32 2xl:py-56'>
        <div className='mx-auto w-full max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl 2xl:text-7xl'>
            Shorten Your URLs for Impactful{' '}
            <strong className='font-bold text-primary'>Engagement</strong>
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300'>
            Streamline Your Links with Lightning-Fast URL Shortening
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <Link className={buttonVariants({ size: 'lg' })} href='/dashboard'>
              Get started
            </Link>
          </div>
        </div>
        <div className='w-full'>
          <ShortenURLForm />
        </div>
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
    </section>
  );
}
