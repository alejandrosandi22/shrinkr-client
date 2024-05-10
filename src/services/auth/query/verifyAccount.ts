'use server';

import { JWT_SECRET, SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { QueryResponse } from '@/types';
import * as jose from 'jose';
import { permanentRedirect } from 'next/navigation';

export async function verifyAccount(
  token: string | undefined,
): Promise<QueryResponse<undefined>> {
  if (!token) permanentRedirect('/');

  let decodedToken = undefined;
  try {
    decodedToken = await jose.jwtVerify(token, JWT_SECRET);
  } catch (error) {
    console.error(error);
  }
  if (!decodedToken) return permanentRedirect('/');

  try {
    const response = await fetch(
      `${SERVER_BASE_API}/auth/verify-account/${decodedToken.payload.sub}`,
      {
        method: 'POST',
      },
    );

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

    return {
      success: {
        message: 'Your account has been verified!',
        data,
      },
      error: null,
    };
  } catch (error) {
    return handleError('default');
  }
}
