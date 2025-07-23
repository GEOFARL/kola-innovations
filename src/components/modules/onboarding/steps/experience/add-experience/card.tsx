import { ExperienceItem } from '@/lib/types/onboarding/experience';
import { Pencil, Trash } from 'lucide-react';

type Props = {
  experience: ExperienceItem;
  onEdit: () => void;
  onDelete: () => void;
};

const ExperienceCard: React.FC<Props> = ({ experience, onEdit, onDelete }) => {
  return (
    <div className="relative border border-dark-200 rounded-[8px] p-4 w-[250px] shadow-sm">
      <div className="absolute top-2 right-2 flex gap-2">
        <button onClick={onEdit} className="p-1 hover:bg-dark-100 rounded-full">
          <Pencil size={16} />
        </button>
        <button
          onClick={onDelete}
          className="p-1 hover:bg-dark-100 rounded-full"
        >
          <Trash size={16} />
        </button>
      </div>
      <div>
        <p className="font-semibold">{experience.jobTitle}</p>
        <p className="text-sm text-dark-600">
          {experience.companyName} ·{' '}
          {experience.currentlyWorking
            ? `${experience.startDate.month} ${experience.startDate.year} - Present`
            : `${experience.startDate.month} ${experience.startDate.year} - ${experience.endDate?.month} ${experience.endDate?.year}`}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
