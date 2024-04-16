import { SERVER_BASE_API } from '@/lib/constants';
import { getAccessToken, handleError } from '@/lib/utils';
import { User, UserOptionsSelect } from '@/models/users';
import { QueryResponse } from '@/types';

export async function getUser(
  select?: UserOptionsSelect,
): Promise<QueryResponse<User>> {
  try {
    const result = await getAccessToken();
    if (!result) return handleError('User is not authorized');

    const { accessToken, decodedAccessToken } = result;

    if (!decodedAccessToken) return handleError('Something went wrong');

    const response = await fetch(`${SERVER_BASE_API}/users/email`, {
      method: 'POST',
      body: JSON.stringify({ email: decodedAccessToken.email, select }),
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) return handleError(data.message);

    return {
      success: {
        message: 'Data received successfully',
        data,
      },
      error: null,
    };
  } catch (error) {
    return handleError('Something went wrong');
  }
}
