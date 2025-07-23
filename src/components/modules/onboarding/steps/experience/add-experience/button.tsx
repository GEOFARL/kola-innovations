import { cn } from '@/lib/cn';
import { HTMLAttributes } from 'react';
import GreenPlusIcon from '@/assets/icons/onboarding/green-plus.svg';

type Props = HTMLAttributes<HTMLButtonElement>;

const AddExperienceButton: React.FC<Props> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        'h-full flex flex-col gap-4 items-center cursor-pointer bg-dark-50 hover:bg-dark-100 active:bg-dark-200 transition-all duration-150 rounded-[8px] border-dashed border-[1px] border-dark-200 p-9',
        className,
      )}
      {...props}
    >
      <GreenPlusIcon />
      <p className="body-2-md text-dark-900">Add experience</p>
    </button>
  );
};

export default AddExperienceButton;
