'use server';

import { COOKIE_ACCESS_TOKEN, JWT_SECRET } from '@/lib/constants';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

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
