'use server';

import { JWT_SECRET } from '@/lib/constants';
import * as jose from 'jose';
import { permanentRedirect } from 'next/navigation';

export async function validateChangePassword(token: string | undefined) {
  if (!token) permanentRedirect('/');

  let decodedToken = undefined;
  try {
    decodedToken = jose.jwtVerify(token, JWT_SECRET);
  } catch (error) {
    console.error(error);
  }
  if (!decodedToken) permanentRedirect('/');
}
