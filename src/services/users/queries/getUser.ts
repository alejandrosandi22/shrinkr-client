import {
  COOKIE_ACCESS_TOKEN,
  JWT_SECRET,
  SERVER_BASE_API,
} from '@/lib/constants';
import { User } from '@/models/users';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function getUser(): Promise<User | null> {
  try {
    const access_token = cookies().get(COOKIE_ACCESS_TOKEN);
    if (!access_token) return null;

    const decoded = jwt.decode(access_token.value);

    if (!decoded) return null;

    const authUserInfo = jwt.verify(
      access_token.value,
      JWT_SECRET,
    ) as JwtPayload;
    if (!authUserInfo) return null;

    const response = await fetch(`${SERVER_BASE_API}/users/email`, {
      method: 'POST',
      body: JSON.stringify({ email: authUserInfo.email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) return null;

    const user = await response.json();
    return user;
  } catch (error) {
    return null;
  }
}
