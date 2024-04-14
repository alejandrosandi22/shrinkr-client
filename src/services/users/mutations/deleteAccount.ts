'use server';

import {
  COOKIE_ACCESS_TOKEN,
  JWT_SECRET,
  SERVER_BASE_API,
} from '@/lib/constants';
import { handleError } from '@/lib/utils';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';

export async function deleteAccount() {
  try {
    const accessToken = cookies().get(COOKIE_ACCESS_TOKEN);
    if (!accessToken) return handleError('Something went wrong');

    const decodedAccessToken = jwt.verify(accessToken.value, JWT_SECRET);
    if (!decodedAccessToken) return handleError('Something went wrong');

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
