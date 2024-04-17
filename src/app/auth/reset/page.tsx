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
    <main className='mx-auto w-full max-w-md p-6'>
      <ResetPasswordForm />
    </main>
  );
}
