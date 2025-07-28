import { cn } from '@/lib/cn';
import { HTMLAttributes } from 'react';
import GreenPlusIcon from '@/assets/icons/onboarding/green-plus.svg';

type Props = HTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const AddButton: React.FC<Props> = ({ className, label, ...props }) => {
  return (
    <button
      className={cn(
        'h-full flex flex-col gap-4 items-center cursor-pointer bg-dark-50 hover:bg-dark-100 active:bg-dark-200 transition-all duration-150 rounded-[8px] border-dashed border-[1px] border-dark-200 p-9',
        className,
      )}
      {...props}
    >
      <GreenPlusIcon />
      <p className="body-2-md text-dark-900">{label}</p>
    </button>
  );
};

export default AddButton;
