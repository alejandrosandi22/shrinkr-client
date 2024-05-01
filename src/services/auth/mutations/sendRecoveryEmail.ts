'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';

export async function sendRecoveryEmail(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const rawFormData = {
      email: formData.get('email'),
    };

    const response = await fetch(`${SERVER_BASE_API}/auth/recovery`, {
      method: 'POST',
      body: JSON.stringify(rawFormData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

    return {
      success: {
        message: 'Check your email to reset your password',
      },
      error: null,
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
