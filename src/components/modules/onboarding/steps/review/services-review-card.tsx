'use client';

import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { OnboardingDataMap } from '@/lib/types/onboarding/store';
import { useTranslations } from 'next-intl';
import { ServiceCardContent } from '../services/service-card';
import ReviewCard from './review-card';

type ServicesData = OnboardingDataMap['services'];

const ServicesReviewCard: React.FC<{ data: ServicesData }> = ({ data }) => {
  const t = useTranslations('onboarding.services');
  const { setStep } = useOnboardingStore();

  if (!data.isActive || !data.services?.length) {
    return (
      <ReviewCard title={t('reviewTitle')} onEdit={() => setStep(5)}>
        <p className="text-dark-600">{t('noServices')}</p>
      </ReviewCard>
    );
  }

  return (
    <ReviewCard title={t('reviewTitle')} onEdit={() => setStep(5)}>
      <div className="flex flex-col gap-6">
        {data.services.map((service, idx) => (
          <ServiceCardContent key={idx} service={service} />
        ))}
      </div>
    </ReviewCard>
  );
};

export default ServicesReviewCard;
