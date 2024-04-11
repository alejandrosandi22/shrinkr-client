import SideNav from '@/components/common/sidebar';
import { LayoutProps } from '@/types';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex h-main w-full flex-col gap-1 px-1 md:flex-row md:overflow-hidden md:px-6'>
      <div className='w-full flex-none md:w-60 2xl:w-80'>
        <SideNav />
      </div>
      <div className='h-full w-full overflow-y-auto p-4'>{children}</div>
    </div>
  );
}
