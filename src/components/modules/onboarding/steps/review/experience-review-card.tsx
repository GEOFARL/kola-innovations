'use client';

import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { useTranslations } from 'next-intl';
import ExperienceCard from '../experience/add-experience/card';
import ReviewCard from './review-card';

const ExperienceReviewCard: React.FC = () => {
  const t = useTranslations('onboarding.experience');
  const { data, setStep } = useOnboardingStore();
  const experiences = data.experience?.experiences ?? [];

  if (experiences.length === 0) {
    return (
      <ReviewCard title={t('reviewTitle')} onEdit={() => setStep(3)}>
        <p className="text-dark-600">{t('noExperience')}</p>
      </ReviewCard>
    );
  }

  return (
    <ReviewCard title={t('reviewTitle')} onEdit={() => setStep(3)}>
      <div className="flex flex-wrap gap-4">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            experience={exp}
            editLabel=""
            deleteLabel=""
          />
        ))}
      </div>
    </ReviewCard>
  );
};

export default ExperienceReviewCard;
