'use server';

import { COOKIE_ACCESS_TOKEN, JWT_SECRET } from '@/lib/constants';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

/**
 * Retrieves the access token and its decoded payload from the cookies.
 * @returns An object containing the access token and its decoded payload if available, otherwise null.
 */
export default async function getAccessToken() {
  try {
    const accessToken = cookies().get(COOKIE_ACCESS_TOKEN);
    if (!accessToken) return null;

    const decodedAccessToken = jwt.verify(
      accessToken.value,
      JWT_SECRET,
    ) as JwtPayload;
    if (!decodedAccessToken) return null;

    return {
      accessToken,
      decodedAccessToken,
    };
  } catch (error) {
    return null;
  }
}
