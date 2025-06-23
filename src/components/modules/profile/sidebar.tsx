'use client';

import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { useTranslations } from 'next-intl';
import SidebarItem from '../shared/sidebar-item';

import BadgeIcon from '@/assets/icons/badge.svg';
import PencilIcon from '@/assets/icons/pencil.svg';
import LocationIcon from '@/assets/icons/talents/location.svg';
import HomeIcon from '@/assets/icons/talents/home.svg';
import LogoutIcon from '@/assets/icons/talents/logout.svg';
import { DEFAULT_USER } from '@/lib/constants/profile';
import Image from 'next/image';

const ProfileSidebar: React.FC = () => {
  const t = useTranslations('profile.sidebar');

  return (
    <nav className="flex flex-col justify-between h-full">
      <div>
        <div className="p-6">
          <div className="relative w-30">
            <Image
              src={DEFAULT_USER.avatarUrl}
              alt="User Avatar"
              className="w-full h-30 rounded-full object-cover"
            />
            <div className="absolute flex items-center justify-center bottom-0 right-0 w-[34px] h-[34px] border-[3px] border-white rounded-full bg-dark-100">
              <PencilIcon />
            </div>
          </div>

          <div className="mt-6">
            <h6 className="text-dark-900 h6">{DEFAULT_USER.fullName}</h6>
            <p className="mt-1 small-1-rg text-dark-700">{DEFAULT_USER.job}</p>
            <div className="mt-3 flex items-center gap-2">
              <LocationIcon />
              <p className="small-1-md text-dark-600">
                {DEFAULT_USER.location}
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 border-y border-dark-100">
          <SidebarItem
            icon={<HomeIcon />}
            label={t('profile')}
            href={APP_ROUTES.PROFILE}
          />
          <SidebarItem
            icon={<BadgeIcon />}
            label={t('vouch')}
            href={APP_ROUTES.PROFILE_VOUCH}
          />
        </div>
      </div>

      <div className="border-t border-dark-100 py-6">
        <SidebarItem icon={<LogoutIcon />} label={t('logout')} />
      </div>
    </nav>
  );
};

export default ProfileSidebar;
