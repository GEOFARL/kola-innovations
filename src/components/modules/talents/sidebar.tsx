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

const TalentsSidebar: React.FC = () => {
  const t = useTranslations('talents.sidebar');

  return (
    <nav className="flex flex-col justify-between h-full">
      <div>
        <div className="py-6">
          <SidebarItem
            icon={<HomeIcon />}
            label={t('feed')}
            href={APP_ROUTES.PROFESSIONALS}
          />
          <SidebarItem icon={<JobsIcon />} label={t('jobs')} />
          <SidebarItem
            icon={<TalentsIcon />}
            label={t('talents')}
            href={APP_ROUTES.TALENTS}
          />
        </div>

        <div className="border-t border-dark-100 py-6">
          <SidebarItem icon={<MentorsIcon />} label={t('mentors')} />
          <SidebarItem icon={<GroupsIcon />} label={t('groups')} />
        </div>

        <div className="border-t border-dark-100 py-6">
          <SidebarItem icon={<InboxIcon />} label={t('inbox')} />
          <SidebarItem icon={<NetworkIcon />} label={t('network')} />
        </div>
      </div>

      <div className="border-t border-dark-100 py-6">
        <SidebarItem icon={<ResourcesIcon />} label={t('resources')} />
        <SidebarItem
          icon={<SettingsIcon />}
          href={APP_ROUTES.SETTINGS}
          label={t('settings')}
        />
        <SidebarItem icon={<LogoutIcon />} label={t('logout')} />
      </div>
    </nav>
  );
};

export default TalentsSidebar;
