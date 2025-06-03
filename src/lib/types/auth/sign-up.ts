import { SignUpSchema } from '@/lib/schemas/auth/sign-up.schema';
import { z } from 'zod';

export type SignUpFormData = z.infer<typeof SignUpSchema>;
