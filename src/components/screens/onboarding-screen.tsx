'use client';

import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { stepComponents } from '../modules/onboarding/steps';
import { steps } from '@/lib/constants/onboarding/steps';
import OnboardingLayout from '../modules/onboarding/layout';
import { StepKey } from '@/lib/types/onboarding/store';

const OnboardingScreen: React.FC = () => {
  const { step } = useOnboardingStore();
  const StepComponent = stepComponents[steps[step].key as StepKey];

  return (
    <OnboardingLayout>
      <StepComponent />
    </OnboardingLayout>
  );
};

export default OnboardingScreen;
