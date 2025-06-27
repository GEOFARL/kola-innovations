'use client';

import Card from '@/components/ui/card';
import Button from '@/components/ui/button/button';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { PropsWithChildren } from 'react';

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
    <div className="space-y-6">
      <h4 className="body-1 text-dark-900 text-center">{title}</h4>
      <Card>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {children}
            <Button
              size="sm"
              color="black"
              type="submit"
              className={alignButtonEnd ? 'self-end' : ''}
            >
              {submitLabel}
            </Button>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default SettingsFormSection;
