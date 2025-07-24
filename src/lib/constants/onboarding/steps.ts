import DetailsIcon from '@/assets/icons/onboarding/details.svg';
import SkillsIcon from '@/assets/icons/onboarding/skills.svg';
import FilesIcon from '@/assets/icons/files.svg';
import ExperienceIcon from '@/assets/icons/onboarding/experience.svg';
import { StepItem } from '@/lib/types/onboarding/step';

export const steps: StepItem[] = [
  { key: 'experience', icon: ExperienceIcon },
  { key: 'personalInfo', icon: DetailsIcon },
  { key: 'skills', icon: SkillsIcon },
  { key: 'portfolio', icon: FilesIcon },
];
