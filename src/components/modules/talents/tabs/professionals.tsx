'use client';

import MostVouchedProfessionals from '../most-vouched-professionals';
import ProfessionalsSearch from '../search/professionals-search';
import ramonImage from '@/assets/images/people/ramon.jpg';
import mariuszImage from '@/assets/images/people/mariuz.jpg';
import taylorImage from '@/assets/images/people/taylor.jpg';
import { Professional } from '@/lib/types/talents/professional';

const sampleProfessionals: Professional[] = [
  {
    name: 'Ramon Alberto V.',
    title: 'Audio Engineer',
    avatar: ramonImage,
    rating: 4.8,
    votes: 32324,
    endorsements: 124,
  },
  {
    name: 'Mariusz O.',
    title: 'Musician',
    avatar: mariuszImage,
    rating: 4.8,
    votes: 32324,
    endorsements: 124,
  },
  {
    name: 'Taylor Jordan',
    title: 'Audio Engineer',
    avatar: taylorImage,
    rating: 4.8,
    votes: 32324,
    endorsements: 124,
  },
];

const ProfessionalsTab: React.FC = () => {
  return (
    <div>
      <ProfessionalsSearch />
      <MostVouchedProfessionals professionals={sampleProfessionals} />
    </div>
  );
};

export default ProfessionalsTab;
