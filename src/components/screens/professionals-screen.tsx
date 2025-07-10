'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import OpportunitiesTab from '../modules/talents/tabs/opportunities';
import ProfessionalsTab from '../modules/talents/tabs/professionals';
import Tabs from '../ui/tabs';

const ProfessionalsScreen: React.FC = () => {
  const t = useTranslations('talents.tabs');
  const [selected, setSelected] = useState('professionals');

  const tabs = [
    { value: 'professionals', label: t('professionals') },
    { value: 'opportunities', label: t('opportunities') },
  ];

  return (
    <div>
      <Tabs
        itemClassName="flex-1 lg:flex-auto py-2 text-[14px]! sm:text-[14px]! leading-[140%] font-semibold lg:text-[20px]! lg:leading-[140%] tracking-[-0.3px]"
        className="gap-2 lg:gap-4"
        tabs={tabs}
        value={selected}
        onValueChange={setSelected}
      />
      <div className="mt-[10px] lg:mt-6">
        {selected === 'professionals' ? (
          <ProfessionalsTab />
        ) : (
          <OpportunitiesTab />
        )}
      </div>
    </div>
  );
};

export default ProfessionalsScreen;
