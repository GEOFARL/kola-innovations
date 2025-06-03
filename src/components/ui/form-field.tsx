'use client';

import { InputHTMLAttributes, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import * as Label from '@radix-ui/react-label';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/cn';

type Props = {
  name: string;
  label?: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormField: React.FC<Props> = ({
  name,
  label,
  type = 'text',
  placeholder,
  required,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

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
        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          {...register(name)}
          className={cn(
            'w-full border border-dark-200 rounded-md px-4 py-2 small-1-md text-dark-500 focus:outline-none focus:ring-2 focus:ring-black',
            error && 'border-notification-error focus:ring-notification-error',
          )}
          {...rest}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-notification-error small-2-md mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormField;
