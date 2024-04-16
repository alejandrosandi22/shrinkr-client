'use server';

import { COOKIE_ACCESS_TOKEN } from '@/lib/constants';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';

export async function signOut() {
  cookies().delete(COOKIE_ACCESS_TOKEN);
  permanentRedirect('/auth/login');
}
