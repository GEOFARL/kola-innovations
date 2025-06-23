'use client';

import { X, Plus } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = {
  label: string;
  onClick?: () => void;
  variant?: 'remove' | 'add' | 'static';
  className?: string;
  color?: 'red';
};

const TagChip: React.FC<Props> = ({
  label,
  onClick,
  className,
  color,
  variant = 'remove',
}) => {
  const showIcon = variant !== 'static';

  return (
    <span
      className={cn(
        'bg-dark-100 text-dark-800 rounded-full px-2 py-[2px] text-xs flex items-center gap-1 shrink-0 border-[1px] border-transparent',
        variant !== 'static' && 'cursor-pointer',
        variant === 'remove' &&
          color === 'red' &&
          'border-primary bg-primary-100 text-primary',
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
          <X
            className={cn(
              'w-3 h-3 text-dark-500',
              variant === 'remove' && color === 'red' && 'text-primary',
            )}
          />
        ))}
    </span>
  );
};

export default TagChip;
