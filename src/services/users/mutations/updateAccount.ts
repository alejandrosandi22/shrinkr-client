'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';

export async function updateAccount(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken, decodedAccessToken } = result;

    const current_password = formData.get('current_password');
    const password = formData.get('new-password');

    if (password !== '' && !current_password) {
      return handleError('Must fill in your current password field');
    }

    const rawFormData = {
      name: formData.get('name'),
      password,
      current_password,
    };

    const response = await fetch(
      `${SERVER_BASE_API}/users/update/${decodedAccessToken.sub}`,
      {
        method: 'PATCH',
        body: JSON.stringify(rawFormData),
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

    return {
      success: {
        message: 'Updated account',
      },
      error: null,
    };
  } catch (error) {
    return handleError('Something went wrong! Try again later');
  }
}
