import {
  Cog8ToothIcon,
  HomeIcon,
  LinkIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const links = [
  { name: 'Overview', href: '/dashboard', icon: HomeIcon },
  {
    name: 'URLs',
    href: '/dashboard/urls',
    icon: LinkIcon,
  },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog8ToothIcon },
  { name: 'Support', href: '/dashboard/support', icon: QuestionMarkCircleIcon },
];

export default function NavLinks() {
  return (
    <ul className='flex h-full w-full flex-row justify-between md:flex-col md:space-y-2'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className='flex w-full justify-start gap-3 rounded-xl px-3 py-2 hover:bg-accent hover:text-accent-foreground'
            >
              <LinkIcon width={24} height={24} />
              <span className='hidden md:block'>{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
