import { hash } from 'crypto';

export async function hashPassword(password) {
  return await hash(password, 12);
}
