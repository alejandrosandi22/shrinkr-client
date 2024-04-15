import { buttonVariants } from '@/components/common/button';
import { CardDescription, CardTitle } from '@/components/common/card';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className='bg-cover bg-center px-4 py-8 sm:px-6 lg:px-8 lg:py-32'>
      <div className='relative isolate z-0'>
        <div
          aria-hidden='true'
          className='inset-x-o pointer-events-none absolute -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
        </div>
      </div>
      <div className='relative z-10 mx-auto max-w-7xl rounded-lg bg-secondary/50 px-4 py-10 text-center sm:px-6 lg:px-8'>
        <div className='mb-8 text-center'>
          <CardTitle className='mb-3 text-center lg:text-3xl lg:leading-none'>
            Start Shortening Links Today!
          </CardTitle>
          <CardDescription className='mx-auto max-w-md md:max-w-2xl lg:text-base'>
            Join Our Community and Experience the Convenience of Our URL
            Shortener
          </CardDescription>
        </div>
        <div>
          <Link href='/dashboard' className={buttonVariants()}>
            Get Started
          </Link>
        </div>
      </div>
      <div className='relative isolate z-0'>
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
      </div>
    </section>
  );
}
