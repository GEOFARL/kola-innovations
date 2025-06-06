import { z } from 'zod';
import { personalInfoSchema } from '@/lib/schemas/onboarding/personal-info.schema';
import { skillsSchema } from '@/lib/schemas/onboarding/skills-schema';

export const onboardingSchemas = {
  personalInfo: personalInfoSchema,
  skills: skillsSchema,
};

export const onboardingStepOrder = ['personalInfo', 'skills'] as const;

export type StepKey = keyof typeof onboardingSchemas;

export type OnboardingDataMap = {
  [K in StepKey]: z.infer<(typeof onboardingSchemas)[K]>;
};
