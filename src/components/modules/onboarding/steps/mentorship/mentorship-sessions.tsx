'use client';

import AddButton from '@/components/modules/shared/onboarding/add-button';
import { MentorshipSession } from '@/lib/schemas/onboarding/mentorship.schema';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { use, useState } from 'react';
import SessionCard from './session-card';
import SessionDialog from './session-dialog';
import { useTranslations } from 'next-intl';

const MentorshipSessions: React.FC = () => {
  const { data, setStepData } = useOnboardingStore();
  const sessions = data.mentorship?.sessions || [];
  const isMentor = data.mentorship?.isMentor ?? false;
  const t = useTranslations('onboarding.mentorship.session');

  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSave = (session: MentorshipSession) => {
    const updatedSessions =
      editIndex !== null
        ? sessions.map((s, i) => (i === editIndex ? session : s))
        : [...sessions, session];

    setStepData('mentorship', {
      isMentor,
      sessions: updatedSessions,
    });
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    const updatedSessions = sessions.filter((_, i) => i !== index);
    setStepData('mentorship', {
      isMentor,
      sessions: updatedSessions,
    });
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <AddButton label={t('buttons.save')} onClick={() => setOpen(true)} />

      {sessions.map((session, idx) => (
        <SessionCard
          key={idx}
          session={session}
          editLabel="Edit"
          deleteLabel="Delete"
          onEdit={() => {
            setEditIndex(idx);
            setOpen(true);
          }}
          onDelete={() => handleDelete(idx)}
        />
      ))}

      {open && (
        <SessionDialog
          open={open}
          onClose={() => {
            setOpen(false);
            setEditIndex(null);
          }}
          onSubmit={handleSave}
          defaultValues={editIndex !== null ? sessions[editIndex] : undefined}
        />
      )}
    </div>
  );
};

export default MentorshipSessions;
