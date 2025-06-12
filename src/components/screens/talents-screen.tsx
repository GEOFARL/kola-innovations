'use client';

import { useState } from 'react';
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
          <div>Professionals content...</div>
        ) : (
          <div>Opportunities content...</div>
        )}
      </div>
    </div>
  );
};

export default TalentsScreen;
