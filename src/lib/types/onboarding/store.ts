import { experienceSchema } from '@/lib/schemas/onboarding/experience.schema';
import { mentorshipSchema } from '@/lib/schemas/onboarding/mentorship.schema';
import { personalInfoSchema } from '@/lib/schemas/onboarding/personal-info.schema';
import { portfolioSchema } from '@/lib/schemas/onboarding/portfolio-schema';
import { reviewSchema } from '@/lib/schemas/onboarding/review.schema';
import { servicesSchema } from '@/lib/schemas/onboarding/services.schema';
import { skillsSchema } from '@/lib/schemas/onboarding/skills-schema';
import { z } from 'zod';

export const onboardingSchemas = {
  personalInfo: personalInfoSchema,
  skills: skillsSchema,
  portfolio: portfolioSchema,
  experience: experienceSchema,
  mentorship: mentorshipSchema,
  services: servicesSchema,
  review: reviewSchema,
} as const;

export type StepKey = keyof typeof onboardingSchemas;
export type OnboardingDataMap = {
  [K in StepKey]: z.infer<(typeof onboardingSchemas)[K]>;
};
