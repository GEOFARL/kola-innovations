'use client';

import Search from '@/assets/icons/search-small.svg';
import Button from '@/components/ui/button/button';
import MobileDrawer from '@/components/ui/mobile-drawer';
import { useTranslations } from 'next-intl';
import SearchBar from './search-bar';
import SearchSuggestions from './search-suggestions';

const MobileSearch: React.FC = () => {
  const tActions = useTranslations('common.actions');
  return (
    <div className="lg:hidden">
      <MobileDrawer
        trigger={({ onClick }) => (
          <Button
            iconOnly
            iconCircle
            size="sm"
            variant="secondary"
            color="black"
            aria-label={tActions('search')}
            onClick={onClick}
          >
            <Search />
          </Button>
        )}
        navElement={<SearchBar />}
      >
        <SearchSuggestions className="static w-full h-full shadow-none border-none">
          <div className="flex flex-col h-full justify-between">
            <div className="px-3 py-4 pr-1">
              <SearchSuggestions.Header />
              <SearchSuggestions.RecentPeople
                className="flex-col items-start"
                itemClassName="flex-row [&>span]:max-w-none [&>span]:text-[14px] [&>img]:w-10 [&>img]:h-10"
              />
              <SearchSuggestions.ItemsContainer className="space-y-4 p-0 mt-6 border-none">
                <SearchSuggestions.RecentQueries className="text-[13px]!" />
              </SearchSuggestions.ItemsContainer>
            </div>

            <SearchSuggestions.ExploreMore className="border-t-[1px] border-dark-100" />
          </div>
        </SearchSuggestions>
      </MobileDrawer>
    </div>
  );
};

export default MobileSearch;
