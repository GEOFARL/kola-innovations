'use client';

import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';
import { useController, useFormContext } from 'react-hook-form';
import { cn } from '@/lib/cn';

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  options: { value: string; label: string }[];
  className?: string;
};

const SelectField: React.FC<Props> = ({
  name,
  label,
  required,
  placeholder,
  options,
  className,
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  return (
    <div className={cn(className)}>
      {label ? (
        <label
          htmlFor={name}
          className="font-medium text-[10px] lg:text-[14px] leading-[150%] text-dark-600  block mb-1"
        >
          {label}
          {required && (
            <span className="text-notification-error small-2-md"> *</span>
          )}
        </label>
      ) : (
        <div className="mb-1 h-[21px]" />
      )}

      <Select.Root value={field.value} onValueChange={field.onChange}>
        <Select.Trigger
          id={name}
          className={cn(
            'w-full border border-dark-200 rounded-md px-2 lg:px-4 py-2 small-1-md text-left text-dark-900 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-black',
            error && 'border-notification-error focus:ring-notification-error',
          )}
        >
          <Select.Value placeholder={placeholder || 'Select...'} />
          <Select.Icon asChild>
            <ChevronDown className="text-dark-500" size={16} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          side="bottom"
          position="popper"
          align="start"
          style={{ minWidth: 'var(--radix-select-trigger-width)' }}
          className="bg-white rounded-md border border-dark-100 shadow-md z-10 mt-1"
        >
          <Select.Viewport className="p-1">
            {options.map((opt) => (
              <Select.Item
                key={opt.value}
                value={opt.value}
                className="text-sm px-2 lg:px-3 py-2 cursor-pointer text-dark-900 rounded-md hover:bg-dark-50 flex items-center justify-between"
              >
                <Select.ItemText>{opt.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="w-4 h-4 text-primary" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>

      {error && (
        <p className="text-notification-error small-2-md mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default SelectField;
