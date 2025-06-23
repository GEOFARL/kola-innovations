'use client';

import { cn } from '@/lib/cn';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement>;

const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'bg-dark-white p-6 rounded-[16px] border-[1px] border-[#EDEDED]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
