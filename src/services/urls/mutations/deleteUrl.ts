'use server';

import { COOKIE_ACCESS_TOKEN, SERVER_BASE_API } from '@/lib/constants';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export async function deleteUrl(id: number) {
  try {
    const access_token = cookies().get(COOKIE_ACCESS_TOKEN);

    if (!access_token)
      return {
        error: {
          message: 'Something went wrong! Try again later',
        },
      };

    const response = await fetch(`${SERVER_BASE_API}/urls/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${access_token.value}`,
      },
    });

    const data = response.json();

    if (!response.ok)
      return {
        error: {
          message: 'Something went wrong! Try again later',
        },
      };
  } catch (error) {
    return {
      error: {
        message: 'Something went wrong! Try again later',
      },
    };
  }

  revalidateTag('user-urls');
}
