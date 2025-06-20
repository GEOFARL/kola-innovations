'use client';

import { sampleProfessionals } from '@/lib/constants/professionals/sample-professionals';
import ProfessionalHeader from './professional-header';
import ProfessionalMain from './professional-main';

type Props = {
  id: string;
};

const TalentDetails: React.FC<Props> = ({ id }) => {
  const pro = sampleProfessionals.find((p) => p.id === id);

  if (!id || typeof id !== 'string') {
    return <p className="text-red-600">Invalid professional ID</p>;
  }

  if (!pro) {
    return <p className="text-red-600">Professional not found</p>;
  }

  return (
    <div className="flex flex-col h-full gap-6">
      <ProfessionalHeader name={pro.name} avatar={pro.avatar} />
      <ProfessionalMain
        name={pro.name}
        title={pro.title}
        avatar={pro.avatar}
        bio={pro.bio ?? ''}
        tags={pro.tags ?? []}
        languages={pro.languages ?? []}
      />
    </div>
  );
};

export default TalentDetails;
