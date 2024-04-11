import {
  COOKIE_ACCESS_TOKEN,
  JWT_SECRET,
  SERVER_BASE_API,
} from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { TopDevice } from '@/models/analytics';
import { QueryResponse } from '@/types';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function getTopDevices(): Promise<QueryResponse<TopDevice[]>> {
  try {
    const access_token = cookies().get(COOKIE_ACCESS_TOKEN);
    if (!access_token) return handleError('Something went wrong');

    const authToken = jwt.verify(access_token.value, JWT_SECRET);

    const response = await fetch(
      `${SERVER_BASE_API}/analytics/top-devices/${authToken.sub}`,
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
        data,
      },
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
