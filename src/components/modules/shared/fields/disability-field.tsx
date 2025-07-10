'use client';

import SelectField from '@/components/ui/select-field';
import ToggleField from '@/components/ui/toggle-field';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const DisabilityField: React.FC = () => {
  const t = useTranslations('common.disability');
  const { control, setValue } = useFormContext();

  const hasDisability = useWatch({
    control,
    name: 'hasDisability',
  });

  useEffect(() => {
    if (!hasDisability) {
      setValue('disability', '', { shouldValidate: true });
    }
  }, [hasDisability, setValue]);

  const disabilityOptions = useMemo(
    () =>
      [
        { value: 'none', labelKey: 'options.none' },
        { value: 'vision', labelKey: 'options.vision' },
        { value: 'hearing', labelKey: 'options.hearing' },
        { value: 'mobility', labelKey: 'options.mobility' },
        { value: 'cognitive', labelKey: 'options.cognitive' },
        { value: 'other', labelKey: 'options.other' },
      ].map(({ value, labelKey }) => ({
        value,
        label: t(labelKey),
      })),
    [t],
  );

  return (
    <>
      <ToggleField name="hasDisability" label={t('label')} />
      {hasDisability && (
        <SelectField
          name="disability"
          label={t('typeLabel')}
          options={disabilityOptions}
        />
      )}
    </>
  );
};

export default DisabilityField;
