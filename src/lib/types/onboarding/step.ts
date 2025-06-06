import { personalInfoSchema } from '@/lib/schemas/onboarding/personal-info.schema';
import { skillsSchema } from '@/lib/schemas/onboarding/skills-schema';
import { z } from 'zod';

export type StepItem = {
  key: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type PersonalInfoData = z.infer<typeof personalInfoSchema>;
export type SkillsData = z.infer<typeof skillsSchema>;
