import SupportForm from '@/components/dashboard/support/support-form';

export default function Support() {
  return (
    <main className='mx-auto max-w-sm'>
      <header className='pb-6'>
        <h1 className='mb-px text-3xl font-bold'>Support</h1>
      </header>
      <SupportForm />
    </main>
  );
}
