import { z } from 'zod';

export const mentorshipSessionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  brief: z.string().optional(),
  topics: z.array(z.string()),
  image: z.string().optional(),
});

export const mentorshipSchema = z.object({
  isMentor: z.boolean({
    required_error: 'Please select Yes or No',
    invalid_type_error: 'Must be true or false',
  }),
  sessions: z.array(mentorshipSessionSchema),
});

export type MentorshipSession = z.infer<typeof mentorshipSessionSchema>;
export type MentorshipData = z.infer<typeof mentorshipSchema>;
