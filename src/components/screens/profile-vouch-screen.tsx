import { useTranslations } from 'next-intl';
import ProfileHeader from '../modules/profile/header';
import VouchInfo from '../modules/profile/vouch/info';
import VouchTabs from '../modules/profile/vouch/tabs/tabs';

const ProfileVouchScreen: React.FC = () => {
  const t = useTranslations('profile');

  return (
    <div className="space-y-6">
      <ProfileHeader title={t('header.vouch')} />
      <VouchInfo />
      <VouchTabs />
    </div>
  );
};

export default ProfileVouchScreen;
