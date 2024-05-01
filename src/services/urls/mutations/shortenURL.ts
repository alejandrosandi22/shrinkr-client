'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';
import dayjs from 'dayjs';

export default async function shortenURL(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const expirationDate = dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm:ss');

    const payload = {
      original_url: formData.get('originalURL'),
      expiration_date: expirationDate,
    };

    const response = await fetch(`${SERVER_BASE_API}/urls/shorten`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

    return {
      success: {
        message: 'URL has been shorten',
        data: data.short_url,
      },
      error: null,
    };
  } catch (error) {
    return handleError('default');
  }
}
