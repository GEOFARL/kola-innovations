import { z } from 'zod';

const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
const timeRegex = /^([01]\d|2[0-3]):[0-5]\d(\s?(AM|PM))?$/i;

export const mentorshipSessionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z
    .string()
    .min(1, 'Date is required')
    .regex(dateRegex, 'Date must be in DD/MM/YYYY format'),
  time: z
    .string()
    .min(1, 'Time is required')
    .regex(timeRegex, 'Time must be in HH:MM format (optionally AM/PM)'),
  brief: z.string().optional(),
  topics: z.array(z.string()),
  image: z.union([z.string().url().optional(), z.instanceof(File)]).optional(),
});

export const mentorshipSchema = z.object({
  isMentor: z.boolean({
    required_error: 'Please select Yes or No',
    invalid_type_error: 'Must be true or false',
  }),
  sessions: z.array(mentorshipSessionSchema),
});
