'use client';

import { useTranslations } from 'next-intl';
import ContactInformation from '../modules/settings/sections/contact-inforamtion';

const SettingsScreen: React.FC = () => {
  const t = useTranslations('settings');

  return (
    <div className="space-y-6">
      <h1 className="h6 text-dark-900">{t('title')}</h1>
      <ContactInformation />
    </div>
  );
};

export default SettingsScreen;
