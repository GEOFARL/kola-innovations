'use client';

import { useTranslations } from 'next-intl';
import ProfileHeader from '../modules/profile/header';
import PencilIcon from '@/assets/icons/pencil.svg';
import ProfileInfo from '../modules/profile/info';

const ProfileScreen: React.FC = () => {
  const t = useTranslations('profile');

  return (
    <div className="space-y-6">
      <ProfileHeader
        title={t('header.my')}
        actionElement={
          <button className="flex items-center gap-2 cursor-pointer small-1-md text-dark-900">
            {t('header.edit')} <PencilIcon />
          </button>
        }
      />

      <div className="space-y-2">
        <h4 className="body-2 text-[#1E1E1E]">{t('info.title')}</h4>
        <p className="small-1-rg text-dark-700">{t('info.description')}</p>
      </div>

      <ProfileInfo />
    </div>
  );
};

export default ProfileScreen;
