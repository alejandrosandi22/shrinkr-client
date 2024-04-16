import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { URLModel } from '@/models/urls';
import { QueryResponse } from '@/types';

export async function getURLInfo(
  shortURL: string,
): Promise<QueryResponse<URLModel>> {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken } = result;

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
      error: null,
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
