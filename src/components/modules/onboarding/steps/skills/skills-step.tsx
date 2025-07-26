'use client';

import SkillsField from '@/components/modules/shared/fields/skills-field';
import OnboardingStepForm from '../onboarding-step-form';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';

const SkillsStep: React.FC = () => {
  const initialValues = useOnboardingStore((s) => s.data['skills']);
  return (
    <OnboardingStepForm stepKey="skills" defaultValues={initialValues}>
      {() => <SkillsField />}
    </OnboardingStepForm>
  );
};

export default SkillsStep;
