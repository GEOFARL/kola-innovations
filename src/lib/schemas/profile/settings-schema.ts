import { z } from 'zod';
import { basePersonalInfoSchema } from './base-personal-info-schema';

export const profileSettingsSchema = basePersonalInfoSchema.extend({
  skills: z.array(z.string()).optional(),
  socials: z
    .object({
      twitter: z
        .string()
        .url('Invalid Twitter URL')
        .or(z.literal(''))
        .optional(),
      linkedin: z
        .string()
        .url('Invalid LinkedIn URL')
        .or(z.literal(''))
        .optional(),
      instagram: z
        .string()
        .url('Invalid Instagram URL')
        .or(z.literal(''))
        .optional(),
      youtube: z
        .string()
        .url('Invalid YouTube URL')
        .or(z.literal(''))
        .optional(),
    })
    .optional(),
});
