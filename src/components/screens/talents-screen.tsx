'use client';

import { useState } from 'react';
import OpportunitiesTab from '../modules/talents/tabs/opportunities';
import ProfessionalsTab from '../modules/talents/tabs/professionals';
import Tabs from '../ui/tabs';

const tabs = [
  { value: 'professionals', label: 'Professionals' },
  { value: 'opportunities', label: 'Opportunities' },
];

const TalentsScreen: React.FC = () => {
  const [selected, setSelected] = useState('professionals');

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

export default TalentsScreen;
