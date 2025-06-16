'use client';

import { sampleProfessionals } from '@/lib/constants/professionals/sample-professionals';
import AllProfessionals from '../all-professionals';
import MostVouchedProfessionals from '../most-vouched-professionals';
import ProfessionalsSearch from '../search/professionals-search';

const ProfessionalsTab: React.FC = () => {
  return (
    <div>
      <ProfessionalsSearch />
      <MostVouchedProfessionals professionals={sampleProfessionals} />
      <AllProfessionals professionals={sampleProfessionals} />
    </div>
  );
};

export default ProfessionalsTab;
