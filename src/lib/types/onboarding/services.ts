import {
  serviceSchema,
  servicesSchema,
} from '@/lib/schemas/onboarding/services.schema';
import { z } from 'zod';

export type ServicesData = z.infer<typeof servicesSchema>;
export type ServiceData = z.infer<typeof serviceSchema>;
