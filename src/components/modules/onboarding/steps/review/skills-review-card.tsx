'use client';

import { useTranslations } from 'next-intl';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { OnboardingDataMap } from '@/lib/types/onboarding/store';
import ReviewCard from './review-card';
import TagChip from '@/components/ui/tag-chip';

type SkillsData = OnboardingDataMap['skills'];

const SkillsReviewCard: React.FC<{ data: SkillsData }> = ({ data }) => {
  const t = useTranslations('onboarding.skills');
  const tCommon = useTranslations('common');
  const { setStep } = useOnboardingStore();

  if (!data?.skills || data.skills.length === 0) {
    return (
      <ReviewCard title={t('reviewTitle')} onEdit={() => setStep(1)}>
        <p className="text-dark-600">{t('noSkills')}</p>
      </ReviewCard>
    );
  }

  return (
    <ReviewCard title={t('reviewTitle')} onEdit={() => setStep(1)}>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <TagChip
            key={skill}
            label={tCommon(`skills.values.${skill}`)}
            variant="static"
          />
        ))}
      </div>
    </ReviewCard>
  );
};

export default SkillsReviewCard;
