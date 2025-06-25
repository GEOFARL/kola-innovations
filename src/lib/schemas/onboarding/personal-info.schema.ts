import { z } from 'zod';
import { basePersonalInfoSchema } from '../profile/base-personal-info-schema';

export const personalInfoSchema = basePersonalInfoSchema.extend({
  resume: z
    .any()
    .refine(
      (file) => file instanceof File || file === null || file === undefined,
      { message: 'Resume must be a file' },
    )
    .optional(),
});
