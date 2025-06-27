import { z } from 'zod';

export const accountDeactivationSchema = z.object({
  reason: z.string().min(1, 'Reason is required'),
});
