'use client';

import { useTranslations } from 'next-intl';
import SidebarItem from '../shared/sidebar-item';

import LogoutIcon from '@/assets/icons/talents/logout.svg';
import ProfileInfo from './profile-info';
import ProfileSidebarContent from './profile-sidebar-content';

const ProfileSidebar: React.FC = () => {
  const t = useTranslations('profile.sidebar');

  return (
    <nav className="flex flex-col justify-between h-full">
      <div>
        <ProfileInfo />
        <ProfileSidebarContent />
      </div>

      <div className="border-t border-dark-100 py-6">
        <SidebarItem icon={<LogoutIcon />} label={t('logout')} />
      </div>
    </nav>
  );
};

export default ProfileSidebar;
