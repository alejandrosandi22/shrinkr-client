import { ErrorState, FormErrorState } from '@/types';

interface HandleError extends FormErrorState {
  success: null;
}

export default function handleError(
  errorState: ErrorState | string,
): HandleError {
  if (typeof errorState === 'string') {
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
