'use client';

import * as Switch from '@radix-ui/react-switch';
import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/cn';

type Props = {
  name: string;
  label?: string;
  required?: boolean;
};

const ToggleField: React.FC<Props> = ({ name, label, required }) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const value = watch(name) ?? false;
  const error = errors[name]?.message as string | undefined;

  const toggle = () => setValue(name, !value, { shouldValidate: true });

  return (
    <div>
      {label && (
        <label className="small-1-md text-dark-600 block mb-1">
          {label}
          {required && (
            <span className="text-notification-error small-2-md"> *</span>
          )}
        </label>
      )}

      <Switch.Root
        checked={value}
        onCheckedChange={toggle}
        className={cn(
          'w-9 h-5 bg-dark-200 rounded-full relative transition-colors data-[state=checked]:bg-primary focus:outline-none ',
        )}
      >
        <Switch.Thumb
          className={cn(
            'block w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 translate-x-[2px] data-[state=checked]:translate-x-[18px]',
          )}
        />
      </Switch.Root>

      {error && (
        <p className="text-notification-error small-2-md mt-1">{error}</p>
      )}
    </div>
  );
};

export default ToggleField;
