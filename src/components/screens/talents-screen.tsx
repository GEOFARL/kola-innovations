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
      <Tabs tabs={tabs} value={selected} onValueChange={setSelected} />
      <div className="mt-6">
        {selected === 'all' ? <AllTalentsTab /> : <SavedTalentsTab />}
      </div>
    </div>
  );
};

export default TalentsScreen;
