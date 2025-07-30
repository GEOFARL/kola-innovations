'use client';

import Card from '@/components/ui/card';
import Button from '@/components/ui/button/button';
import PencilIcon from '@/assets/icons/pencil.svg';

type ReviewCardProps = {
  title: string;
  onEdit?: () => void;
  children: React.ReactNode;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ title, onEdit, children }) => {
  return (
    <Card className="space-y-6">
      <div className="flex justify-between items-start border-b border-dark-200">
        <h3 className="body-1">{title}</h3>
        {onEdit && (
          <Button
            iconOnly
            iconCircle
            variant="secondary"
            size="sm"
            aria-label="Edit"
            onClick={onEdit}
          >
            <PencilIcon />
          </Button>
        )}
      </div>
      {children}
    </Card>
  );
};

export default ReviewCard;
