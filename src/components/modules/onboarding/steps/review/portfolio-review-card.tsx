'use client';

import { useTranslations } from 'next-intl';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import ReviewCard from './review-card';
import MediumPreview from '../portfolio/medium-preview';

const PortfolioReviewCard: React.FC = () => {
  const t = useTranslations('onboarding.portfolio');
  const { setStep } = useOnboardingStore();

  return (
    <ReviewCard title={t('reviewTitle')} onEdit={() => setStep(2)}>
      <MediumPreview />
    </ReviewCard>
  );
};

export default PortfolioReviewCard;
