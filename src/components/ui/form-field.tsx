'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import * as Label from '@radix-ui/react-label';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/cn';
import { getNestedError } from '@/lib/utils/get-nested-error';

type SharedFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

type InputFieldProps = SharedFieldProps & {
  multiline?: false;
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>;

type TextareaFieldProps = SharedFieldProps & {
  multiline: true;
  type?: never;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>;

type Props = InputFieldProps | TextareaFieldProps;

const FormField: React.FC<Props> = ({
  name,
  label,
  placeholder,
  required,
  multiline,
  disabled,
  leftIcon,
  rightIcon,
  type = 'text',
  value,
  onChange,
  onBlur,
  className,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = getNestedError(errors, name);
  const error =
    typeof fieldError?.message === 'string' ? fieldError.message : undefined;
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === 'password';
  const finalType = isPasswordField && showPassword ? 'text' : type;
  const paddingLeft = leftIcon ? 'pl-10' : 'pl-2 lg:pl-4';
  const paddingRight = isPasswordField || rightIcon ? 'pr-10' : 'pr-2 lg:pr-4';

  const controlled = value !== undefined && onChange !== undefined;

  const registered = register(name);
  const inputProps = controlled
    ? { value, onChange, onBlur }
    : { ...registered };

  const commonClasses = cn(
    'w-full border border-dark-200 rounded-md py-2 font-medium text-[13px] lg:text-[14px] leading-[150%] text-dark-900 focus:outline-none focus:ring-2 focus:ring-black relative z-1',
    paddingLeft,
    paddingRight,
    error && 'border-notification-error focus:ring-notification-error',
    disabled && 'bg-dark-100 text-dark-600',
    className,
  );

  const renderIconLeft = leftIcon && (
    <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2 text-dark-500">
      {leftIcon}
    </div>
  );

  const renderPasswordToggle = isPasswordField && (
    <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute right-3 z-1 top-1/2 -translate-y-1/2 text-gray-500"
      tabIndex={-1}
    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  );

  const renderRightIcon = !isPasswordField && rightIcon && (
    <div className="absolute z-10 right-3 top-1/2 -translate-y-1/2 text-dark-500">
      {rightIcon}
    </div>
  );

  return (
    <div>
      {label && (
        <Label.Root
          htmlFor={name}
          className="font-medium text-[10px] lg:text-[14px] leading-[150%] text-dark-600 block ml-2 lg:ml-0 lg:mb-1"
        >
          {label}
          {required && (
            <span className="text-notification-error small-2-md"> *</span>
          )}
        </Label.Root>
      )}

      <div className="relative">
        {renderIconLeft}

        {multiline ? (
          <textarea
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              commonClasses,
              'px-2 lg:px-4 resize-none min-h-[66px]',
            )}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            {...inputProps}
          />
        ) : (
          <>
            <input
              id={name}
              type={finalType}
              placeholder={placeholder}
              disabled={disabled}
              className={commonClasses}
              {...(rest as InputHTMLAttributes<HTMLInputElement>)}
              {...inputProps}
            />
            {renderPasswordToggle}
            {renderRightIcon}
          </>
        )}
      </div>

      {error && (
        <p className="text-notification-error small-2-md mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormField;
