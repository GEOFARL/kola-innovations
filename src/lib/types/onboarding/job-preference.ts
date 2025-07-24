import { jobPreferenceSchema } from '@/lib/schemas/onboarding/experience.schema';
import { z } from 'zod';

export type JobPreference = z.infer<typeof jobPreferenceSchema>;
