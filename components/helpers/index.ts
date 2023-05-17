import { LoginUserParams } from '../../types';
import { signIn } from 'next-auth/react';

export const loginUser = async ({ email, password }: LoginUserParams) => {
  return await signIn('credentials', {
    redirect: false,
    email,
    password,
  });
};
