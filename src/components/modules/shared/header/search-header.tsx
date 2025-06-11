'use client';

import GiftIcon from '@/assets/icons/header/gift.svg';
import NotificationIcon from '@/assets/icons/header/notification.svg';
import BookmarkIcon from '@/assets/icons/header/save.svg';
import SearchIcon from '@/assets/icons/header/search.svg';
import Logo from '@/assets/icons/logo.svg';
import womanAvatar from '@/assets/images/people/woman.jpg';

import Button from '@/components/ui/button/button';
import FormField from '@/components/ui/form-field';
import { useClickOutside } from '@/hooks/use-click-outside';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import HeaderWrapper from './header-wrapper';
import SearchSuggestions from './search-suggestions';

const SearchHeader: React.FC = () => {
  const t = useTranslations('common.search');
  const methods = useForm<{ query: string }>({
    defaultValues: { query: '' },
  });
  const { setValue } = methods;

  const [focused, setFocused] = useState(false);
  const dropdownRef = useClickOutside<HTMLDivElement>(() => setFocused(false));

  const onSubmit = (values: { query: string }) => {
    console.log('Search:', values.query);
    setFocused(false);
  };

  const handleClearSuggestions = () => {
    setValue('query', '');
  };
  const handleQueryClick = (q: string) => {
    setValue('query', q);
    setFocused(true);
  };

  return (
    <HeaderWrapper>
      <Link href="/" aria-label="Homepage">
        <Logo />
      </Link>

      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex-1 w-[360px] relative"
            autoComplete="off"
          >
            <FormField
              name="query"
              placeholder={t('search')}
              leftIcon={<SearchIcon />}
              onFocus={() => setFocused(true)}
              className="w-full rounded-[27px] py-[4px]"
            />
            <SearchSuggestions
              visible={focused}
              onQueryClick={handleQueryClick}
              onClear={handleClearSuggestions}
            />
          </form>
        </FormProvider>

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
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={womanAvatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-[600] text-dark-900">
              Cameron Williamson
            </span>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default SearchHeader;
