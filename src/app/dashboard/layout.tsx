import SideNav from '@/components/common/sidebar';
import { LayoutProps } from '@/types';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex h-screen w-full flex-col gap-1 px-1 pt-[80px] lg:flex-row lg:overflow-hidden lg:px-6'>
      <div className='hidden w-full flex-none lg:block lg:w-60 2xl:w-80'>
        <SideNav />
      </div>
      <div className='h-full w-full overflow-y-auto p-4'>{children}</div>
      <div className='block h-[72px] w-full flex-none lg:hidden lg:w-60 2xl:w-80'>
        <SideNav />
      </div>
    </div>
  );
}
