'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { QueryResponse } from '@/types';

export async function getURL(
  url: string,
): Promise<QueryResponse<{ originalURL: string; shortURL: string }>> {
  try {
    const response = await fetch(`${SERVER_BASE_API}/urls/get-url/${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

    return {
      success: {
        message: 'Data received successfully',
        data: {
          originalURL: data.original_url,
          shortURL: data.short_url,
        },
      },
      error: null,
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
