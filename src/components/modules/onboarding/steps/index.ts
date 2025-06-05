import { StepKey } from '@/lib/types/onboarding/store';
import PersonalInfoStep from './personal-info-step';
import SkillsStep from './skills-step';

export const stepComponents: Record<StepKey, React.FC> = {
  personalInfo: PersonalInfoStep,
  skills: SkillsStep,
};
