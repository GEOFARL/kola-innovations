'use client';

import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import Button from '@/components/ui/button/button';
import { useTranslations } from 'next-intl';
import { steps } from '@/lib/constants/onboarding/steps';

const OnboardingFooter: React.FC = () => {
  const t = useTranslations('onboarding.footer');
  const stepsT = useTranslations('onboarding.steps');

  const { step, next, prev, submitCurrentForm } = useOnboardingStore();
  const isFirst = step === 0;
  const isLast = step === steps.length - 1;

  const nextStepKey = steps[step + 1]?.key;
  const handleNext = () => {
    if (submitCurrentForm) {
      submitCurrentForm();
    } else {
      next();
    }
  };

  return (
    <div className="py-5 px-3 lg:px-10 lg:py-4 flex justify-between items-center shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
      {isFirst ? (
        <div />
      ) : (
        <Button
          variant="secondary"
          className="hidden lg:flex"
          color="black"
          onClick={prev}
        >
          {t('back')}
        </Button>
      )}

      <div className="w-full lg:w-auto flex items-center gap-4">
        {isLast && (
          <Button
            variant="text-link"
            color="black"
            className="w-full lg:w-auto"
          >
            {t('skip')}
          </Button>
        )}
        <Button onClick={handleNext} color="black" className="w-full lg:w-auto">
          {isLast
            ? t('finish')
            : `${t('next')} : ${stepsT(`${nextStepKey}.title`)}`}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingFooter;
