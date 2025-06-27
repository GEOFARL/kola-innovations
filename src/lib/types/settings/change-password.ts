import { changePasswordSchema } from '@/lib/schemas/settings/change-password-schema';
import { z } from 'zod';

export type ChangePasswordData = z.infer<typeof changePasswordSchema>;
