'use client';

import { useTranslations } from 'next-intl';
import NavItem from './nav-item';

const MainNav: React.FC = () => {
  const t = useTranslations('common.nav');

  const navLinks = [
    { label: t('findTalent'), hasDropdown: true },
    { label: t('findWork'), hasDropdown: true },
    { label: t('mentorship') },
    { label: t('more'), hasDropdown: true },
  ];

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {navLinks.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            hasDropdown={item.hasDropdown}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
