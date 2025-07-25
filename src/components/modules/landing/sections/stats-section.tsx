'use client';

import { useTranslations } from 'next-intl';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import StatItem from '../stats/stat-item';

const StatsSection: React.FC = () => {
  const t = useTranslations('landing.stats');

  return (
    <MaxWidthWrapper className="py-12 sm:py-20">
      <div className="sm:max-w-[952px] sm:mx-auto sm:text-center mb-6 sm:mb-16">
        <p className="text-primary caption mb-[10px] sm:mb-3">{t('tagline')}</p>
        <h2 className="h3 text-dark-900 whitespace-pre-line">
          {t('headline')}
        </h2>
      </div>

      <div className="grid gap-5 sm:gap-12 lg:gap-20 grid-cols-2 sm:grid-cols-4">
        <StatItem
          value={t('items.opportunities.value')}
          title={t('items.opportunities.title')}
          description={t('items.opportunities.description')}
        />
        <StatItem
          value={t('items.connections.value')}
          title={t('items.connections.title')}
          description={t('items.connections.description')}
        />
        <StatItem
          value={t('items.hired.value')}
          title={t('items.hired.title')}
          description={t('items.hired.description')}
        />
        <StatItem
          value={t('items.mentors.value')}
          title={t('items.mentors.title')}
          description={t('items.mentors.description')}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default StatsSection;
