'use client';

import { UserJSON } from '@/lib/types/auth/user';
import LandingHeader from './landing-header';
import SearchHeader from './search-header';

type Props = {
  variant?: 'landing' | 'default';
  user: UserJSON | null;
};

const Header: React.FC<Props> = ({ variant = 'default', user }) => {
  if (variant === 'landing') {
    return <LandingHeader user={user} />;
  }
  return <SearchHeader />;
};

export default Header;
