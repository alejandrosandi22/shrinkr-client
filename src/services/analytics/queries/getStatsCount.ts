'use server';

import { COOKIE_ACCESS_TOKEN, SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { URLStats } from '@/models/analytics';
import { QueryResponse } from '@/types';
import { cookies } from 'next/headers';

export async function getStatsCount(
  shortURL: string,
): Promise<QueryResponse<URLStats>> {
  try {
    const accessToken = cookies().get(COOKIE_ACCESS_TOKEN);
    if (!accessToken) return handleError('Something went wrong');

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
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
