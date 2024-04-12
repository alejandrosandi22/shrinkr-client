'use server';

import { COOKIE_ACCESS_TOKEN, SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export async function updateUrl(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const access_token = cookies().get(COOKIE_ACCESS_TOKEN);

    if (!access_token)
      return handleError('Something went wrong! Try again later');

    const customAlias = formData.get('customAlias');
    const expirationDate = formData.get('expirationDate');
    const active = formData.get('active');
    const urlId = formData.get('urlId');

    const rawFormData = {
      original_url: formData.get('originalUrl'),
      short_url: formData.get('shortUrl'),
      expiration_date: expirationDate === '' ? null : expirationDate,
      custom_alias: customAlias === '' ? null : customAlias,
      active: active === 'on' ? true : false,
    };

    const response = await fetch(`${SERVER_BASE_API}/urls/update/${urlId}`, {
      method: 'PATCH',
      body: JSON.stringify(rawFormData),
      headers: {
        Authorization: `Bearer ${access_token.value}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) return handleError(data.message);
  } catch (error) {
    return handleError('Something went wrong');
  }

  revalidateTag('user-urls');

  return {
    success: {
      message: 'URL updated successfully',
    },
  };
}
