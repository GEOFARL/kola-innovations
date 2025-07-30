import FilesIcon from '@/assets/icons/files.svg';
import DetailsIcon from '@/assets/icons/onboarding/details.svg';
import ExperienceIcon from '@/assets/icons/onboarding/experience.svg';
import MentorshipIcon from '@/assets/icons/onboarding/mentorship.svg';
import ServicesIcon from '@/assets/icons/onboarding/services.svg';
import SkillsIcon from '@/assets/icons/onboarding/skills.svg';
import ReviewIcon from '@/assets/icons/onboarding/review.svg';
import { StepItem } from '@/lib/types/onboarding/step';

export const steps: StepItem[] = [
  { key: 'personalInfo', icon: DetailsIcon },
  { key: 'skills', icon: SkillsIcon },
  { key: 'portfolio', icon: FilesIcon },
  { key: 'experience', icon: ExperienceIcon },
  { key: 'mentorship', icon: MentorshipIcon },
  { key: 'services', icon: ServicesIcon },
  { key: 'review', icon: ReviewIcon },
];
