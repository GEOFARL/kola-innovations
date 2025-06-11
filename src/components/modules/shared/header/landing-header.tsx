'use client';

import Logo from '@/assets/icons/logo.svg';
import SearchIcon from '@/assets/icons/search.svg';
import { Link } from '@/i18n/navigation';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import { useTranslations } from 'next-intl';
import Button from '../../../ui/button/button';
import AuthModal from '../../auth/auth-modal';
import MainNav from '../main-nav';
import HeaderWrapper from './header-wrapper';

const LandingHeader: React.FC = () => {
  const tAuth = useTranslations('common.auth');
  const tActions = useTranslations('common.actions');
  const { open } = useAuthModalStore();

  return (
    <>
      <HeaderWrapper>
        <div className="flex items-center gap-20">
          <Link href="/" aria-label="Homepage">
            <Logo />
          </Link>

          <MainNav />
        </div>

        <div className="flex items-center gap-2">
          <Button
            className="min-w-10! min-h-10!"
            variant="link"
            aria-label={tActions('search')}
          >
            <SearchIcon />
          </Button>

          <Button color="black" variant="link" onClick={() => open('signIn')}>
            {tAuth('login')}
          </Button>
          <Button onClick={() => open('signUp')}>{tAuth('signup')}</Button>
        </div>
      </HeaderWrapper>
      <AuthModal />
    </>
  );
};

export default LandingHeader;
