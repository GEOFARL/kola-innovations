'use client';

import LogoIcon from '@/assets/icons/logo.svg';
import { cn } from '@/lib/cn';
import { steps } from '@/lib/constants/onboarding/steps';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { useTranslations } from 'next-intl';

const OnboardingSidebar: React.FC = () => {
  const { step } = useOnboardingStore();
  const t = useTranslations('onboarding.steps');

  return (
    <aside className="max-w-[370px] xl:max-w-[506px] hidden lg:flex flex-col bg-primary-100 py-16 px-6 xl:px-10 gap-[93px] relative z-1">
      <LogoIcon />
      <div className="flex flex-col gap-6">
        {steps.map((item, index) => (
          <OnboardingStepItem
            key={item.key}
            isActive={step === index}
            isLast={index === steps.length - 1}
            title={t(`${item.key}.title`)}
            description={t(`${item.key}.description`)}
            icon={item.icon}
          />
        ))}
      </div>
    </aside>
  );
};

export default OnboardingSidebar;

const OnboardingStepItem: React.FC<{
  isActive: boolean;
  isLast: boolean;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}> = ({ isActive, isLast, title, description, icon: Icon }) => {
  return (
    <button className="flex gap-4 relative text-left">
      <div className="w-10 h-10 rounded-full bg-dark-white flex items-center justify-center">
        <Icon
          className={cn(
            'transition-colors',
            isActive ? 'text-primary' : 'text-dark-600',
          )}
        />
      </div>

      {!isLast && (
        <div className="absolute h-[43px] w-[2px] rounded-full bg-primary-300 top-[42px] left-[19px]" />
      )}

      <div className="xl:max-w-[370px] w-full text-left">
        <h4
          className={cn('body-2', isActive ? 'text-primary' : 'text-dark-600')}
        >
          {title}
        </h4>
        <p
          className={cn(
            'small-1-md',
            isActive ? 'text-dark-700' : 'text-dark-600',
          )}
        >
          {description}
        </p>
      </div>
    </button>
  );
};
