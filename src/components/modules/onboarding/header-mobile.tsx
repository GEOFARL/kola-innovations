'use client';

import LogoIcon from '@/assets/icons/logo.svg';
import { useTranslations } from 'next-intl';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { steps } from '@/lib/constants/onboarding/steps';
import InfoIcon from '@/assets/icons/info.svg';
import Tabs from '@/components/ui/tabs';
import { cn } from '@/lib/cn';

const OnboardingHeaderMobile: React.FC = () => {
  const { step, setStep } = useOnboardingStore();
  const t = useTranslations('onboarding.steps');

  const currentStep = steps[step];
  const currentKey = currentStep.key;

  return (
    <div className="lg:hidden sticky top-0 bg-dark-white z-50">
      <div className="py-[10px] px-3">
        <LogoIcon className="scale-75" />
      </div>

      <div className="w-full border-b border-dark-100 bg-primary-100 px-4">
        <Tabs
          value={currentKey}
          onValueChange={(key) => {
            const index = steps.findIndex((s) => s.key === key);
            if (index !== -1) setStep(index);
          }}
          tabs={steps.map((s) => ({
            value: s.key,
            label: (
              <div className="flex items-center gap-2">
                <s.icon
                  className={cn(
                    currentKey === s.key ? 'text-primary' : 'text-dark-500',
                  )}
                />
                <span>{t(`${s.key}.title`)}</span>
              </div>
            ),
          }))}
          layout="horizontal"
          className="overflow-x-auto no-scrollbar gap-0"
          itemClassName="whitespace-nowrap py-[10px] px-[30px]"
          rootClassName="flex w-full"
        />
      </div>

      <div className="px-3 pt-4 flex gap-2">
        <InfoIcon className="shrink-0 mt-[5px]" />
        <p className="text-[14px] text-dark-700 font-medium">
          {t(`${currentKey}.description`)}
        </p>
      </div>
    </div>
  );
};

export default OnboardingHeaderMobile;
