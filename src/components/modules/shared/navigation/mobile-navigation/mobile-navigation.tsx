'use client';

import MobileDrawer from '@/components/ui/mobile-drawer';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import MobileNavigationContent from './mobile-navigation-content';
import ArrowLeft from '@/assets/icons/arrow-left-2.svg';
import ActiveAuthForm from '@/components/modules/auth/active-auth-form';
import AuthNetworkingOpportunities from '@/components/modules/auth/auth-networking-opportunities';

type Props = {
  items: {
    label: string;
    hasDropdown: boolean;
  }[];
};

const MobileNavigation: React.FC<Props> = ({ items }) => {
  const { close, isOpen: isAuthOpen } = useAuthModalStore();

  return (
    <div className="lg:hidden">
      <MobileDrawer
        closeAction={isAuthOpen ? close : undefined}
        closeIcon={isAuthOpen ? <ArrowLeft /> : undefined}
      >
        {!isAuthOpen && <MobileNavigationContent items={items} />}
        {isAuthOpen && (
          <div className="min-h-full overflow-y-auto flex flex-col">
            <ActiveAuthForm />
            <AuthNetworkingOpportunities className="flex flex-1" />
          </div>
        )}
      </MobileDrawer>
    </div>
  );
};

export default MobileNavigation;
