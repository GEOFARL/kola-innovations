'use client';

import { sampleProfessionals } from '@/lib/constants/professionals/sample-professionals';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { Professional } from '@/lib/types/talents/professional';
import PersonGrid from '../person-grid';
import ProfessionalsSearch from '../search/professionals-search';
import FilterTriggerBar from '../filters/filter-trigger-bar';

const SavedTalentsTab: React.FC = () => {
  const people: (Professional & { href: string; isSaved?: boolean })[] = [
    ...sampleProfessionals,
    ...sampleProfessionals.map((v) => ({
      ...v,
      id: (+v.id + sampleProfessionals.length).toString(),
    })),
  ].map((talent) => ({
    ...talent,
    href: APP_ROUTES.TALENT_DETAILS(talent.id),
    isSaved: true,
  }));

  return (
    <div>
      <ProfessionalsSearch buttonType="more" />
      <FilterTriggerBar className="mt-4 lg:mt-6" />
      <PersonGrid className="mt-4" people={people} />
    </div>
  );
};

export default SavedTalentsTab;
