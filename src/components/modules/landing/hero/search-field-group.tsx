'use client';

import { useTranslations } from 'next-intl';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import SearchField from './search-field';

const SearchFieldGroup: React.FC = () => {
  const t = useTranslations('landing.hero.search');

  return (
    <div className="flex gap-2 sm:gap-5 items-center flex-1">
      <div className="sm:max-w-[164px] flex-1 sm:w-full">
        <SearchField
          label={t('category')}
          value={t('value.category')}
          icon={<ArrowDown />}
        />
      </div>

      <div className="hidden sm:block h-[48px] w-[1px] shrink-0 bg-dark-300" />

      <div className="flex-1">
        <SearchField label={t('keywords')} value={t('value.keywords')} />
      </div>
    </div>
  );
};

export default SearchFieldGroup;
