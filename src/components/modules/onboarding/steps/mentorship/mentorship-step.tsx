'use client';

import profileImage from '@/assets/images/profile.jpg';
import InfoCard from '@/components/modules/shared/info-card';
import RadioGroupField from '@/components/ui/radio-group-field';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { useTranslations } from 'next-intl';
import { Controller, useWatch } from 'react-hook-form';
import OnboardingStepForm from '../onboarding-step-form';
import MentorshipSessions from './mentorship-sessions';

const MentorshipStep: React.FC = () => {
  const t = useTranslations('onboarding.mentorship');
  const { data, setStepData } = useOnboardingStore();

  const initialValues = data.mentorship || { isMentor: false, sessions: [] };

  return (
    <OnboardingStepForm
      stepKey="mentorship"
      defaultValues={initialValues}
      skipFormSave
    >
      {(methods) => {
        const isMentor = useWatch({
          control: methods.control,
          name: 'isMentor',
        });

        return (
          <div className="space-y-8">
            <Controller
              control={methods.control}
              name="isMentor"
              render={({ field }) => (
                <RadioGroupField
                  name={field.name}
                  value={field.value ? 'true' : 'false'}
                  onValueChange={(val) => {
                    const selected = val === 'true';
                    field.onChange(selected);

                    setStepData('mentorship', {
                      isMentor: selected,
                      sessions: data.mentorship?.sessions ?? [],
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

            {!isMentor && (
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

            {isMentor && <MentorshipSessions />}
          </div>
        );
      }}
    </OnboardingStepForm>
  );
};

export default MentorshipStep;
