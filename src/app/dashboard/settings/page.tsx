import { Label } from '@/components/common/label';
import DeleteAccount from '@/components/dashboard/settings/delete-account';
import ThemeSwitch from '@/components/dashboard/settings/theme-switch';
import UpdateUserForm from '@/components/dashboard/settings/update-user-form';
import { UserOptionsSelect } from '@/models/users';
import { getUser } from '@/services/users/queries/getUser';

export default async function Settings() {
  const keys: UserOptionsSelect = ['name', 'email', 'provider'];
  const { error, success } = await getUser(keys);

  if (error || !success) return null;
  const { data } = success;

  return (
    <div className='mx-auto max-w-sm'>
      <header className='pb-6'>
        <h1 className='mb-px text-3xl font-bold'>Settings</h1>
      </header>
      <main>
        <section className='w-full'>
          <h6 className='mb-5 text-xl font-bold'>Account</h6>
          <UpdateUserForm
            name={data.name}
            email={data.email}
            provider={data.provider}
          />
        </section>
        <section className='mb-5 w-full'>
          <h6 className='mb-5 text-xl font-bold'>Preferences</h6>
          <div className='flex w-full items-center justify-between'>
            <Label htmlFor='theme-switch'>Dark mode</Label>
            <ThemeSwitch />
          </div>
        </section>
        <section className='w-full'>
          <h6 className='mb-5 text-xl font-bold'>Danger</h6>
          <DeleteAccount />
        </section>
      </main>
    </div>
  );
}
