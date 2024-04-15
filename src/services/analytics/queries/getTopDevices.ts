import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { TopDevice } from '@/models/analytics';
import { QueryResponse } from '@/types';

export async function getTopDevices(): Promise<QueryResponse<TopDevice[]>> {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken, decodedAccessToken } = result;

    const response = await fetch(
      `${SERVER_BASE_API}/analytics/top-devices/${decodedAccessToken.sub}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) return handleError('Something went wrong');

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
