import NavLinks from './nav-links';

export default function Sidebar() {
  return (
    <aside className='h-full w-full md:w-60 2xl:w-80'>
      <nav className='w-full p-4'>
        <NavLinks />
      </nav>
    </aside>
  );
}
