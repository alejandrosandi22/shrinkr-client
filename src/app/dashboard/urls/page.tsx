import UrlsList from '@/components/dashboard/urls/urls-list';

export default function Links() {
  return (
    <main>
      <header className='pb-6'>
        <h1 className='mb-px text-3xl font-bold'>URLs list</h1>
        <p className='text-gray-400'>Select one to see its statistics</p>
      </header>
      <UrlsList />
    </main>
  );
}
