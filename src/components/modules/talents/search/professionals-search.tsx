'use client';

import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import SearchBar from '../../shared/header/search-bar';
import SearchSuggestions from '../search/search-suggestions';
import MobileFilters from './mobile-filters';

const recentQueries = ['UI UX Designer', 'Project Manager', 'Logo Designer'];

const ProfessionalsSearch: React.FC = () => {
  const t = useTranslations('talents.search');

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

      <MobileFilters />
    </div>
  );
};

export default ProfessionalsSearch;
