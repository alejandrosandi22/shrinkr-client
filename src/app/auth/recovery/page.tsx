import RecoveryEmailForm from '@/components/auth/recovery-email-form';

export default function Recovery() {
  return (
    <main className='absolute left-[50%] top-[50%] mx-auto w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-6'>
      <RecoveryEmailForm />
    </main>
  );
}
