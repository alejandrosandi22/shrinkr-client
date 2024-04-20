import { SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { URLModel } from '@/models/urls';
import { QueryResponse } from '@/types';
import { redirect } from 'next/navigation';

export async function getURL(url: string): Promise<QueryResponse<URLModel>> {
  let originalURL = '';
  try {
    const response = await fetch(`${SERVER_BASE_API}/urls/short-url/${url}`, {
      method: 'GET',
    });

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

    originalURL = data.original_url;
  } catch (error) {
    return handleError('Something went wrong');
  }

  redirect(originalURL);
}
