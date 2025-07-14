'use client';

import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { useTranslations } from 'next-intl';
import SidebarItem from '../shared/sidebar-item';

import BadgeIcon from '@/assets/icons/badge.svg';
import HomeIcon from '@/assets/icons/talents/home.svg';
import { normalizePathname } from '@/lib/utils/normalize-pathname';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/lib/stores/sidebar';

const ProfileSidebarContent: React.FC = () => {
  const t = useTranslations('profile.sidebar');
  const pathname = usePathname();
  const normalizedPath = normalizePathname(pathname);
  const { close } = useSidebar();
  const commonProps = { onClick: close };

  return (
    <div className="lg:border-t border-dark-100 py-2 lg:py-6">
      <SidebarItem
        {...commonProps}
        icon={<HomeIcon />}
        label={t('profile')}
        href={APP_ROUTES.PROFILE}
        notActive={normalizedPath === APP_ROUTES.PROFILE_VOUCH}
      />
      <SidebarItem
        {...commonProps}
        icon={<BadgeIcon />}
        label={t('vouch')}
        href={APP_ROUTES.PROFILE_VOUCH}
      />
    </div>
  );
};

export default ProfileSidebarContent;
