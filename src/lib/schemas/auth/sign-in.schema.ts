import { z } from 'zod';

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Entered Email id is incorrect'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Entered password is incorrect'),
});
