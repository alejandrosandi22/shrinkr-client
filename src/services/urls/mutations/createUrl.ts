'use server';

import {
  COOKIE_ACCESS_TOKEN,
  JWT_SECRET,
  SERVER_BASE_API,
} from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export async function createUrl(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  let resData = undefined;
  try {
    const access_token = cookies().get(COOKIE_ACCESS_TOKEN);

    if (!access_token)
      return handleError('Something went wrong! Try again later');

    const authToken = jwt.verify(access_token.value, JWT_SECRET) as JwtPayload;

    const customAlias = formData.get('customAlias');
    const expirationDate = formData.get('expirationDate');

    const rawFormData = {
      original_url: formData.get('originalUrl'),
      expiration_date: expirationDate === '' ? null : expirationDate,
      custom_alias: customAlias === '' ? null : customAlias,
      user_id: authToken.sub,
    };

    const response = await fetch(`${SERVER_BASE_API}/urls/create`, {
      method: 'POST',
      body: JSON.stringify(rawFormData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token.value}`,
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
  };
}
