'use client';

import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { useTranslations } from 'next-intl';
import SidebarItem from '../shared/sidebar-item';

import BadgeIcon from '@/assets/icons/badge.svg';
import HomeIcon from '@/assets/icons/talents/home.svg';
import LogoutIcon from '@/assets/icons/talents/logout.svg';
import { normalizePathname } from '@/lib/utils/normalize-pathname';
import { usePathname } from 'next/navigation';
import ProfileInfo from './profile-info';

const ProfileSidebar: React.FC = () => {
  const t = useTranslations('profile.sidebar');
  const pathname = usePathname();
  const normalizedPath = normalizePathname(pathname);

  return (
    <nav className="flex flex-col justify-between h-full">
      <div>
        <ProfileInfo />
        <div className="py-6 border-y border-dark-100">
          <SidebarItem
            icon={<HomeIcon />}
            label={t('profile')}
            href={APP_ROUTES.PROFILE}
            notActive={normalizedPath === APP_ROUTES.PROFILE_VOUCH}
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
