'use client';

import RightArrow from '@/assets/icons/right-arrow-circle.svg';
import { MobileButton } from './mobile-filters';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLButtonElement>;

const MoreButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="lg:hidden flex justify-end py-[10px] px-3 lg:px-0 lg:py-0 w-[calc(100%+24px)] lg:w-auto -ml-3 lg:ml-0 border-b-[1px] border-dark-200">
      <MobileButton
        onClick={onClick}
        className="py-[6px] px-3 text-[13px] leading-[150%] font-[500]"
      >
        More <RightArrow />
      </MobileButton>
    </div>
  );
};

export default MoreButton;
