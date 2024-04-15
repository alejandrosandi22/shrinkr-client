'use server';

import { COOKIE_ACCESS_TOKEN, SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';

export async function deleteAccount() {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken, decodedAccessToken } = result;

    const response = await fetch(
      `${SERVER_BASE_API}/users/delete/${decodedAccessToken.sub}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return handleError(data.message);
    }

    cookies().delete(COOKIE_ACCESS_TOKEN);
  } catch (e) {
    return handleError('Something went wrong');
  }

  console.log('redirect');

  permanentRedirect('/auth/login?deleted=true');
}
