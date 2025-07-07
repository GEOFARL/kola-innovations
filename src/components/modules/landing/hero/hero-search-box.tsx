'use client';

import Button from '@/components/ui/button/button';
import { useTranslations } from 'next-intl';
import { HTMLAttributes } from 'react';
import SearchFieldGroup from './search-field-group';
import ToggleTabs from './toggle-tabs';
import { cn } from '@/lib/cn';

type Props = HTMLAttributes<HTMLDivElement>;

const HeroSearchBox: React.FC<Props> = ({ className }) => {
  const t = useTranslations('landing.hero');

  return (
    <div
      className={cn(
        'rounded-[16px] border-[1px] border-[#FAAAA4] bg-primary-100 w-full p-2 sm:p-0 space-y-[12px] sm:space-y-0',
        className,
      )}
    >
      <ToggleTabs
        tabs={[
          { label: t('tabs.jobs'), active: true },
          { label: t('tabs.professionals') },
        ]}
      />
      <div className="bg-dark-white rounded-[16px] border-[1px] -ml-[1px] -mr-[1px] -mb-[1px] border-primary-300 py-2 px-3 sm:p-4 flex items-center justify-between gap-6">
        <SearchFieldGroup />
        <Button className="hidden sm:block" size="lg">
          {t('explore')}
        </Button>
      </div>
      <Button className="flex mx-auto mt-3 min-w-[140px] sm:hidden" size="sm">
        {t('explore')}
      </Button>
    </div>
  );
};

export default HeroSearchBox;
