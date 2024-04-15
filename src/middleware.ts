import {
  APP_BASE_URL,
  COOKIE_ACCESS_TOKEN,
  SERVER_BASE_API,
} from '@/lib/constants';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get(COOKIE_ACCESS_TOKEN);

    const access_token = token
      ? token
      : request.cookies.get(COOKIE_ACCESS_TOKEN)?.value;

    if (!access_token)
      return NextResponse.redirect(new URL('/auth/login', request.url));

    const response = await fetch(`${SERVER_BASE_API}/auth/authorization`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok)
      return NextResponse.redirect(`${APP_BASE_URL}/auth/login`);

    const user = await response.json();

    if (!user) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    if (token) {
      const response = NextResponse.next();
      response.cookies.set(COOKIE_ACCESS_TOKEN, token);
      return response;
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
};
