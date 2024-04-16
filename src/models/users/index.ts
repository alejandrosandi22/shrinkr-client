export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export type UserOptionsSelect = Array<keyof User>;
