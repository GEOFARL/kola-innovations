import { z } from 'zod';

export const mentorshipSchema = z.object({
  isMentor: z.boolean({
    required_error: 'Please select Yes or No',
    invalid_type_error: 'Must be true or false',
  }),
});

export type MentorshipData = z.infer<typeof mentorshipSchema>;
