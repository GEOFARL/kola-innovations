'use client';

import PlusIcon from '@/assets/icons/onboarding/plus.svg';
import Button from '@/components/ui/button/button';
import RadioGroupField from '@/components/ui/radio-group-field';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import JobPreferenceDialog from './dialog';

const JobOpenStatus: React.FC = () => {
  const t = useTranslations('onboarding.experience.jobOpenStatus');
  const { control } = useFormContext();
  const jobStatus = useWatch({ control, name: 'jobStatus' });

  const [dialogOpen, setDialogOpen] = useState(false);

  const jobOptions = [
    {
      value: 'actively',
      component: (
        <div className="pl-9 text-left flex flex-col gap-[10px]">
          <p className="body-1-md">{t('options.actively.title')}</p>
          <p className="body-2-rg text-dark-600">
            {t('options.actively.description')}
          </p>
        </div>
      ),
    },
    {
      value: 'casually',
      component: (
        <div className="pl-9 text-left flex flex-col gap-[10px]">
          <p className="body-1-md">{t('options.casually.title')}</p>
          <p className="body-2-rg text-dark-600">
            {t('options.casually.description')}
          </p>
        </div>
      ),
    },
    {
      value: 'not-looking',
      component: (
        <div className="pl-9 text-left flex flex-col gap-[10px]">
          <p className="body-1-md">{t('options.notLooking.title')}</p>
          <p className="body-2-rg text-dark-600">
            {t('options.notLooking.description')}
          </p>
        </div>
      ),
    },
  ];

  const showButton = jobStatus === 'actively' || jobStatus === 'casually';

  const handleDialogSubmit = (values: any) => {
    console.log('Job preference saved:', values);
    // TODO: store values in your main form state or send to API
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <RadioGroupField
          name="jobStatus"
          label={t('label')}
          options={jobOptions}
          containerClassName="2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1"
          itemClassName="p-4 pt-[14px]"
        />

        {showButton && (
          <Button
            variant="secondary"
            size="md"
            className="self-start flex items-center gap-3"
            onClick={() => setDialogOpen(true)}
          >
            <PlusIcon />
            {t('buttons.addJobPreference')}
          </Button>
        )}
      </div>

      <JobPreferenceDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleDialogSubmit}
      />
    </>
  );
};

export default JobOpenStatus;
