import DeleteIcon from '@/assets/icons/onboarding/delete.svg';
import EditIcon from '@/assets/icons/onboarding/edit.svg';
import Button from '@/components/ui/button/button';
import { cn } from '@/lib/cn';
import { PropsWithChildren } from 'react';

type Props = {
  editLabel: string;
  deleteLabel: string;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
};
const Card: React.FC<PropsWithChildren<Props>> = ({
  onEdit,
  onDelete,
  editLabel,
  deleteLabel,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'relative border-[1px] border-dark-200 rounded-[8px] p-4 w-full shadow-sm min-h-full self-stretch flex flex-col gap-6',
        className,
      )}
    >
      <div className="absolute top-4 right-4 flex gap-3 items-center">
        {onEdit && (
          <Button
            size="sm"
            className="hidden lg:block"
            iconOnly
            onClick={onEdit}
            iconCircle
            aria-label={editLabel}
          >
            <EditIcon />
          </Button>
        )}
        {onDelete && (
          <Button
            size="sm"
            className="hidden lg:block"
            iconOnly
            iconCircle
            onClick={onDelete}
            aria-label={deleteLabel}
          >
            <DeleteIcon />
          </Button>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
