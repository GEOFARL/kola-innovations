import { mentorshipSessionSchema } from '@/lib/schemas/onboarding/mentorship.schema';
import { z } from 'zod';

export type MentorshipSession = z.infer<typeof mentorshipSessionSchema>;
