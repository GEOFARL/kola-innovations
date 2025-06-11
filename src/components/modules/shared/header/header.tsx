'use client';

import LandingHeader from './landing-header';
import SearchHeader from './search-header';

type Props = {
  variant?: 'landing' | 'default';
};

const Header: React.FC<Props> = ({ variant = 'default' }) => {
  if (variant === 'landing') {
    return <LandingHeader />;
  }
  return <SearchHeader />;
};

export default Header;
