import { buttonVariants } from '@/components/common/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/common/card';
import { verifyAccount } from '@/services/auth/query/verifyAccount';
import Link from 'next/link';

export default async function VerifyAccount({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  await verifyAccount(searchParams?.token);
  return (
    <main className='absolute left-[50%] top-[50%] mx-auto w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-6'>
      <Card>
        <CardHeader>
          <CardTitle>Your account has been verified!</CardTitle>
          <CardDescription>
            Thanks for signin up. You can now continue to use Shrinkr
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href='/dashboard'
            className={buttonVariants({
              variant: 'default',
              className: 'w-full',
            })}
          >
            Get started
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
