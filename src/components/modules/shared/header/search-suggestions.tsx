'use client';

import TimeIcon from '@/assets/icons/header/time.svg';
import haydenAvatar from '@/assets/images/people/hayden.jpg';
import mariuzAvatar from '@/assets/images/people/mariuz.jpg';
import ramonAvatar from '@/assets/images/people/ramon.jpg';
import Button from '@/components/ui/button/button';
import { cn } from '@/lib/cn';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

const recentPeople = [
  { name: 'Ramon Alberto V.', avatar: ramonAvatar },
  { name: 'Mariusz O.', avatar: mariuzAvatar },
  { name: 'Hayden Ross', avatar: haydenAvatar },
];

const recentQueries = ['UI UX Designer', 'Project Manager', 'Logo Designer'];

type Props = {
  onClear?: () => void;
  onQueryClick?: (query: string) => void;
} & HTMLAttributes<HTMLDivElement>;

const SearchSuggestions: React.FC<Props> = ({
  onClear,
  onQueryClick,
  className,
  children,
}) => (
  <div
    className={cn(
      'absolute top-[140%] -left-[5%] w-[110%] rounded-2xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-white z-50 border border-dark-100',
      className,
    )}
  >
    {children || (
      <>
        <ArrowUp />
        <ItemsContainer>
          <Header onClear={onClear} />
          <RecentPeople />
        </ItemsContainer>

        <ItemsContainer className="space-y-4">
          <RecentQueries onQueryClick={onQueryClick} />
        </ItemsContainer>

        <ExploreMore />
      </>
    )}
  </div>
);

const ArrowUp: React.FC = () => (
  <div className="absolute -top-[6px] left-[75%] -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-dark-100 -z-1" />
);

const ItemsContainer: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => (
  <div className={cn('p-4 border-b-[1px] border-dark-100', className)}>
    {children}
  </div>
);

const Header: React.FC<{ onClear?: () => void }> = ({ onClear }) => {
  const t = useTranslations('common.search');
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="body-2 text-dark-900">{t('recent')}</h3>
      <Button
        onClick={onClear}
        type="button"
        variant="text-link"
        size="xs"
        color="black"
        className="font-[500]! text-xs!"
      >
        {t('clear')}
      </Button>
    </div>
  );
};

const RecentPeople: React.FC<
  HTMLAttributes<HTMLDivElement> & { itemClassName?: string }
> = ({ className, itemClassName }) => {
  return (
    <div className={cn('flex gap-4', className)}>
      {recentPeople.map((person) => (
        <div
          key={person.name}
          className={cn('flex flex-col items-center gap-2', itemClassName)}
        >
          <Image
            src={person.avatar}
            alt={person.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-dark-900 text-center max-w-20 small-1-md">
            {person.name}
          </span>
        </div>
      ))}
    </div>
  );
};

const RecentQueries: React.FC<{
  onQueryClick?: (query: string) => void;
  className?: string;
}> = ({ onQueryClick, className }) => (
  <>
    {recentQueries.map((q) => (
      <div
        key={q}
        className={cn(
          'flex items-center small-1-md text-dark-600 gap-2 cursor-pointer hover:text-dark-900 transition',
          className,
        )}
        onClick={() => onQueryClick?.(q)}
      >
        <TimeIcon />
        {q}
      </div>
    ))}
  </>
);

const ExploreMore: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const t = useTranslations('common.search');
  return (
    <div className={cn('p-4 py-3 text-center flex justify-center', className)}>
      <Button variant="text-link" size="xs" className="gap-2" type="button">
        {t('exploreMore')} <ArrowUpRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

type SearchSuggestionsType = React.FC<Props> & {
  ArrowUp: typeof ArrowUp;
  ItemsContainer: typeof ItemsContainer;
  Header: typeof Header;
  RecentPeople: typeof RecentPeople;
  RecentQueries: typeof RecentQueries;
  ExploreMore: typeof ExploreMore;
};

const SearchSuggestionsComponent = SearchSuggestions as SearchSuggestionsType;

SearchSuggestionsComponent.ArrowUp = ArrowUp;
SearchSuggestionsComponent.ItemsContainer = ItemsContainer;
SearchSuggestionsComponent.Header = Header;
SearchSuggestionsComponent.RecentPeople = RecentPeople;
SearchSuggestionsComponent.RecentQueries = RecentQueries;
SearchSuggestionsComponent.ExploreMore = ExploreMore;

export default SearchSuggestionsComponent;
