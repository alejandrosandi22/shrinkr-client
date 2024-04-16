'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { URLModel } from '@/models/urls';
import { QueryResponse } from '@/types';

export async function getURLsByUser(): Promise<QueryResponse<URLModel[]>> {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken, decodedAccessToken } = result;

    const response = await fetch(
      `${SERVER_BASE_API}/urls/user/${decodedAccessToken.sub}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
        next: { tags: ['user-urls'] },
      },
    );

    const data = await response.json();

    if (!response.ok) handleError(data.message);
    return {
      success: {
        message: 'Data received successfully',
        data: data.map((url: any) => ({
          id: url.id,
          originalUrl: url.original_url,
          shortUrl: url.short_url,
          requestCount: url.request_count,
          expirationDate: url.expiration_date,
          customAlias: url.custom_alias,
          active: url.active,
          createdAt: url.created_at,
          updatedAt: url.updated_at,
        })),
      },
      error: null,
    };
  } catch (error) {
    return handleError('Error to get the URLs');
  }
}
