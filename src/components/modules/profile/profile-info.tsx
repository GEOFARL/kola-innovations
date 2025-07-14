'use client';

import PencilIcon from '@/assets/icons/pencil.svg';
import LocationIcon from '@/assets/icons/talents/location.svg';
import { DEFAULT_USER } from '@/lib/constants/profile';
import Image from 'next/image';

const ProfileInfo: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="lg:p-6 flex flex-row lg:flex-col lg:items-start items-center gap-[18px] lg:gap-0">
        <div className="relative w-20 lg:w-30">
          <Image
            src={DEFAULT_USER.avatarUrl}
            alt="User Avatar"
            className="w-full h-20 lg:h-30 rounded-full object-cover"
          />
          <div className="absolute flex items-center justify-center bottom-0 right-0 w-[34px] h-[34px] border-[3px] border-white rounded-full bg-dark-100">
            <PencilIcon />
          </div>
        </div>

        <div className="lg:mt-6">
          <h6 className="text-dark-900 h6 font-semibold! sm:font-semibold! text-[18px]! sm:text-[20px]!">
            {DEFAULT_USER.fullName}
          </h6>
          <p className="mt-1 small-1-rg text-dark-700">{DEFAULT_USER.job}</p>
          <div className="hidden lg:flex mt-3 items-center gap-2">
            <LocationIcon />
            <p className="small-1-md text-dark-600">{DEFAULT_USER.location}</p>
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-4 flex items-center gap-2">
        <LocationIcon />
        <p className="small-1-md text-dark-600">{DEFAULT_USER.location}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
