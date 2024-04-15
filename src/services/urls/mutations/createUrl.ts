'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';
import { revalidateTag } from 'next/cache';

export async function createUrl(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  let resData = undefined;
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken, decodedAccessToken } = result;

    const customAlias = formData.get('customAlias');
    const expirationDate = formData.get('expirationDate');

    const rawFormData = {
      original_url: formData.get('originalUrl'),
      expiration_date: expirationDate === '' ? null : expirationDate,
      custom_alias: customAlias === '' ? null : customAlias,
      user_id: decodedAccessToken.sub,
    };

    const response = await fetch(`${SERVER_BASE_API}/urls/create`, {
      method: 'POST',
      body: JSON.stringify(rawFormData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken.value}`,
      },
    });

    const data = await response.json();
    resData = data;

    if (!response.ok) {
      return handleError(data.message);
    }
  } catch (error) {
    return handleError('Something went wrong! Try again later');
  }

  revalidateTag('user-urls');

  return {
    success: {
      data: resData.short_url,
      message: 'Successfully url added',
    },
    error: null,
  };
}
