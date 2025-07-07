'use client';

import MobileDrawer from '@/components/ui/mobile-drawer';
import LoginButton from '../header/buttons/login-button';
import SignUpButton from '../header/buttons/sign-up-button';
import NavItem from '../nav-item';

type Props = {
  items: {
    label: string;
    hasDropdown: boolean;
  }[];
};

const MobileNavigation: React.FC<Props> = ({ items }) => {
  return (
    <div className="lg:hidden">
      <MobileDrawer>
        <div className="flex flex-col justify-between h-full">
          <ul className="flex flex-col gap-8 px-[14px] py-8">
            {items.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                hasDropdown={item.hasDropdown}
              />
            ))}
          </ul>

          <div className="mt-auto border-t-[1.5px] border-dark-100 py-4 px-3 flex gap-4">
            <LoginButton variant="secondary" color="black" className="flex-1" />
            <SignUpButton color="black" className="flex-1" />
          </div>
        </div>
      </MobileDrawer>
    </div>
  );
};

export default MobileNavigation;
