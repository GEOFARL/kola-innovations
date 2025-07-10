'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { useCallback, useState, useMemo } from 'react';
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

  const dragOverHandler = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const dragLeaveHandler = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const file = field.value as File | undefined;
        const fileName = file?.name ?? null;

        const dropHandler = useCallback(
          (e: React.DragEvent<HTMLLabelElement>) => {
            e.preventDefault();
            setIsDragging(false);
            const droppedFile = e.dataTransfer.files?.[0];
            if (droppedFile) {
              field.onChange(droppedFile);
            }
          },
          [field.onChange],
        );

        const changeHandler = useCallback(
          (e: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFile = e.target.files?.[0] ?? null;
            field.onChange(selectedFile);
          },
          [field.onChange],
        );

        return (
          <div className={className}>
            <label
              className={cn(
                'block mb-3 lg:mb-6 text-[10px] lg:text-[14px] leading-[150%]  font-medium',
                labelClassName,
              )}
            >
              {label ?? t('label')}
            </label>

            <input
              id={name}
              type="file"
              accept={accept}
              onChange={changeHandler}
              className="hidden"
            />

            <label
              htmlFor={name}
              onDrop={dropHandler}
              onDragOver={dragOverHandler}
              onDragLeave={dragLeaveHandler}
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
        );
      }}
    />
  );
};

export default FileUploadField;
