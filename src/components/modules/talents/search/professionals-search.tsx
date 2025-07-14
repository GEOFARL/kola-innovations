'use client';

import RightArrow from '@/assets/icons/right-arrow-circle.svg';
import { useSidebar } from '@/lib/stores/sidebar';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import SearchBar from '../../shared/header/search-bar';
import SearchSuggestions from '../search/search-suggestions';
import MobileFilters, { MobileButton } from './mobile-filters';

const recentQueries = ['UI UX Designer', 'Project Manager', 'Logo Designer'];

type Props = {
  buttonType?: 'filters' | 'more';
};

const ProfessionalsSearch: React.FC<Props> = ({
  buttonType: type = 'filters',
}) => {
  const t = useTranslations('talents.search');
  const { open } = useSidebar();

  return (
    <div className="flex items-center gap-2">
      <SearchBar
        className="max-w-none"
        renderSuggestions={({ setQuery, clearSuggestions }) => (
          <SearchSuggestions
            onClear={clearSuggestions}
            onQueryClick={(q) => {
              setQuery(q);
            }}
            recentQueries={recentQueries}
          />
        )}
        filters={
          <button
            type="button"
            className="flex items-center gap-1 text-dark-900 small-1-md font-medium"
          >
            {t('filters.relevant')}
            <ChevronDown className="w-4 h-4" />
          </button>
        }
      />

      {type === 'filters' && <MobileFilters />}
      {type === 'more' && (
        <MobileButton
          onClick={() => open('similar-talents')}
          className="py-[6px] px-3 text-[13px] leading-[150%] font-[500]"
        >
          More <RightArrow />
        </MobileButton>
      )}
    </div>
  );
};

export default ProfessionalsSearch;
