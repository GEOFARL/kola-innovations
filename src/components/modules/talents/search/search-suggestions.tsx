'use client';

import TimeIcon from '@/assets/icons/header/time.svg';

type Props = {
  recentQueries?: string[];
  onQueryClick: (query: string) => void;
  onClear: () => void;
};

const SearchSuggestions: React.FC<Props> = ({
  recentQueries = [],
  onQueryClick,
}) => {
  if (recentQueries.length === 0) return null;
  return (
    <div className="absolute top-[calc(100%-28px)] left-0 mt-2 w-full rounded-bl-[20px] rounded-br-[20px] shadow-md bg-white z-1">
      <div className="px-4 pt-[35px] pb-3 flex justify-between items-center">
        <p className="small-1 text-dark-900">Recent Search</p>
      </div>

      <div className="flex flex-col gap-3 p-4 pt-0">
        {recentQueries.map((query) => (
          <button
            key={query}
            onClick={() => onQueryClick(query)}
            className="flex items-center gap-3 text-dark-700 hover:text-dark-900 text-sm text-left transition"
          >
            <span className="w-5 h-5">
              <TimeIcon />
            </span>
            <span>{query}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
