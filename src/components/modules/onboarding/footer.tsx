'use client';

import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import Button from '@/components/ui/button/button';
import { useTranslations } from 'next-intl';
import { steps } from '@/lib/constants/onboarding/steps';

const OnboardingFooter: React.FC = () => {
  const t = useTranslations('onboarding.footer');
  const stepsT = useTranslations('onboarding.steps');

  const { step, next, prev } = useOnboardingStore();
  const isFirst = step === 0;
  const isLast = step === steps.length - 1;

  const nextStepKey = steps[step + 1]?.key;

  return (
    <div className="px-10 py-4 flex justify-between items-center shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
      {isFirst ? (
        <div />
      ) : (
        <Button variant="secondary" color="black" onClick={prev}>
          {t('back')}
        </Button>
      )}

      <div className="flex items-center gap-4">
        {isLast && (
          <Button variant="text-link" color="black">
            {t('skip')}
          </Button>
        )}
        <Button onClick={isLast ? () => {} : next} color="black">
          {isLast
            ? t('finish')
            : `${t('next')} : ${stepsT(`${nextStepKey}.title`)}`}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingFooter;
