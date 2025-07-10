'use client';

import { useTranslations } from 'next-intl';
import DesktopNavigation from './desktop-navigation';
import MobileNavigation from './mobile-navigation/mobile-navigation';

const Navigation: React.FC = () => {
  const t = useTranslations('common.nav');

  const navLinks = [
    { label: t('findTalent'), hasDropdown: true },
    { label: t('findWork'), hasDropdown: true },
    { label: t('mentorship'), hasDropdown: false },
    { label: t('more'), hasDropdown: true },
  ];

  return (
    <>
      <DesktopNavigation items={navLinks} />
      <MobileNavigation items={navLinks} />
    </>
  );
};

export default Navigation;
