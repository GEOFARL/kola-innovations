'use client';

import GiftIcon from '@/assets/icons/header/gift.svg';
import NotificationIcon from '@/assets/icons/header/notification.svg';
import BookmarkIcon from '@/assets/icons/header/save.svg';
import Logo from '@/assets/icons/logo.svg';

import Button from '@/components/ui/button/button';
import { Link } from '@/i18n/navigation';
import { DEFAULT_USER } from '@/lib/constants/profile';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import Image from 'next/image';
import HeaderWrapper from './header-wrapper';
import SearchBar from './search-bar';
import SearchSuggestions from './search-suggestions';

const SearchHeader: React.FC = () => {
  const handleSubmit = (query: string) => {
    console.log('Search:', query);
  };

  return (
    <HeaderWrapper>
      <Link href="/" aria-label="Homepage">
        <Logo />
      </Link>

      <div className="flex items-center gap-4 relative">
        <div className="w-[360px]">
          <SearchBar
            onSubmit={handleSubmit}
            inputClassName="py-[4px]!"
            renderSuggestions={({ setQuery, clearSuggestions }) => (
              <SearchSuggestions
                onClear={clearSuggestions}
                onQueryClick={(q) => {
                  setQuery(q);
                }}
              />
            )}
          />
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" iconOnly iconCircle aria-label="Gifts">
            <GiftIcon />
          </Button>
          <Button size="sm" iconOnly iconCircle aria-label="Bookmarks">
            <BookmarkIcon />
          </Button>
          <Button size="sm" iconOnly iconCircle aria-label="Notifications">
            <NotificationIcon />
          </Button>
          <Link
            href={APP_ROUTES.PROFILE}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image
              src={DEFAULT_USER.avatarUrl}
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-[600] text-dark-900">
              {DEFAULT_USER.fullName}
            </span>
          </Link>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default SearchHeader;
