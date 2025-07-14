'use client';

import Analytics from '@/components/modules/talents/analytics';
import { useTranslations } from 'next-intl';

const ProfileAnalytics: React.FC = () => {
  const t = useTranslations('profile');
  return (
    <Analytics
      title={t('analytics.title')}
      items={[
        { label: t('analytics.profileViews'), value: 30 },
        { label: t('analytics.vouches'), value: 4 },
      ]}
    />
  );
};

export default ProfileAnalytics;
