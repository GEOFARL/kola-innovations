'use client';

import SkillsField from '@/components/modules/shared/fields/skills-field';
import OnboardingStepForm from '../onboarding-step-form';

const SkillsStep: React.FC = () => {
  return (
    <OnboardingStepForm stepKey="skills">
      {() => <SkillsField />}
    </OnboardingStepForm>
  );
};

export default SkillsStep;
