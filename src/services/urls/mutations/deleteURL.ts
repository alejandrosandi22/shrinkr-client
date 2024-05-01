'use server';

import { GET_URL_TAG, SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { revalidateTag } from 'next/cache';

export async function deleteURL(id: number) {
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

  revalidateTag(GET_URL_TAG);
}
