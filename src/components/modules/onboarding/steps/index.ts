import { StepKey } from '@/lib/types/onboarding/store';
import ExperienceStep from './experience/experience-step';
import MentorshipStep from './mentorship/mentorship-step';
import PersonalInfoStep from './personal-info/personal-info-step';
import PortfolioStep from './portfolio/portfolio-step';
import ServicesStep from './services/services-step';
import SkillsStep from './skills/skills-step';

export const stepComponents: Record<StepKey, React.FC> = {
  personalInfo: PersonalInfoStep,
  skills: SkillsStep,
  portfolio: PortfolioStep,
  experience: ExperienceStep,
  mentorship: MentorshipStep,
  services: ServicesStep,
};
