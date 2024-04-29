'use server';

import { COOKIE_ACCESS_TOKEN, SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';
import { cookies } from 'next/headers';

export async function register(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const response = await fetch(`${SERVER_BASE_API}/auth/register`, {
      method: 'POST',
      body: JSON.stringify(rawFormData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      if (data.message === 'User already exist')
        return handleError({ message: data.message, type: 'email' });
      return handleError(data.message);
    }

    cookies().set(COOKIE_ACCESS_TOKEN, data.access_token);

    return {
      success: {
        message: 'Check your email address to verify your account',
      },
      error: null,
    };
  } catch (error) {
    if (error) {
      return handleError('Someting went wrong');
    }
    throw error;
  }
}
