'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/cn';
import UploadIcon from '@/assets/icons/upload.svg';

type Props = {
  name: string;
  label?: string;
  accept?: string;
  hint?: string;
  className?: string;
  iconVariant?: 'default' | 'red';
  labelClassName?: string;
};

const FileUploadField: React.FC<Props> = ({
  name,
  label,
  accept = '.pdf,.doc,.docx,.rtf,.txt',
  hint,
  className,
  labelClassName,
  iconVariant = 'default',
}) => {
  const t = useTranslations('common.upload');
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback(
    (
      e: React.DragEvent<HTMLLabelElement>,
      onChange: (file: File | null) => void,
    ) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) {
        onChange(file);
        setFileName(file.name);
      }
    },
    [],
  );

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <div className={className}>
          <label
            className={cn('block mb-6 text-sm font-medium', labelClassName)}
          >
            {label ?? t('label')}
          </label>

          <input
            id={name}
            type="file"
            accept={accept}
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              onChange(file);
              setFileName(file?.name ?? null);
            }}
            className="hidden"
          />

          <label
            htmlFor={name}
            onDrop={(e) => onDrop(e, onChange)}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            className={cn(
              'border border-dashed rounded-[8px] p-4 text-center flex items-center gap-4 cursor-pointer transition-colors',
              isDragging ? 'bg-dark-50 border-dark-400' : 'border-dark-200',
            )}
          >
            <div
              className={cn(
                'p-2 rounded-full shrink-0',
                iconVariant === 'red'
                  ? 'bg-[#FFF2F2] text-red-600'
                  : 'bg-[#9CB0C9] text-white',
              )}
            >
              <UploadIcon />
            </div>
            <div className="text-left">
              <div className="text-dark-900 small-1-md">
                {fileName || (
                  <>
                    {t('placeholder')}{' '}
                    <span className="text-primary">{t('select')}</span>
                  </>
                )}
              </div>
              <div className="text-xs font-[500] text-dark-600 mt-1">
                {hint || t('hint')}
              </div>
            </div>
          </label>

          {error && (
            <p className="text-notification-error small-2-md mt-1">{error}</p>
          )}
        </div>
      )}
    />
  );
};

export default FileUploadField;
