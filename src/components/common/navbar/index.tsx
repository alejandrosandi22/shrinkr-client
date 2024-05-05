import favicon from '@/assets/favicon.svg';
import { getUser } from '@/services/users/queries/getUser';
import Image from 'next/image';
import Link from 'next/link';
import Options from './options';

export default async function Navbar() {
  const { error, success } = await getUser();

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
        <Options user={success?.data} error={error} />
      </nav>
    </header>
  );
}
