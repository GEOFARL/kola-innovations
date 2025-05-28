'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button/button';
import SearchFieldGroup from './search-field-group';
import ToggleTabs from './toggle-tabs';

const HeroSearchBox: React.FC = () => {
  const t = useTranslations('landing.hero');

  return (
    <div className="rounded-[16px] border-[1px] border-[#FAAAA4] bg-primary-100 w-full">
      <ToggleTabs
        tabs={[
          { label: t('tabs.jobs'), active: true },
          { label: t('tabs.professionals') },
        ]}
      />
      <div className="bg-dark-white rounded-[16px] border-[1px] -ml-[1px] -mr-[1px] -mb-[1px] border-primary-300 p-4 flex items-center justify-between gap-6">
        <SearchFieldGroup />
        <Button size="lg">{t('explore')}</Button>
      </div>
    </div>
  );
};

export default HeroSearchBox;
