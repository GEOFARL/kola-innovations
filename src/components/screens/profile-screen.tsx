'use client';

import { useTranslations } from 'next-intl';
import ProfileHeader from '../modules/profile/header';
import PencilIcon from '@/assets/icons/pencil.svg';
import ProfileDetails from '../modules/profile/profile-details';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import ProfileInfo from '../modules/profile/profile-info';

const ProfileScreen: React.FC = () => {
  const t = useTranslations('profile');
  const router = useRouter();

  return (
    <div className="space-y-6 pb-6">
      <ProfileHeader
        title={t('header.my')}
        actionElement={
          <button
            className="flex items-center gap-2 cursor-pointer small-1-md text-dark-900"
            onClick={() => router.push(APP_ROUTES.PROFILE_SETTINGS)}
          >
            {t('header.edit')} <PencilIcon />
          </button>
        }
      />

      <div className="lg:hidden">
        <ProfileInfo />
      </div>

      <div className="space-y-2">
        <h4 className="body-2 text-[#1E1E1E]">{t('info.title')}</h4>
        <p className="small-1-rg text-[13px]! sm:text-[14px]! text-dark-700">
          {t('info.description')}
        </p>
      </div>

      <ProfileDetails />
    </div>
  );
};

export default ProfileScreen;
