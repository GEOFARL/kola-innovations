'use client';

import { useTranslations } from 'next-intl';

const ProfessionalAnalytics: React.FC = () => {
  const t = useTranslations('talents.analytics');

  return (
    <div className="p-6">
      <h2 className="font-semibold text-lg text-dark-900 mb-6">{t('title')}</h2>

      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-dark-900">
          {t('vouches')}
        </span>
        <span className="text-base font-semibold text-dark-900">30</span>
      </div>
    </div>
  );
};

export default ProfessionalAnalytics;
