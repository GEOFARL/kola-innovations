'use client';

import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ConnectIcon from '@/assets/icons/connect.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import ShareIcon from '@/assets/icons/talents/share.svg';
import Button from '@/components/ui/button/button';
import { Plus } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import MobileAnalytics from '../search/mobile-analytics';
import ProfessionalActionsDropdown from './professional-actions-dropdown';

type Props = {
  name: string;
  avatar: StaticImageData;
  withConnect?: boolean;
};

const ProfessionalHeader: React.FC<Props> = ({ name, avatar, withConnect }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between items-center py-[10px] px-3 lg:px-0 border-b-[1px] lg:border-b-0 border-dark-200 lg:py-0 w-[calc(100%+24px)] lg:w-auto -ml-3 lg:ml-0">
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
            <h6 className="h6 font-semibold!">{name}</h6>
          </div>
        </button>

        <div className="flex gap-2">
          {withConnect && (
            <>
              <Button size="sm" color="black" className="hidden lg:flex gap-2">
                <Plus className="w-4 h-4" />
                Connect
              </Button>
              <button className="cursor-pointer bg-dark-900 hover:bg-dark-900/80 lg:hidden px-2 py-[7px] border-[1px] border-dark-200 rounded-[34px] flex items-center gap-1 [&_rect]:fill-dark-white">
                <ConnectIcon className="text-dark-900" />
                <PlusIcon className="text-dark-white" />
              </button>
            </>
          )}
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

      <MobileAnalytics />
    </div>
  );
};

export default ProfessionalHeader;
