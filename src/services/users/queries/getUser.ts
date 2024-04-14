import {
  COOKIE_ACCESS_TOKEN,
  JWT_SECRET,
  SERVER_BASE_API,
} from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { User, UserOptionsSelect } from '@/models/users';
import { QueryResponse } from '@/types';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function getUser(
  select?: UserOptionsSelect,
): Promise<QueryResponse<User>> {
  try {
    const access_token = cookies().get(COOKIE_ACCESS_TOKEN);
    if (!access_token) return handleError('Something went wrong');

    const decodedAccessToken = jwt.verify(
      access_token.value,
      JWT_SECRET,
    ) as JwtPayload;
    if (!decodedAccessToken) return handleError('Something went wrong');

    const response = await fetch(`${SERVER_BASE_API}/users/email`, {
      method: 'POST',
      body: JSON.stringify({ email: decodedAccessToken.email, select }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

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
