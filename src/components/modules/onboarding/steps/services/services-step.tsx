'use client';

import profileImage from '@/assets/images/profile.jpg';
import InfoCard from '@/components/modules/shared/info-card';
import RadioGroupField from '@/components/ui/radio-group-field';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { useTranslations } from 'next-intl';
import { Controller, useWatch } from 'react-hook-form';
import OnboardingStepForm from '../onboarding-step-form';
import Services from './services';

const ServicesStep: React.FC = () => {
  const t = useTranslations('onboarding.services');
  const { data, setStepData } = useOnboardingStore();
  const initialValues = data.services || { isActive: false };

  return (
    <OnboardingStepForm stepKey="services" defaultValues={initialValues}>
      {(methods) => {
        const isActive = useWatch({
          control: methods.control,
          name: 'isActive',
        });

        return (
          <div className="space-y-8">
            <Controller
              control={methods.control}
              name="isActive"
              render={({ field }) => (
                <RadioGroupField
                  name={field.name}
                  value={field.value ? 'true' : 'false'}
                  onValueChange={(val) => {
                    const selected = val === 'true';
                    field.onChange(selected);

                    setStepData('services', {
                      isActive: selected,
                      services: data.services?.services ?? [],
                    });
                  }}
                  options={[
                    { value: 'true', component: <span>{t('yes')}</span> },
                    { value: 'false', component: <span>{t('no')}</span> },
                  ]}
                  variant="basic"
                />
              )}
            />

            {!isActive && (
              <InfoCard
                title={t('info.title')}
                description={t('info.description')}
                items={{
                  title: t('info.subtitle'),
                  values: t.raw('info.keyPoints') as string[],
                }}
                image={profileImage}
              />
            )}

            {isActive && <Services />}
          </div>
        );
      }}
    </OnboardingStepForm>
  );
};

export default ServicesStep;
