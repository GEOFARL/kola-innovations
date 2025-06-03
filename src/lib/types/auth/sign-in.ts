import { SignInSchema } from '@/lib/schemas/auth/sign-in.schema';
import { z } from 'zod';

export type SignInFormData = z.infer<typeof SignInSchema>;
