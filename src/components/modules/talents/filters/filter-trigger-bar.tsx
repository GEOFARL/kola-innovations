import ArrowDownIcon from '@/assets/icons/arrow-down.svg';
import { cn } from '@/lib/cn';
import { useTalentFiltersStore } from '@/lib/stores/talents/filters';
import { HTMLAttributes } from 'react';
import FiltersModal from './filters-modal';
import { useTranslations } from 'next-intl';

type Props = HTMLAttributes<HTMLDivElement>;

const FilterTriggerBar: React.FC<Props> = ({ className }) => {
  const t = useTranslations('talents');
  const { setActiveTab } = useTalentFiltersStore();

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        className="flex cursor-pointer hover:bg-dark-100 items-center gap-2 small-1-md text-dark-700 py-[5px] px-[12px] rounded-full border-[1px] border-dark-300"
        onClick={() => setActiveTab('skills')}
      >
        {t('filters.skills')} <ArrowDownIcon />
      </button>
      <button
        className="flex cursor-pointer hover:bg-dark-100 items-center gap-2 small-1-md text-dark-700 py-[5px] px-[12px] rounded-full border-[1px] border-dark-300"
        onClick={() => setActiveTab('location')}
      >
        {t('details.location')} <ArrowDownIcon />
      </button>
      <FiltersModal />
    </div>
  );
};

export default FilterTriggerBar;
