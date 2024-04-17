import { SERVER_BASE_API } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import { MutationResponse } from '@/types';

export async function resetPassword(
  prevState: MutationResponse,
  formData: FormData,
): Promise<MutationResponse> {
  try {
    const newPassword = formData.get('new-password');
    const confirmPassword = formData.get('confirm-password');

    if (newPassword !== confirmPassword)
      return handleError("Passwords doesn't match");

    const rawFormData = {
      new_password: newPassword,
      confirm_password: confirmPassword,
    };

    const response = await fetch(`${SERVER_BASE_API}/auth/reset`, {
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
        message: 'Recovered password',
      },
      error: null,
    };
  } catch (error) {
    return handleError('default');
  }
}
