'use client';

import { useTranslations } from 'next-intl';
import TimeIcon from '@/assets/icons/header/time.svg';
import haydenAvatar from '@/assets/images/people/hayden.jpg';
import mariuzAvatar from '@/assets/images/people/mariuz.jpg';
import ramonAvatar from '@/assets/images/people/ramon.jpg';
import Button from '@/components/ui/button/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const recentPeople = [
  { name: 'Ramon Alberto V.', avatar: ramonAvatar },
  { name: 'Mariusz O.', avatar: mariuzAvatar },
  { name: 'Hayden Ross', avatar: haydenAvatar },
];

const recentQueries = ['UI UX Designer', 'Project Manager', 'Logo Designer'];

type Props = {
  visible: boolean;
  onClear?: () => void;
  onQueryClick?: (query: string) => void;
};

const SearchSuggestions: React.FC<Props> = ({
  visible,
  onClear,
  onQueryClick,
}) => {
  const t = useTranslations('common.search');

  if (!visible) return null;

  return (
    <div className="absolute top-[140%] -left-[5%] w-[110%] rounded-2xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] bg-white z-50 border border-dark-100 ">
      <div className="absolute -top-[6px] left-[75%] -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-dark-100 -z-1" />

      <div className="p-4 border-b-[1px] border-dark-100">
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
        <div className="flex gap-4">
          {recentPeople.map((person) => (
            <div key={person.name} className="flex flex-col items-center gap-2">
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
      </div>

      <div className="p-4 border-b-[1px] border-dark-100 space-y-4">
        {recentQueries.map((q) => (
          <div
            key={q}
            className="flex items-center small-1-md text-dark-600 gap-2 cursor-pointer hover:text-dark-900 transition"
            onClick={() => onQueryClick?.(q)}
          >
            <TimeIcon />
            {q}
          </div>
        ))}
      </div>

      <div className="p-4 py-3 text-center flex justify-center">
        <Button variant="text-link" size="xs" className="gap-2" type="button">
          {t('exploreMore')} <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SearchSuggestions;
