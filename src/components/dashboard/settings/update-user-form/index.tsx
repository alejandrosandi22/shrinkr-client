'use client';

import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import SubmitButton from '@/components/common/submit-button';
import { updateAccount } from '@/services/users/mutations/updateAccount';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const INITIAL_STATE = { success: null, error: null };

interface UpdateUserForm {
  name: string;
  email: string;
  provider: string;
}

export default function UpdateUserForm({
  name,
  email,
  provider,
}: UpdateUserForm) {
  const [state, dispatch] = useFormState(updateAccount, INITIAL_STATE);

  const { error, success } = state;

  useEffect(() => {
    if (!success) return;
    toast.success(success.message);
  }, [success]);

  useEffect(() => {
    if (!error) return;
    toast.error(error.message);
  }, [error]);

  return (
    <form action={dispatch} className='max-w-sm'>
      <div className='mb-5 space-y-2.5'>
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          id='name'
          name='name'
          defaultValue={name}
          placeholder='Enter your name'
        />
      </div>

      {provider !== 'email' ? (
        <div className='mb-5 space-y-2.5'>
          <Label htmlFor='password'>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            disabled
          />
        </div>
      ) : (
        <>
          <div className='mb-5 space-y-2.5'>
            <Label htmlFor='current-password'>Current password</Label>
            <Input
              type='password'
              id='current-password'
              name='current-password'
              placeholder='*********'
              minLength={6}
            />
          </div>
          <div className='mb-5 space-y-2.5'>
            <Label htmlFor='new-password'>New password</Label>
            <Input
              type='password'
              id='new-password'
              name='new-password'
              placeholder='*********'
              minLength={6}
            />
          </div>
        </>
      )}
      <SubmitButton className='my-5'>Save changes</SubmitButton>
    </form>
  );
}
