import { CardDescription, CardTitle } from '@/components/common/card';
import ValuePropositionImage from './image';

export default function ValueProposition() {
  return (
    <section className='bg-cover bg-center py-8 lg:py-32'>
      <div className='relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
        <div className='mb-14 text-center'>
          <CardTitle className='mb-3 text-center lg:text-3xl lg:leading-none'>
            Discover Our Key Features
          </CardTitle>
          <CardDescription className='mx-auto max-w-md md:max-w-2xl lg:text-base'>
            Unlock the Power of Shortened URLs with Our Comprehensive Features
          </CardDescription>
        </div>
        <div className='relative isolate'>
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
          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 shadow-md ring-1 ring-inset ring-gray-900/10 dark:bg-gray-400/5 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <ValuePropositionImage />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden='true'
            className='inset-x-o pointer-events-none absolute -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
