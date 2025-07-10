'use client';

import FilterIcon from '@/assets/icons/filter.svg';
import { useProfessionalsFilters } from '@/lib/stores/professionals/filters';
import TalentFilters from '../filters';

const MobileFilters: React.FC = () => {
  const { open } = useProfessionalsFilters();

  return (
    <button
      onClick={open}
      className="lg:hidden cursor-pointer px-3 py-2 bg-dark-200 rounded-[34px] flex items-center gap-1"
    >
      <FilterIcon />
      <div className="flex items-center justify-center rounded-full bg-white w-5 h-5 text-[10px] leading-[150%] font-[600]">
        4
      </div>
    </button>
  );
};

const Content: React.FC = () => {
  return <TalentFilters />;
};

const MobileFiltersComponent = MobileFilters as React.FC & {
  Content: React.FC;
};

MobileFiltersComponent.Content = Content;

export default MobileFiltersComponent;
