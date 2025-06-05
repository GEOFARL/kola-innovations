import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  jobTitle: z.string(),
  username: z.string().min(1),
  location: z.object({
    province: z.string(),
    city: z.string(),
  }),
  brief: z.string().optional(),
  languages: z.array(z.string()),
  ethnicity: z.string().optional(),
  orientation: z.string().optional(),
  disability: z.string().optional(),
});

export type PersonalInfoData = z.infer<typeof personalInfoSchema>;
