'use client';

import MobileDrawer from '@/components/ui/mobile-drawer';
import TalentsSidebar from './sidebar';
import { useProfessionalsFilters } from '@/lib/stores/professionals/filters';
import MobileFiltersComponent from './search/mobile-filters';

const TalentsDrawerMenu: React.FC = () => {
  const { isOpen, close } = useProfessionalsFilters();

  return (
    <div className="lg:hidden">
      <MobileDrawer
        isOpen={isOpen ? isOpen : undefined}
        closeAction={() => {
          close();
        }}
        navElement={
          <p className="text-[16px] leading-[140%] font-[600]">Filters</p>
        }
        navElementClassName="flex-row-reverse"
      >
        {!isOpen && <TalentsSidebar />}
        {isOpen && <MobileFiltersComponent.Content />}
      </MobileDrawer>
    </div>
  );
};

export default TalentsDrawerMenu;
