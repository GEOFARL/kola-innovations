'use client ';

import { VOUCH_REQUESTS } from '@/lib/constants/profile/vouch/requests';
import VouchCard from './card';
import VouchCardLayout from './card-layout';

const ReceivedTab: React.FC = () => {
  return (
    <VouchCardLayout>
      {VOUCH_REQUESTS.map((v) => (
        <VouchCard key={v.name} invite data={v} />
      ))}
    </VouchCardLayout>
  );
};

export default ReceivedTab;
