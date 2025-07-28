'use client';

import profileImage from '@/assets/images/profile.jpg';
import { useTranslations } from 'next-intl';
import InfoCard from '../../shared/info-card';

const VouchInfo: React.FC = () => {
  const t = useTranslations('profile.vouch');
  return (
    <InfoCard
      title={t('whatIs')}
      description={t('description')}
      image={profileImage}
      items={{
        title: t('keyAspects.title'),
        values: t.raw('keyAspects.items'),
      }}
    />
  );
};

export default VouchInfo;
