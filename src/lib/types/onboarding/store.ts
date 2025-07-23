import { z } from 'zod';
import { personalInfoSchema } from '@/lib/schemas/onboarding/personal-info.schema';
import { skillsSchema } from '@/lib/schemas/onboarding/skills-schema';
import { portfolioSchema } from '@/lib/schemas/onboarding/portfolio-schema';
import { experienceSchema } from '@/lib/schemas/onboarding/experience.schema';

export const onboardingSchemas = {
  personalInfo: personalInfoSchema,
  skills: skillsSchema,
  portfolio: portfolioSchema,
  experience: experienceSchema,
} as const;

export type StepKey = keyof typeof onboardingSchemas;
export type OnboardingDataMap = {
  [K in StepKey]: z.infer<(typeof onboardingSchemas)[K]>;
};
