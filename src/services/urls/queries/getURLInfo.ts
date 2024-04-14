import {
  COOKIE_ACCESS_TOKEN,
  JWT_SECRET,
  SERVER_BASE_API,
} from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { URLModel } from '@/models/urls';
import { QueryResponse } from '@/types';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

async function getURLInfo(shortURL: string): Promise<QueryResponse<URLModel>> {
  try {
    const accessToken = cookies().get(COOKIE_ACCESS_TOKEN);
    if (!accessToken) return handleError('Something went wrong');

    const decodedAccessToken = jwt.verify(accessToken.value, JWT_SECRET);
    if (!decodedAccessToken) return handleError('Something went wrong');

    const response = await fetch(`${SERVER_BASE_API}/urls/${shortURL}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

    return {
      success: {
        message: 'Data received successfully',
        data: {
          id: data.id,
          originalUrl: data.original_url,
          shortUrl: data.short_url,
          requestCount: data.request_count,
          expirationDate: data.expiration_date,
          customAlias: data.custom_alias,
          active: data.active,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        },
      },
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}

export { getURLInfo };
