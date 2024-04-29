import favicon from '@/assets/favicon.svg';
import { buttonVariants } from '@/components/common/button';
import CreateURLForm from '@/components/common/navbar/create-url-form';
import UserDropdown from '@/components/common/navbar/user-dropdown';
import { getUser } from '@/services/users/queries/getUser';
import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  const data = await getUser();

  const { success } = data;

  return (
    <header className='absolute z-40 w-full px-5 py-5 text-sm md:px-10'>
      <nav className='flex items-center justify-between gap-3'>
        <div>
          <Link href='/' className='flex items-center gap-2 text-lg font-bold'>
            <Image
              src={favicon}
              alt='Icon for the website'
              width={50}
              height={50}
              className='h-5 w-5'
            />
            <span className='hidden sm:block'>Shrinkr</span>
          </Link>
        </div>
        <div className='flex items-center gap-5'>
          {success ? (
            <div className='flex items-center gap-5'>
              <CreateURLForm />
              <UserDropdown user={success.data} />
            </div>
          ) : (
            <ul className='flex gap-3'>
              <li>
                <Link
                  className={buttonVariants({ variant: 'outline' })}
                  href='/auth/login'
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link className={buttonVariants()} href='/auth/signup'>
                  Sign up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
