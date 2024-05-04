import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { MainStats } from '@/models/analytics';
import { QueryResponse } from '@/types';

export async function getMainStats(): Promise<QueryResponse<MainStats>> {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken, decodedAccessToken } = result;

    const controller = new AbortController();
    const timeoutGeMainStats = setTimeout(() => controller.abort, 5000);

    const response = await fetch(
      `${SERVER_BASE_API}/analytics/main-stats/${decodedAccessToken.sub}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
      },
    );

    const data = await response.json();
    if (!response.ok) return handleError('Something went wrong');

    clearTimeout(timeoutGeMainStats);

    return {
      success: {
        message: 'Data received successfully',
        data,
      },
      error: null,
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
