'use server';

import { SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';

export async function supportEmail(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      reason: formData.get('reason'),
      message: formData.get('message'),
    };

    const response = await fetch(`${SERVER_BASE_API}/users/support`, {
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
        message: 'Email sent successfully',
      },
      error: null,
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
