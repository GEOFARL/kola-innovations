import { contactInfoSchema } from '@/lib/schemas/settings/contact-info-schema';
import { z } from 'zod';

export type ContactInfoData = z.infer<typeof contactInfoSchema>;
