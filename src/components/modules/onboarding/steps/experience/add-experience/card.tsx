import BlueFolder from '@/assets/icons/onboarding/blue-folder.svg';
import DeleteIcon from '@/assets/icons/onboarding/delete.svg';
import EditIcon from '@/assets/icons/onboarding/edit.svg';
import Button from '@/components/ui/button/button';
import { format } from 'date-fns';
import { ExperienceItem } from '@/lib/types/onboarding/experience';

type Props = {
  experience: ExperienceItem;
  onEdit: () => void;
  onDelete: () => void;
};

const formatMonthYear = (month: string, year: string) => {
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return format(date, 'MMM yyyy');
};

const ExperienceCard: React.FC<Props> = ({ experience, onEdit, onDelete }) => {
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
    <div className="relative border-[1px] border-dark-200 rounded-[8px] p-4 w-full max-w-[288px] shadow-sm min-h-full self-stretch flex flex-col gap-6">
      <div className="flex justify-between">
        <BlueFolder />

        <div className="flex gap-3 items-center">
          <Button
            size="sm"
            className="hidden lg:block"
            iconOnly
            onClick={onEdit}
            iconCircle
            aria-label="Edit"
          >
            <EditIcon />
          </Button>

          <Button
            size="sm"
            className="hidden lg:block"
            iconOnly
            iconCircle
            onClick={onDelete}
            aria-label="Delete"
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[16px] leading-[140%] text-dark-900">
          {experience.jobTitle}
        </p>
        <p className="text-[16px] leading-[150%] font-[500] text-dark-600">
          {experience.companyName} · {start} - {end}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
