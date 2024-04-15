'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { URLStats } from '@/models/analytics';
import { QueryResponse } from '@/types';

export async function getStatsCount(
  shortURL: string,
): Promise<QueryResponse<URLStats>> {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken } = result;

    const response = await fetch(
      `${SERVER_BASE_API}/analytics/stats-count/${shortURL}`,
      {
        method: 'GET',
        headers: {
          Authentication: `Bearer ${accessToken}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) return handleError(data.message);

    return {
      success: {
        message: 'Data received successfully',
        data: {
          ...data,
          visitsByCountry: data.visits_by_country,
          daysWithMoreVisits: data.more_active_days,
          last7DaysPerformance: data.last_7_days_performance,
          uniqueVisitors: data.unique_visitors,
          returnVisitors: data.unique_visitors,
        },
      },
      error: null,
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
