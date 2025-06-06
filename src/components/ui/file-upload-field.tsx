'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { UploadCloud } from 'lucide-react';
import { cn } from '@/lib/cn';
import UploadIcon from '@/assets/icons/upload.svg';

type Props = {
  name: string;
  label: string;
};

const FileUploadField: React.FC<Props> = ({ name, label }) => {
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
        <div>
          <label className="block mb-6 text-sm font-medium">{label}</label>

          <input
            id={name}
            type="file"
            accept=".pdf,.doc,.docx,.rtf,.txt"
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
            <div className="bg-primary-100 p-3 rounded-full">
              <UploadIcon />
            </div>
            <div className="text-left">
              <div className="text-dark-900 small-1-md">
                {fileName || (
                  <>
                    Drag & Drop here or{' '}
                    <span className="text-primary">select file</span>
                  </>
                )}
              </div>
              <div className="text-xs font-[500] text-dark-600 mt-1">
                Use a pdf, docx, doc, rtf or txt
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
