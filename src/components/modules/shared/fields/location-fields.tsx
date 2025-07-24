'use client';

import SelectField from '@/components/ui/select-field';
import { useTranslations } from 'next-intl';
import { provinces, cities } from '@/lib/constants/onboarding/select-options';

const LocationFields: React.FC = () => {
  const t = useTranslations('onboarding.personalInfo');

  return (
    <>
      <SelectField
        name="location.province"
        label={t('fields.province')}
        placeholder={t('placeholders.province')}
        options={provinces.map(({ value, labelKey }) => ({
          value,
          label: t(labelKey),
        }))}
        required
      />
      <SelectField
        name="location.city"
        label={t('fields.city')}
        placeholder={t('placeholders.city')}
        options={cities.map(({ value, labelKey }) => ({
          value,
          label: t(labelKey),
        }))}
        required
      />
    </>
  );
};

export default LocationFields;
