'use client';

import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import { useRouter } from 'next/navigation';

type Props = {
  title: React.ReactNode;
  rightContent?: React.ReactNode;
  moreButton?: React.ReactNode;
};

const SubHeader: React.FC<Props> = ({ title, rightContent, moreButton }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between items-center py-[10px] px-3 lg:px-0 border-b-[1px] lg:border-b-0 border-dark-200 lg:py-0 w-[calc(100%+24px)] lg:w-auto -ml-3 lg:ml-0">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-4 cursor-pointer"
        >
          <ArrowLeftIcon />
          {title}
        </button>

        {rightContent}
      </div>

      {moreButton}
    </div>
  );
};

export default SubHeader;
