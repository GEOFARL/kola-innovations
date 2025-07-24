import OnboardingStepForm from '../onboarding-step-form';
import Experiences from './add-experience/experiences';
import JobOpenStatus from './job-status/job-open-status';

const ExperienceStep: React.FC = () => {
  return (
    <OnboardingStepForm stepKey="experience">
      {() => (
        <div className="space-y-10">
          <Experiences />
          <JobOpenStatus />
        </div>
      )}
    </OnboardingStepForm>
  );
};

export default ExperienceStep;
