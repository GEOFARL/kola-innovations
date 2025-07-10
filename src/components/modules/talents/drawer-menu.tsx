'use client';

import MobileDrawer from '@/components/ui/mobile-drawer';
import TalentsSidebar from './sidebar';

const TalentsDrawerMenu: React.FC = () => {
  return (
    <div className="lg:hidden">
      <MobileDrawer>
        <TalentsSidebar />
      </MobileDrawer>
    </div>
  );
};

export default TalentsDrawerMenu;
