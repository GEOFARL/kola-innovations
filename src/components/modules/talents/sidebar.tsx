'use client';

import { useTranslations } from 'next-intl';

import { APP_ROUTES } from '@/lib/constants/routing/routes';

import GroupsIcon from '@/assets/icons/talents/groups.svg';
import HomeIcon from '@/assets/icons/talents/home.svg';
import InboxIcon from '@/assets/icons/talents/inbox.svg';
import JobsIcon from '@/assets/icons/talents/jobs.svg';
import LogoutIcon from '@/assets/icons/talents/logout.svg';
import MentorsIcon from '@/assets/icons/talents/mentors.svg';
import NetworkIcon from '@/assets/icons/talents/network.svg';
import ResourcesIcon from '@/assets/icons/talents/resources.svg';
import SettingsIcon from '@/assets/icons/talents/settings.svg';
import TalentsIcon from '@/assets/icons/talents/talents.svg';
import SidebarItem from '../shared/sidebar-item';
import { useSidebar } from '@/lib/stores/sidebar';
import ProfileSidebarContent from '../profile/profile-sidebar-content';

type Props = {
  withProfileContent?: boolean;
};

const TalentsSidebar: React.FC<Props> = ({ withProfileContent = false }) => {
  const t = useTranslations('talents.sidebar');

  const { close } = useSidebar();
  const commonProps = { onClick: close };

  return (
    <nav className="flex flex-col justify-between h-full">
      <div>
        <div className="py-2 lg:py-6">
          <SidebarItem
            {...commonProps}
            icon={<HomeIcon />}
            label={t('feed')}
            href={APP_ROUTES.PROFESSIONALS}
          />
          <SidebarItem {...commonProps} icon={<JobsIcon />} label={t('jobs')} />
          <SidebarItem
            {...commonProps}
            icon={<TalentsIcon />}
            label={t('talents')}
            href={APP_ROUTES.TALENTS}
          />
        </div>

        <div className="lg:border-t border-dark-100 py-2 lg:py-6">
          <SidebarItem
            {...commonProps}
            icon={<MentorsIcon />}
            label={t('mentors')}
          />
          <SidebarItem
            {...commonProps}
            icon={<GroupsIcon />}
            label={t('groups')}
          />
        </div>

        <div className="lg:border-t border-dark-100 py-2 lg:py-6">
          <SidebarItem
            {...commonProps}
            icon={<InboxIcon />}
            label={t('inbox')}
          />
          <SidebarItem
            {...commonProps}
            icon={<NetworkIcon />}
            label={t('network')}
          />
        </div>

        {withProfileContent && <ProfileSidebarContent />}
      </div>

      <div className="lg:border-t border-dark-100 py-2 lg:py-6">
        <SidebarItem
          {...commonProps}
          icon={<ResourcesIcon />}
          label={t('resources')}
        />
        <SidebarItem
          {...commonProps}
          icon={<SettingsIcon />}
          href={APP_ROUTES.SETTINGS}
          label={t('settings')}
        />
        <SidebarItem
          {...commonProps}
          icon={<LogoutIcon />}
          label={t('logout')}
        />
      </div>
    </nav>
  );
};

export default TalentsSidebar;
