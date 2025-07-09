'use client';

import Logo from '@/assets/icons/logo.svg';
import SearchIcon from '@/assets/icons/search.svg';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Button from '../../../ui/button/button';
import AuthModal from '../../auth/auth-modal';
import Navigation from '../navigation';
import LoginButton from './buttons/login-button';
import SignUpButton from './buttons/sign-up-button';
import HeaderWrapper from './header-wrapper';
import MobileSearch from './mobile-search';

const LandingHeader: React.FC = () => {
  const tActions = useTranslations('common.actions');

  return (
    <>
      <HeaderWrapper>
        <div className="flex flex-row-reverse lg:flex-row items-center gap-2 lg:gap-20">
          <Link href="/" aria-label="Homepage">
            <Logo className="scale-80 -mb-1 lg:mb-0 lg:scale-100" />
          </Link>
          <Navigation />
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button
            className="min-w-10! min-h-10!"
            variant="link"
            aria-label={tActions('search')}
          >
            <SearchIcon />
          </Button>
          <LoginButton />
          <SignUpButton />
        </div>

        <MobileSearch />
      </HeaderWrapper>
      <AuthModal />
    </>
  );
};

export default LandingHeader;
