import OnboardingStepForm from '../onboarding-step-form';
import Experiences from './add-experience/experiences';

const ExperienceStep: React.FC = () => {
  return (
    <OnboardingStepForm stepKey="experience">
      {() => (
        <div className="space-y-10">
          <Experiences />
        </div>
      )}
    </OnboardingStepForm>
  );
};

export default ExperienceStep;
