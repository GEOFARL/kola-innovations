'use client';

import profileImage from '@/assets/images/profile.jpg';
import InfoCard from '@/components/modules/shared/info-card';
import RadioGroupField from '@/components/ui/radio-group-field';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { useTranslations } from 'next-intl';
import OnboardingStepForm from '../onboarding-step-form';

const MentorshipStep: React.FC = () => {
  const t = useTranslations('onboarding.mentorship');
  const initialValues = useOnboardingStore((state) => state.data['mentorship']);

  return (
    <OnboardingStepForm stepKey="mentorship" defaultValues={initialValues}>
      {() => (
        <div className="space-y-8">
          <RadioGroupField
            name="interested"
            options={[
              { value: 'true', component: <span>{t('yes')}</span> },
              { value: 'false', component: <span>{t('no')}</span> },
            ]}
            variant="basic"
          />

          <InfoCard
            title={t('info.title')}
            description={t('info.description')}
            items={{
              title: t('info.title'),
              values: t.raw('info.keyPoints') as string[],
            }}
            image={profileImage}
          />
        </div>
      )}
    </OnboardingStepForm>
  );
};

export default MentorshipStep;
