import ResetPasswordForm from '@/components/auth/reset-password-form';
import { validateChangePassword } from '@/services/auth/query/validateChangePassword';

export default async function ResetPassword({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  await validateChangePassword(searchParams?.token);

  return (
    <main className='absolute left-[50%] top-[50%] mx-auto w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-6'>
      <ResetPasswordForm />
    </main>
  );
}
