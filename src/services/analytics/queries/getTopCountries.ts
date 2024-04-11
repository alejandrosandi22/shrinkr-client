import {
  COOKIE_ACCESS_TOKEN,
  JWT_SECRET,
  SERVER_BASE_API,
} from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { TopCountry } from '@/models/analytics';
import { QueryResponse } from '@/types';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function getTopCountries(): Promise<QueryResponse<TopCountry[]>> {
  try {
    const access_token = cookies().get(COOKIE_ACCESS_TOKEN);
    if (!access_token) return handleError('Something went wrong');

    const authToken = jwt.verify(access_token.value, JWT_SECRET);

    const response = await fetch(
      `${SERVER_BASE_API}/analytics/top-countries/${authToken.sub}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token.value}`,
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
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
