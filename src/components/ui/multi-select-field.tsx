'use client';

import * as Popover from '@radix-ui/react-popover';
import { Check, ChevronDown, X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/cn';

type MultiSelectOption = { value: string; label: string };

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  options: MultiSelectOption[];
  maxVisibleTags?: number;
};

const MultiSelectField: React.FC<Props> = ({
  name,
  label,
  required,
  placeholder,
  options,
  maxVisibleTags = 3,
}) => {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const selected: string[] = getValues(name) || [];

  const toggleValue = (val: string) => {
    const newSelected = selected.includes(val)
      ? selected.filter((v) => v !== val)
      : [...selected, val];

    setValue(name, newSelected, { shouldValidate: true });
  };

  const removeTag = (val: string) => {
    setValue(
      name,
      selected.filter((v) => v !== val),
      { shouldValidate: true },
    );
  };

  const error = errors[name]?.message as string | undefined;

  return (
    <div>
      {label && (
        <label htmlFor={name} className="small-1-md text-dark-600 block mb-1">
          {label}
          {required && (
            <span className="text-notification-error small-2-md"> *</span>
          )}
        </label>
      )}

      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            id={name}
            aria-haspopup="listbox"
            aria-expanded="false"
            className={cn(
              'w-full min-h-[42px] border border-dark-200 rounded-md px-4 py-2 small-1-md text-left text-dark-900 flex flex-wrap items-center gap-2 focus:outline-none focus:ring-2 focus:ring-black',
              error &&
                'border-notification-error focus:ring-notification-error',
            )}
          >
            <div className="flex flex-wrap items-center gap-2 flex-1 overflow-hidden">
              {selected.length > 0 ? (
                <>
                  {selected.slice(0, maxVisibleTags).map((val) => {
                    const label =
                      options.find((o) => o.value === val)?.label || val;
                    return (
                      <span
                        key={val}
                        className="bg-dark-100 text-dark-800 rounded-full px-2 py-[2px] text-xs flex items-center gap-1 shrink-0"
                      >
                        {label}
                        <X
                          className="w-3 h-3 cursor-pointer text-dark-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeTag(val);
                          }}
                        />
                      </span>
                    );
                  })}
                  {selected.length > maxVisibleTags && (
                    <span className="text-xs text-dark-500">
                      +{selected.length - maxVisibleTags} more
                    </span>
                  )}
                </>
              ) : (
                <span className="text-dark-400">
                  {placeholder || 'Select...'}
                </span>
              )}
            </div>
            <ChevronDown size={16} className="text-dark-500" />
          </button>
        </Popover.Trigger>

        <Popover.Content
          align="start"
          side="bottom"
          className="w-[var(--radix-popover-trigger-width)] bg-white rounded-md border border-dark-100 shadow-md mt-1 z-50"
        >
          <ul
            className="max-h-[220px] overflow-y-auto p-1"
            role="listbox"
            aria-multiselectable="true"
            aria-labelledby={name}
          >
            {options.map((opt) => {
              const checked = selected.includes(opt.value);
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={checked}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleValue(opt.value);
                    }
                  }}
                  onClick={() => toggleValue(opt.value)}
                  className={cn(
                    'flex items-center justify-between px-3 py-2 text-sm text-dark-900 rounded-md cursor-pointer hover:bg-dark-50 focus:outline-none focus:ring-1 focus:ring-black',
                  )}
                >
                  <span>{opt.label}</span>
                  {checked && <Check className="text-primary w-4 h-4" />}
                </li>
              );
            })}
          </ul>
        </Popover.Content>
      </Popover.Root>

      {error && (
        <p className="text-notification-error small-2-md mt-1">{error}</p>
      )}
    </div>
  );
};

export default MultiSelectField;
