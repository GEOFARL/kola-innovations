'use client';

import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { ExperienceItem } from '@/lib/types/onboarding/experience';
import AddExperienceButton from './button';
import ExperienceCard from './card';
import AddExperienceDialog from './dialog';

const Experiences: React.FC = () => {
  const t = useTranslations('onboarding.experience.buttons');
  const { data, setStepData } = useOnboardingStore();
  const experiences = data.experience?.experiences || [];
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddExperience = (exp: ExperienceItem) => {
    const updated =
      editIndex !== null
        ? experiences.map((e, i) => (i === editIndex ? exp : e))
        : [...experiences, exp];

    setStepData('experience', {
      ...(data.experience || {}),
      experiences: updated,
    });
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    const updated = experiences.filter((_, i) => i !== index);
    setStepData('experience', {
      ...(data.experience || {}),
      experiences: updated,
    });
  };

  return (
    <div className="flex flex-wrap items-start gap-4 h-auto">
      <AddExperienceButton label={t('add')} onClick={() => setOpen(true)} />

      {experiences.map((exp, idx) => (
        <ExperienceCard
          key={idx}
          experience={exp}
          editLabel={t('edit')}
          deleteLabel={t('delete')}
          onEdit={() => {
            setEditIndex(idx);
            setOpen(true);
          }}
          onDelete={() => handleDelete(idx)}
        />
      ))}

      {open && (
        <AddExperienceDialog
          open={open}
          onClose={() => {
            setOpen(false);
            setEditIndex(null);
          }}
          onSubmit={handleAddExperience}
          defaultValues={
            editIndex !== null ? experiences[editIndex] : undefined
          }
        />
      )}
    </div>
  );
};

export default Experiences;
