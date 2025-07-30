'use client';

import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { OnboardingDataMap } from '@/lib/types/onboarding/store';
import { useTranslations } from 'next-intl';
import { SessionCardContent } from '../mentorship/session-card';
import ReviewCard from './review-card';

type MentorshipData = OnboardingDataMap['mentorship'];

const MentorshipReviewCard: React.FC<{ data: MentorshipData }> = ({ data }) => {
  const t = useTranslations('onboarding.mentorship');
  const { setStep } = useOnboardingStore();

  if (!data.isMentor || !data.sessions.length) {
    return (
      <ReviewCard title={t('reviewTitle')} onEdit={() => setStep(4)}>
        <p className="text-dark-600">{t('noMentorship')}</p>
      </ReviewCard>
    );
  }

  return (
    <ReviewCard title={t('reviewTitle')} onEdit={() => setStep(4)}>
      <div className="flex flex-col gap-6">
        {data.sessions.map((session, idx) => (
          <SessionCardContent key={idx} session={session} />
        ))}
      </div>
    </ReviewCard>
  );
};

export default MentorshipReviewCard;
