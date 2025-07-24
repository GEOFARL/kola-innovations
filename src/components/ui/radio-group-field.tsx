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
  options: Option[];
  value?: string;
  onValueChange?: (val: string) => void;
  className?: string;
  containerClassName?: string;
  itemClassName?: string;
  variant?: 'grouped' | 'basic';
};

const RadioGroupField: React.FC<Props> = ({
  name,
  label,
  options,
  value,
  onValueChange,
  className,
  containerClassName,
  itemClassName,
  variant = 'grouped',
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={cn(className)}>
      {label && (
        <label
          className={cn(
            'text-dark-900 block',
            variant === 'grouped' && 'h5 mb-6',
            variant === 'basic' && 'text-[14px] font-semibold mb-4',
          )}
        >
          {label}
        </label>
      )}

      <RadioGroup.Root
        value={value ?? field.value}
        onValueChange={onValueChange ?? field.onChange}
        className={cn(
          variant === 'grouped' && 'grid gap-4',
          variant === 'basic' && 'flex gap-6',
          containerClassName,
        )}
      >
        {options.map((opt) => (
          <RadioGroup.Item
            key={opt.value}
            value={opt.value}
            className={cn(
              'relative rounded-lg cursor-pointer transition-colors duration-150 flex items-start',
              variant === 'grouped' && 'flex-col border border-dark-200 p-4',
              variant === 'basic' && 'items-center gap-[6px]',
              itemClassName,
            )}
          >
            <span
              className={cn(
                'flex items-center justify-center rounded-full border-[1px] border-dark-300 bg-white',
                variant === 'grouped' &&
                  'absolute top-4 left-4 w-[25px] h-[25px]',
                variant === 'basic' && 'w-5 h-5',
              )}
            >
              <RadioGroup.Indicator>
                <span
                  className={cn(
                    'rounded-full bg-primary block',
                    variant === 'grouped' && 'w-[12.5px] h-[12.5px]',
                    variant === 'basic' && 'w-[10px] h-[10px]',
                  )}
                />
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
