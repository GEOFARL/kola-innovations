import BlueFolder from '@/assets/icons/onboarding/blue-folder.svg';
import Card from '@/components/modules/shared/onboarding/card';
import { ExperienceItem } from '@/lib/types/onboarding/experience';
import { format } from 'date-fns';

type Props = {
  experience: ExperienceItem;
  editLabel: string;
  deleteLabel: string;
  onEdit: () => void;
  onDelete: () => void;
};
const formatMonthYear = (month: string, year: string) => {
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return format(date, 'MMM yyyy');
};

const ExperienceCard: React.FC<Props> = ({
  experience,
  onEdit,
  onDelete,
  editLabel,
  deleteLabel,
}) => {
  const start = formatMonthYear(
    experience.startDate.month,
    experience.startDate.year,
  );
  const end = experience.currentlyWorking
    ? 'Present'
    : experience.endDate
    ? formatMonthYear(experience.endDate.month, experience.endDate.year)
    : '';

  return (
    <Card
      editLabel={editLabel}
      deleteLabel={deleteLabel}
      onEdit={onEdit}
      onDelete={onDelete}
      className="max-w-[288px]"
    >
      <BlueFolder />
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[16px] leading-[140%] text-dark-900">
          {experience.jobTitle}
        </p>
        <p className="text-[16px] leading-[150%] font-[500] text-dark-600">
          {experience.companyName} · {start} - {end}
        </p>
      </div>
    </Card>
  );
};

export default ExperienceCard;
