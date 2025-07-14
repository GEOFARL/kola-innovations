'use client';

import FilterIcon from '@/assets/icons/filter.svg';
import { cn } from '@/lib/cn';
import { useSidebar } from '@/lib/stores/sidebar';
import { HTMLAttributes } from 'react';
import TalentFilters from '../filters';

const MobileFilters: React.FC = () => {
  const { open } = useSidebar();

  return (
    <MobileButton onClick={() => open('filters')}>
      <FilterIcon />
      <div className="flex items-center justify-center rounded-full bg-white w-5 h-5 text-[10px] leading-[150%] font-[600]">
        4
      </div>
    </MobileButton>
  );
};

export const MobileButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'lg:hidden cursor-pointer px-3 py-2 bg-dark-200 rounded-[34px] flex items-center gap-1',
        className,
      )}
    >
      {children}
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
