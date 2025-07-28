'use client';

import CalendarIcon from '@/assets/icons/calendar.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import Card from '@/components/modules/shared/onboarding/card';
import { MentorshipSession } from '@/lib/schemas/onboarding/mentorship.schema';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
  const t = useTranslations('common.industries.values');
  const tMentorship = useTranslations('onboarding.mentorship.session');
  return (
    <Card
      editLabel={editLabel}
      deleteLabel={deleteLabel}
      onEdit={onEdit}
      onDelete={onDelete}
    >
      <div className="space-y-4">
        <div className="flex gap-3 items-center">
          {session.image && (
            <Image
              src={session.image as string}
              alt={session.title}
              className="w-12 h-12 rounded-full object-cover"
              height={48}
              width={48}
            />
          )}
          <h3 className="h6">{session.title}</h3>
        </div>
        <p className="body-2-rg text-dark-700">{session.brief}</p>
        <div className="flex items-center gap-6 small-1 text-dark-700">
          <div className="flex min-w-[244px] items-center gap-2">
            <CalendarIcon className="-mt-[1px]" /> {session.date}
          </div>
          <div className="flex min-w-[244px] items-center gap-2">
            <ClockIcon className="-mt-[1px]" /> {session.time}
          </div>
        </div>
        {session.topics.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-3">
            <p className="small-1 text-dark-900">
              {tMentorship('meetingTopic')}
            </p>
            <div className="flex items-center gap-2">
              {session.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="py-1 px-3 bg-dark-100 rounded-full small-2-md"
                >
                  {t(topic)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SessionCard;
