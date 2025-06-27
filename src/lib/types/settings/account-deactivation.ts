import { accountDeactivationSchema } from '@/lib/schemas/settings/account-deactivation.schema';
import { z } from 'zod';

export type AccountDeactivationData = z.infer<typeof accountDeactivationSchema>;
