import OnboardingStepForm from '../onboarding-step-form';

const ReviewStep: React.FC = () => {
  return <OnboardingStepForm stepKey="review">{() => 'fd'}</OnboardingStepForm>;
};

export default ReviewStep;
