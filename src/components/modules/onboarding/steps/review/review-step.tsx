import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import OnboardingStepForm from '../onboarding-step-form';
import PersonalInfoReviewCard from './personal-info-review-card';
import SkillsReviewCard from './skills-review-card';
import PortfolioReviewCard from './portfolio-review-card';
import ExperienceReviewCard from './experience-review-card';
import MentorshipReviewCard from './mentorship-review-card';

const ReviewStep: React.FC = () => {
  const { data } = useOnboardingStore();

  return (
    <OnboardingStepForm stepKey="review">
      {() => (
        <div className="space-y-10">
          <PersonalInfoReviewCard data={data.personalInfo!} />
          <SkillsReviewCard data={data.skills!} />
          <PortfolioReviewCard />
          <ExperienceReviewCard />
          <MentorshipReviewCard data={data.mentorship!} />
        </div>
      )}
    </OnboardingStepForm>
  );
};

export default ReviewStep;
