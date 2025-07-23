import { z } from 'zod';
import { basePersonalInfoSchema } from '../profile/base-personal-info-schema';

const dateSchema = z.object({
  month: z.string().min(1, 'Month required'),
  year: z.string().min(1, 'Year required'),
});

const experienceItemSchema = z.object({
  jobTitle: z.string().min(1, 'Job title is required'),
  companyName: z.string().min(1, 'Company name is required'),
  companyWebsite: z
    .string()
    .url('Invalid website URL')
    .or(z.literal(''))
    .optional(),
  startDate: dateSchema,
  endDate: dateSchema.optional(),
  currentlyWorking: z.boolean(),
  location: basePersonalInfoSchema.shape.location,
  workType: z.enum(['remote', 'hybrid', 'in-office']),
  primaryRole: z.string().optional(),
  description: z.string().optional(),
});

export const jobPreferenceSchema = z.object({
  preferredRoles: z.array(z.string()).default([]),
  preferredJobTypes: z.array(z.string()).default([]),
  location: basePersonalInfoSchema.shape.location.optional(),
  workModes: z.array(z.enum(['remote', 'hybrid', 'in-office'])).default([]),
  holdingOtherOffers: z.boolean().default(false),
  preferredIndustries: z.array(z.string()).default([]),
  ethnicity: basePersonalInfoSchema.shape.ethnicity.optional(),
  orientation: basePersonalInfoSchema.shape.orientation.optional(),
});

export const experienceSchema = z.object({
  experiences: z.array(experienceItemSchema).default([]),
  jobPreference: jobPreferenceSchema.optional(),
});
