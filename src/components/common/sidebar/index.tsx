import NavLinks from './nav-links';

export default function Sidebar() {
  return (
    <aside className='fixed bottom-0 h-[72px] w-full bg-background lg:relative lg:h-full lg:w-60 2xl:w-80'>
      <nav className='w-full p-4'>
        <NavLinks />
      </nav>
    </aside>
  );
}
