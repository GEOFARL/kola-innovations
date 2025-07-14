'use client';

import Button from '@/components/ui/button/button';
import { PropsWithChildren } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import CommonLayout from '../../profile/settings/common-layout';
import { cn } from '@/lib/cn';

type Props = {
  title: string;
  methods: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  submitLabel: string;
  alignButtonEnd?: boolean;
};

const SettingsFormSection: React.FC<PropsWithChildren<Props>> = ({
  title,
  methods,
  onSubmit,
  submitLabel,
  children,
  alignButtonEnd = true,
}) => {
  return (
    <CommonLayout title={title} className="lg:grid-cols-1">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          {children}
          <Button
            size="sm"
            responsiveSize={{
              base: 'md',
              lg: 'sm',
            }}
            color="black"
            type="submit"
            className={cn('w-full lg:w-auto', alignButtonEnd && 'self-end')}
          >
            {submitLabel}
          </Button>
        </form>
      </FormProvider>
    </CommonLayout>
  );
};

export default SettingsFormSection;
