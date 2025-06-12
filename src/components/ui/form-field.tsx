'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import * as Label from '@radix-ui/react-label';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/cn';

type SharedFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

type InputFieldProps = SharedFieldProps & {
  multiline?: false;
  type?: 'text' | 'email' | 'password' | 'tel';
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
  className,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === 'password';
  const finalType = isPasswordField && showPassword ? 'text' : type;
  const paddingLeft = leftIcon ? 'pl-10' : 'pl-4';
  const paddingRight = isPasswordField || rightIcon ? 'pr-10' : 'pr-4';

  const { ref, onChange, onBlur, name: fieldName } = register(name);

  const commonClasses = cn(
    'w-full border border-dark-200 rounded-md py-2 small-1-md text-dark-900 focus:outline-none focus:ring-2 focus:ring-black relative z-1',
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
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
          className="small-1-md text-dark-600 block mb-1"
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
            name={fieldName}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(commonClasses, 'px-4 resize-none min-h-[66px]')}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <>
            <input
              id={name}
              name={fieldName}
              ref={ref}
              type={finalType}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              disabled={disabled}
              className={commonClasses}
              {...(rest as InputHTMLAttributes<HTMLInputElement>)}
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
