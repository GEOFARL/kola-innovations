import { StepKey } from '@/lib/types/onboarding/store';
import PersonalInfoStep from './personal-info/personal-info-step';
import SkillsStep from './skills/skills-step';
import PortfolioStep from './portfolio/portfolio-step';
import ExperienceStep from './experience/experience-step';
import MentorshipStep from './mentorship/mentorship-step';

export const stepComponents: Record<StepKey, React.FC> = {
  personalInfo: PersonalInfoStep,
  skills: SkillsStep,
  portfolio: PortfolioStep,
  experience: ExperienceStep,
  mentorship: MentorshipStep,
};
