'use client';

import { sampleProfessionals } from '@/lib/constants/professionals/sample-professionals';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { Professional } from '@/lib/types/talents/professional';
import PersonGrid from '../person-grid';
import ProfessionalsSearch from '../search/professionals-search';

const SavedTalentsTab: React.FC = () => {
  const people: (Professional & { href: string, isSaved?: boolean })[] = [
    ...sampleProfessionals,
    ...sampleProfessionals.map((v) => ({
      ...v,
      id: v.id + sampleProfessionals.length,
    })),
  ].map((talent) => ({
    ...talent,
    href: APP_ROUTES.TALENT_DETAILS(talent.id),
    isSaved: true,
  }));

  return (
    <div>
      <ProfessionalsSearch />
      <PersonGrid people={people} />
    </div>
  );
};

export default SavedTalentsTab;
