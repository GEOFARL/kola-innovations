'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import MaxWidthWrapper from '../../utils/max-width-wrapper';
import Logo from '@/assets/icons/logo.svg';
import SearchIcon from '@/assets/icons/search.svg';
import Button from '../../ui/button/button';
import MainNav from './main-nav';

const HeaderV2: React.FC = () => {
  const tAuth = useTranslations('common.auth');
  const tActions = useTranslations('common.actions');

  return (
    <header className="h-[88px] py-6 border-b-[1.5px] border-dark-100 sticky top-0 bg-white z-100">
      <MaxWidthWrapper className="flex items-center justify-between">
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

          <Button color="black" variant="link">
            {tAuth('login')}
          </Button>
          <Button>{tAuth('signup')}</Button>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default HeaderV2;
