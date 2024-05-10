'use server';

import { COOKIE_ACCESS_TOKEN, JWT_SECRET } from '@/lib/constants';
import * as jose from 'jose';
import { cookies } from 'next/headers';

export default async function getAccessToken() {
  try {
    const accessToken = cookies().get(COOKIE_ACCESS_TOKEN);
    if (!accessToken) return null;

    const decodedAccessToken = await jose.jwtVerify(
      accessToken.value,
      JWT_SECRET,
    );
    if (!decodedAccessToken) return null;

    return {
      accessToken,
      decodedAccessToken: decodedAccessToken.payload,
    };
  } catch (error) {
    return null;
  }
}
