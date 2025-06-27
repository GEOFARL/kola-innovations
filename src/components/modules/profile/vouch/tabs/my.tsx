'use client';

import { VOUCH_REQUESTS } from '@/lib/constants/profile/vouch/requests';
import VouchCard from './card';
import VouchCardLayout from './card-layout';

const MyTab: React.FC = () => {
  return (
    <VouchCardLayout>
      {VOUCH_REQUESTS.map((v) => (
        <VouchCard key={v.name} data={v} />
      ))}
    </VouchCardLayout>
  );
};

export default MyTab;
