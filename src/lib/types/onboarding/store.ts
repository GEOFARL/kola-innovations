import { personalInfoSchema } from '@/lib/schemas/onboarding/personal-info.schema';
import { z } from 'zod';

export const onboardingSchemas = {
  personalInfo: personalInfoSchema,
  skills: z.object({}),
};

export const onboardingStepOrder = ['personalInfo'] as const;

export type StepKey = keyof typeof onboardingSchemas;

export type OnboardingDataMap = {
  [K in StepKey]: z.infer<(typeof onboardingSchemas)[K]>;
};
