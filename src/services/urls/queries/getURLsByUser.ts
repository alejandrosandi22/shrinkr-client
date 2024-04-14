'use server';

import {
  COOKIE_ACCESS_TOKEN,
  JWT_SECRET,
  SERVER_BASE_API,
} from '@/lib/constants';
import { URLModel } from '@/models/urls';
import { QueryResponse } from '@/types';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function getURLsByUser(): Promise<QueryResponse<URLModel[]>> {
  try {
    const access_token = cookies().get(COOKIE_ACCESS_TOKEN);

    if (!access_token)
      return {
        error: {
          message: 'User is not authorized',
        },
      };

    const authToken = jwt.verify(access_token.value, JWT_SECRET) as JwtPayload;

    const response = await fetch(
      `${SERVER_BASE_API}/urls/user/${authToken.sub}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token.value}`,
        },
        next: { tags: ['user-urls'] },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        error: {
          message: data.message,
        },
      };
    }

    return {
      success: {
        message: 'Success',
        data: data.map((url: any) => ({
          id: url.id,
          originalUrl: url.original_url,
          shortUrl: url.short_url,
          requestCount: url.request_count,
          expirationDate: url.expiration_date,
          customAlias: url.custom_alias,
          active: url.active,
          createdAt: url.created_at,
          updatedAt: url.updated_at,
        })),
      },
    };
  } catch (error) {
    return {
      error: {
        message: 'Error to get the url’s',
      },
    };
  }
}
