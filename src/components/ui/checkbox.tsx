'use client';

import CheckIcon from '@/assets/icons/check-2.svg';
import { cn } from '@/lib/cn';

type Props = {
  label: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
};

const Checkbox: React.FC<Props> = ({ label, checked, onChange, className }) => {
  return (
    <label
      className={cn(
        'flex items-center gap-3 cursor-pointer select-none',
        className,
      )}
      onClick={onChange}
    >
      <span
        className={cn(
          'w-5 h-5 rounded-[3px] border-[1px] border-dark-300 flex items-center justify-center transition',
          checked
            ? 'bg-primary border-primary'
            : 'bg-white hover:border-dark-400',
        )}
      >
        {checked && <CheckIcon className="-mb-[1px]" />}
      </span>
      <span className="small-1-md text-dark-700">{label}</span>
    </label>
  );
};

export default Checkbox;
