import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  jobTitle: z.string().min(1, 'Job title is required'),
  username: z.string().min(1, 'Username is required'),
  location: z.object({
    province: z.string().min(1, 'Province is required'),
    city: z.string().min(1, 'City is required'),
  }),
  brief: z.string().optional(),
  languages: z.array(z.string()).optional(),
  ethnicity: z.string().optional(),
  orientation: z.string().optional(),
  hasDisability: z.boolean().optional(),
  disability: z.string().optional(),
  resume: z
    .any()
    .refine(
      (file) => file instanceof File || file === null || file === undefined,
      {
        message: 'Resume must be a file',
      },
    )
    .optional(),
});
