'use server';

import { COOKIE_ACCESS_TOKEN, SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';

export async function authenticate(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const rawFormData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const response = await fetch(`${SERVER_BASE_API}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(rawFormData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      if (data.message === 'Entered email is incorrect or does not exist')
        return handleError({ message: data.message, type: 'email' });
      if (data.message === 'Incorrect password')
        return handleError({ message: data.message, type: 'password' });
      return handleError(data.message);
    }

    cookies().set(COOKIE_ACCESS_TOKEN, data.access_token);
  } catch (error) {
    return handleError('Something went wrong! Try again later');
  }

  permanentRedirect('/dashboard');
}
