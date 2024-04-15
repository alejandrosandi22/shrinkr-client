import { CardDescription, CardTitle } from '@/components/common/card';
import {
  ChartPieIcon,
  PaintBrushIcon,
  ScissorsIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default function Features() {
  return (
    <section className='pb-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap items-center justify-center gap-x-5 gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0'>
          <div className='group relative w-full text-center max-md:mx-auto max-md:max-w-sm md:w-2/5 lg:w-1/4'>
            <div className='mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-secondary'>
              <ScissorsIcon width={24} height={24} />
            </div>
            <CardTitle className='mb-3'>Link Shortening</CardTitle>
            <CardDescription>
              Instantly shorten long URLs into concise, memorable links.
            </CardDescription>
          </div>
          <div className='group relative w-full text-center max-md:mx-auto max-md:max-w-sm md:w-2/5 lg:w-1/4'>
            <div className='mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-secondary'>
              <PaintBrushIcon width={24} height={24} />
            </div>
            <CardTitle className='mb-3'>Customization</CardTitle>
            <CardDescription>
              Personalize shortened URLs with custom aliases
            </CardDescription>
          </div>
          <div className='group relative w-full text-center max-md:mx-auto max-md:max-w-sm md:w-2/5 lg:w-1/4'>
            <div className='mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-secondary'>
              <ChartPieIcon width={24} height={24} />
            </div>
            <CardTitle className='mb-3'>Analytics</CardTitle>
            <CardDescription>
              Track click-through rates, geographic locations of visitors, and
              referral sources for each shortened link.
            </CardDescription>
          </div>
          <div className='group relative w-full text-center max-md:mx-auto max-md:max-w-sm md:w-2/5 lg:w-1/4'>
            <div className='mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-secondary'>
              <ShieldCheckIcon width={24} height={24} />
            </div>
            <CardTitle className='mb-3'>Security</CardTitle>
            <CardDescription>
              Ensure link integrity with built-in measures like link expiration,
              password protection, and optional CAPTCHA verification.
            </CardDescription>
          </div>
        </div>
      </div>
    </section>
  );
}
