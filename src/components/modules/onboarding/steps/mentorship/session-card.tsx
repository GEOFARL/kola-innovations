'use client';

import CalendarIcon from '@/assets/icons/calendar.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import Card from '@/components/modules/shared/onboarding/card';
import { MentorshipSession } from '@/lib/schemas/onboarding/mentorship.schema';

type Props = {
  session: MentorshipSession;
  editLabel: string;
  deleteLabel: string;
  onEdit: () => void;
  onDelete: () => void;
};

const SessionCard: React.FC<Props> = ({
  session,
  editLabel,
  deleteLabel,
  onEdit,
  onDelete,
}) => {
  return (
    <Card
      editLabel={editLabel}
      deleteLabel={deleteLabel}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="flex gap-3 items-start">
        {session.image && (
          <img
            src={session.image}
            alt={session.title}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="font-semibold">{session.title}</h3>
          <p className="text-sm text-dark-600">{session.brief}</p>
          <div className="flex items-center gap-4 mt-2 text-sm text-dark-700">
            <div className="flex items-center gap-1">
              <CalendarIcon /> {session.date}
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon /> {session.time}
            </div>
          </div>
          {session.topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {session.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="bg-dark-100 text-dark-700 text-xs px-3 py-1 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default SessionCard;
