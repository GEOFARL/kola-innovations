'use client';

import { X, Plus } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = {
  label: string;
  onClick?: () => void;
  variant?: 'remove' | 'add' | 'static';
  className?: string;
};

const TagChip: React.FC<Props> = ({
  label,
  onClick,
  className,
  variant = 'remove',
}) => {
  const showIcon = variant !== 'static';

  return (
    <span
      className={cn(
        'bg-dark-100 text-dark-800 rounded-full px-2 py-[2px] text-xs flex items-center gap-1 shrink-0',
        variant !== 'static' && 'cursor-pointer',
        className,
      )}
      onClick={(e) => {
        if (!showIcon) return;
        e.stopPropagation();
        onClick?.();
      }}
    >
      {label}
      {showIcon &&
        (variant === 'add' ? (
          <Plus className="w-3 h-3 text-dark-500" />
        ) : (
          <X className="w-3 h-3 text-dark-500" />
        ))}
    </span>
  );
};

export default TagChip;
