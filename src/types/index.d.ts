import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export type SuccessState<T> = {
  message: string;
  data: T;
};

export type ErrorState = {
  message: string;
  type?: string;
};

export type FormErrorState = {
  error?: ErrorState | null;
};

export interface QueryResponse<T> extends FormErrorState {
  success?: SuccessState<T> | null;
}

export interface MutationResponse extends FormErrorState {
  success?: {
    message: string;
    state: boolean;
  } | null;
}
