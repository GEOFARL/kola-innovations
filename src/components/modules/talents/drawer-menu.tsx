'use client';

import MobileDrawer from '@/components/ui/mobile-drawer';
import { useSidebar } from '@/lib/stores/sidebar';
import ProfileAnalytics from '../profile/analytics';
import MobileAnalyticsComponent from './search/mobile-analytics';
import MobileFiltersComponent from './search/mobile-filters';
import TalentsSidebar from './sidebar';
import SimilarTalents from './similar-talents';
import { usePathname } from 'next/navigation';
import { normalizePathname } from '@/lib/utils/normalize-pathname';

const TalentsDrawerMenu: React.FC = () => {
  const { state, close, open } = useSidebar();
  const pathname = usePathname();
  const normalizedPath = normalizePathname(pathname);

  const renderNavTitle = () => {
    if (state === 'filters') return 'Filters';
    if (state === 'analytics' || state === 'profile-analytics')
      return 'Analytics';
    if (state === 'similar-talents') return 'Similar Talents';
    return null;
  };

  const renderContent = () => {
    if (state === 'sidebar')
      return (
        <TalentsSidebar
          withProfileContent={normalizedPath.includes('profile')}
        />
      );
    if (state === 'filters') return <MobileFiltersComponent.Content />;
    if (state === 'analytics') return <MobileAnalyticsComponent.Content />;
    if (state === 'profile-analytics') return <ProfileAnalytics />;
    if (state === 'similar-talents') return <SimilarTalents />;
    return null;
  };

  return (
    <div className="lg:hidden">
      <MobileDrawer
        isOpen={!!state}
        triggerAction={() => open('sidebar')}
        closeAction={close}
        navElement={
          renderNavTitle() && (
            <p className="text-[16px] leading-[140%] font-[600]">
              {renderNavTitle()}
            </p>
          )
        }
        navElementClassName="flex-row-reverse"
      >
        {renderContent()}
      </MobileDrawer>
    </div>
  );
};

export default TalentsDrawerMenu;
