'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SearchBar from '../../shared/header/search-bar';
import SearchSuggestions from '../search/search-suggestions';

const recentQueries = ['UI UX Designer', 'Project Manager', 'Logo Designer'];

const ProfessionalsSearch: React.FC = () => {
  const [focused, setFocused] = useState(false);
  return (
    <SearchBar
      onFocusChange={setFocused}
      className="max-w-none"
      renderSuggestions={({ setQuery, clearSuggestions }) => (
        <SearchSuggestions
          visible={focused}
          onClear={clearSuggestions}
          onQueryClick={(q) => {
            setQuery(q);
            setFocused(true);
          }}
          recentQueries={recentQueries}
        />
      )}
      filters={
        <button
          type="button"
          className="flex items-center gap-1 text-dark-900 small-1-md font-medium"
        >
          Relevant
          <ChevronDown className="w-4 h-4" />
        </button>
      }
    />
  );
};

export default ProfessionalsSearch;
