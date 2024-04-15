'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { revalidateTag } from 'next/cache';

export async function deleteUrl(id: number) {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken } = result;

    const response = await fetch(`${SERVER_BASE_API}/urls/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });

    const data = await response.json();

    if (!response.ok) return handleError(data.message);
  } catch (error) {
    return handleError('Something went wrong! Try again later');
  }

  revalidateTag('user-urls');
}
