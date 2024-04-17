'use server';

import { JWT_SECRET } from '@/lib/constants';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { permanentRedirect } from 'next/navigation';

export async function validateChangePassword(token: string | undefined) {
  if (!token) permanentRedirect('/');

  let decodedToken = undefined;
  try {
    decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    console.error(error);
  }
  if (!decodedToken) permanentRedirect('/');
}
