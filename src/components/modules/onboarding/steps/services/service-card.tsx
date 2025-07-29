'use client';

import Card from '@/components/modules/shared/onboarding/card';
import { ServiceData } from '@/lib/types/onboarding/services';
import Image from 'next/image';

type Props = {
  service: Omit<ServiceData, 'isActive'>;
  editLabel: string;
  deleteLabel: string;
  onEdit: () => void;
  onDelete: () => void;
};

const ServiceCard: React.FC<Props> = ({
  service,
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
      <div className="space-y-4">
        <div className="flex gap-3 items-center">
          {service.image && (
            <Image
              src={service.image as string}
              alt={service.service}
              className="w-12 h-12 rounded-full object-cover"
              height={48}
              width={48}
            />
          )}
          <h3 className="h6">{service.service}</h3>
        </div>
        <p className="body-2-rg text-dark-700">{service.brief}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;
