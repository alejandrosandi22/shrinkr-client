import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { TopCountry } from '@/models/analytics';
import { QueryResponse } from '@/types';

export async function getTopCountries(): Promise<QueryResponse<TopCountry[]>> {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken, decodedAccessToken } = result;

    const response = await fetch(
      `${SERVER_BASE_API}/analytics/top-countries/${decodedAccessToken.sub}`,
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
        data: data.map((data: any) => ({
          country: data.country,
          visits: data.visits,
          uniqueVisitors: data.unique_visitors,
          mostVisitedUrl: data.short_url,
        })),
      },
      error: null,
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
