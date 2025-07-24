import { z } from 'zod';
import { basePersonalInfoSchema } from '../profile/base-personal-info-schema';

const monthRegex = /^(0?[1-9]|1[0-2])$/;
const yearRegex = /^[0-9]{4}$/;

const dateSchema = z.object({
  month: z.string().regex(monthRegex, 'Invalid month').min(1, 'Month required'),
  year: z.string().regex(yearRegex, 'Invalid year'),
});

export const experienceItemSchema = z
  .object({
    jobTitle: z.string().min(1, 'Job title is required'),
    companyName: z.string().min(1, 'Company name is required'),
    companyWebsite: z
      .string()
      .url('Invalid website URL')
      .or(z.literal(''))
      .optional(),
    startDate: dateSchema,
    endDate: z
      .object({
        month: z.string(),
        year: z.string(),
      })
      .optional(),
    currentlyWorking: z.boolean(),
    location: basePersonalInfoSchema.shape.location,
    workType: z.enum(['remote', 'hybrid', 'in-office']),
    primaryRole: z.string().optional(),
    description: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const { currentlyWorking, endDate, startDate } = data;

    if (!currentlyWorking) {
      if (!endDate?.month || !endDate?.year) {
        ctx.addIssue({
          path: ['endDate'],
          code: z.ZodIssueCode.custom,
          message: 'End date is required unless currently working',
        });
        return;
      }

      if (!monthRegex.test(endDate.month)) {
        ctx.addIssue({
          path: ['endDate', 'month'],
          code: z.ZodIssueCode.custom,
          message: 'Invalid month',
        });
      }
      if (!yearRegex.test(endDate.year)) {
        ctx.addIssue({
          path: ['endDate', 'year'],
          code: z.ZodIssueCode.custom,
          message: 'Invalid year',
        });
      }

      const start = new Date(`${startDate.year}-${startDate.month}-01`);
      const end = new Date(`${endDate.year}-${endDate.month}-01`);
      if (end < start) {
        ctx.addIssue({
          path: ['endDate', 'year'],
          code: z.ZodIssueCode.custom,
          message: 'End date must be after start date',
        });
      }
    }
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
