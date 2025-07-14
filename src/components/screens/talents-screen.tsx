'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import AllTalentsTab from '../modules/talents/tabs/all-talents';
import SavedTalentsTab from '../modules/talents/tabs/saved-talents';
import Tabs from '../ui/tabs';

const TalentsScreen: React.FC = () => {
  const t = useTranslations('talents.tabs');
  const [selected, setSelected] = useState('all');

  const tabs = [
    { value: 'all', label: t('all') },
    { value: 'saved', label: `${t('saved')} · 6` },
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
        {selected === 'all' ? <AllTalentsTab /> : <SavedTalentsTab />}
      </div>
    </div>
  );
};

export default TalentsScreen;
