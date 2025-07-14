'use client';

import { useTranslations } from 'next-intl';
import ContactInformation from '../modules/settings/sections/contact-inforamtion';
import ChangePassword from '../modules/settings/sections/change-password';
import AccountDeactivation from '../modules/settings/sections/account-deactivation';
import ProfileHeader from '../modules/profile/header';
import { useSidebar } from '@/lib/stores/sidebar';
import MoreButton from '../modules/talents/search/more-button';

const SettingsScreen: React.FC = () => {
  const t = useTranslations('settings');

  return (
    <div className="space-y-6">
      <ProfileHeader
        moreButton={<SettingsMoreButton />}
        withoutBackButton
        title={t('title')}
      />
      <ContactInformation />
      <ChangePassword />
      <AccountDeactivation />
    </div>
  );
};

const SettingsMoreButton: React.FC = () => {
  const { open } = useSidebar();
  return <MoreButton onClick={() => open('settings')} />;
};

export default SettingsScreen;
