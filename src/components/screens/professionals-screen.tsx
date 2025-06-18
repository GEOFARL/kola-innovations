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
      <Tabs tabs={tabs} value={selected} onValueChange={setSelected} />
      <div className="mt-6">
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
