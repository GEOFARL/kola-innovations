'use client';

import { X, Plus } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = {
  label: string;
  onClick?: () => void;
  variant?: 'remove' | 'add';
};

const TagChip: React.FC<Props> = ({
  label,
  onClick: onRemove,
  variant = 'remove',
}) => {
  return (
    <span
      className={cn(
        'bg-dark-100 text-dark-800 rounded-full px-2 py-[2px] text-xs flex items-center gap-1 shrink-0 cursor-pointer',
      )}
      onClick={(e) => {
        e.stopPropagation();
        onRemove?.();
      }}
    >
      {label}
      {variant === 'add' ? (
        <Plus className="w-3 h-3 text-dark-500" />
      ) : (
        <X className="w-3 h-3 text-dark-500" />
      )}
    </span>
  );
};

export default TagChip;
