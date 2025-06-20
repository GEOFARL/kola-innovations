'use client';

import { useRouter } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import ShareIcon from '@/assets/icons/talents/share.svg';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import Button from '@/components/ui/button/button';
import ProfessionalActionsDropdown from './professional-actions-dropdown';

type Props = {
  name: string;
  avatar: StaticImageData;
};

const ProfessionalHeader: React.FC<Props> = ({ name, avatar }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-4 cursor-pointer"
      >
        <ArrowLeftIcon />
        <div className="flex items-center gap-2">
          <div className="w-[32px] h-[32px] relative">
            <Image
              src={avatar}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h6 className="h6">{name}</h6>
        </div>
      </button>

      <div className="flex gap-2">
        <Button
          size="sm"
          iconOnly
          iconCircle
          className="bg-white border border-dark-200"
        >
          <ShareIcon />
        </Button>
        <ProfessionalActionsDropdown />
      </div>
    </div>
  );
};

export default ProfessionalHeader;
