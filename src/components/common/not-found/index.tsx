import { buttonVariants } from '@/components/common/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Card className='w-[420px] border-none bg-background shadow-none'>
        <CardHeader className='text-center'>
          <CardTitle className='text-4xl lg:text-7xl'>404</CardTitle>
          <CardDescription>
            The page you’re looking for doesn’t exist.
          </CardDescription>
        </CardHeader>
        <CardFooter className='flex justify-center'>
          <Link href='/' className={buttonVariants({ variant: 'link' })}>
            Go Back
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
