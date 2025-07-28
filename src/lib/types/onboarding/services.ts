import { serviceSchema } from '@/lib/schemas/onboarding/services.schema';
import { z } from 'zod';

export type ServiceData = z.infer<typeof serviceSchema>;
