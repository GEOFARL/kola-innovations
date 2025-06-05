'use client';

import { useTranslations } from 'next-intl';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { steps } from '@/lib/constants/onboarding/steps';

const OnboardingHeader: React.FC = () => {
  const t = useTranslations('onboarding.steps');
  const { step } = useOnboardingStore();
  const currentStep = steps[step];

  return (
    <div className="flex items-center gap-2">
      <p className="text-dark-600 small-1-md">
        <span className="text-dark-900 body-1">{step + 1}</span> /{steps.length}
      </p>
      <span className="small-1-md text-dark-900">
        {t(`${currentStep.key}.title`)}
      </span>
    </div>
  );
};

export default OnboardingHeader;
