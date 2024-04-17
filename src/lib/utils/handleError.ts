import { ErrorState, FormErrorState } from '@/types';

interface HandleError extends FormErrorState {
  success: null;
}

export default function handleError(
  errorState: ErrorState | string | 'default',
): HandleError {
  if (typeof errorState === 'string') {
    if (errorState === 'default')
      return {
        success: null,
        error: {
          message: 'Something went wrong! Try again later',
        },
      };

    return {
      success: null,
      error: {
        message: errorState,
      },
    };
  }

  return {
    success: null,
    error: {
      message: errorState.message,
      type: errorState.type,
    },
  };
}
