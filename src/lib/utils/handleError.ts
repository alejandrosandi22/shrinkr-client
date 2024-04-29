import { ErrorState, FormErrorState } from '@/types';

interface HandleError extends FormErrorState {
  success: null;
}

/**
 * Converts an error state into a structured error object.
 * @param errorState The error state to handle, which can be an ErrorState object, a string, or the string 'default'.
 * @returns A structured error object conforming to the HandleError interface.
 */
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
