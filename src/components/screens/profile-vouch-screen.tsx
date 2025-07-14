import { useTranslations } from 'next-intl';
import ProfileHeader from '../modules/profile/header';
import VouchInfo from '../modules/profile/vouch/info';
import VouchTabs from '../modules/profile/vouch/tabs/tabs';
import ProfileInfo from '../modules/profile/profile-info';

const ProfileVouchScreen: React.FC = () => {
  const t = useTranslations('profile');

  return (
    <div className="pb-4 lg:pb-0 space-y-4 lg:space-y-6">
      <ProfileHeader title={t('header.vouch')} />
      <div className="lg:hidden">
        <ProfileInfo />
      </div>
      <VouchInfo />
      <VouchTabs />
    </div>
  );
};

export default ProfileVouchScreen;
