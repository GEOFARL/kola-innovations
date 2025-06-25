'use client';

import SelectField from '@/components/ui/select-field';
import ToggleField from '@/components/ui/toggle-field';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const disabilities = [
  { value: 'none', labelKey: 'options.none' },
  { value: 'vision', labelKey: 'options.vision' },
  { value: 'hearing', labelKey: 'options.hearing' },
  { value: 'mobility', labelKey: 'options.mobility' },
  { value: 'cognitive', labelKey: 'options.cognitive' },
  { value: 'other', labelKey: 'options.other' },
];

const DisabilityField: React.FC = () => {
  const t = useTranslations('common.disability');
  const methods = useFormContext();
  const hasDisability = useWatch({
    control: methods.control,
    name: 'hasDisability',
  });
  useEffect(() => {
    if (!hasDisability) {
      methods.setValue('disability', '', { shouldValidate: true });
    }
  }, [hasDisability, methods]);

  return (
    <>
      <ToggleField name="hasDisability" label={t('label')} />
      {hasDisability && (
        <SelectField
          name="disability"
          label={t('typeLabel')}
          options={disabilities.map(({ value, labelKey }) => ({
            value,
            label: t(labelKey),
          }))}
        />
      )}
    </>
  );
};

export default DisabilityField;
