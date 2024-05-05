'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { OverviewModel } from '@/models/analytics';
import { QueryResponse } from '@/types';

export async function getOverview(): Promise<QueryResponse<OverviewModel>> {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');
    const { accessToken, decodedAccessToken } = result;

    const controller = new AbortController();
    const timeoutGetOverview = setTimeout(() => controller.abort, 5000);

    const response = await fetch(
      `${SERVER_BASE_API}/analytics/overview/${decodedAccessToken.sub}`,
      {
        method: 'GET',
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
      },
    );

    clearTimeout(timeoutGetOverview);

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

    return {
      success: {
        message: 'Data recevied successfuly',
        data,
      },
      error: null,
    };
  } catch (error) {
    return handleError('default');
  }
}
