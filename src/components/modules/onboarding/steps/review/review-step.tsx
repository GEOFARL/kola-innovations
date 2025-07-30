import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import OnboardingStepForm from '../onboarding-step-form';
import PersonalInfoReviewCard from './personal-info-review-card';

const ReviewStep: React.FC = () => {
  const { data } = useOnboardingStore();

  return (
    <OnboardingStepForm stepKey="review">
      {() => (
        <div>
          <PersonalInfoReviewCard data={data.personalInfo!} />
        </div>
      )}
    </OnboardingStepForm>
  );
};

export default ReviewStep;
