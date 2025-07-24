'use client';

import * as RadioGroup from '@radix-ui/react-radio-group';
import { useController, useFormContext } from 'react-hook-form';
import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

type Option = {
  value: string;
  component: ReactNode;
};

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  options: Option[];
  className?: string;
  containerClassName?: string;
  itemClassName?: string;
};

const RadioGroupField: React.FC<Props> = ({
  name,
  label,
  required,
  options,
  className,
  containerClassName,
  itemClassName,
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={cn(className)}>
      {label && <label className="h5 text-dark-900 block mb-6">{label}</label>}

      <RadioGroup.Root
        value={field.value}
        onValueChange={field.onChange}
        className={cn('grid gap-4', containerClassName)}
      >
        {options.map((opt) => (
          <RadioGroup.Item
            key={opt.value}
            value={opt.value}
            className={cn(
              'relative rounded-lg border border-dark-200 p-4 cursor-pointer transition-colors duration-150 flex flex-col items-start',
              itemClassName,
            )}
          >
            <span className="absolute top-4 left-4 flex items-center justify-center w-[25px] h-[25px] rounded-full border-[1px] border-dark-300 bg-white">
              <RadioGroup.Indicator>
                <span className="w-[12.5px] h-[12.5px] rounded-full bg-primary block" />
              </RadioGroup.Indicator>
            </span>

            {opt.component}
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>

      {error && (
        <p className="text-notification-error small-2-md mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default RadioGroupField;
