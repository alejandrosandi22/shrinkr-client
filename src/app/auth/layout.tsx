import { LayoutProps } from '@/types';

export default function Layout({ children }: LayoutProps) {
  return <div className='pt-20'>{children}</div>;
}
