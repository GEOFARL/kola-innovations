'use client';

import Card from '@/components/ui/card';
import FormField from '@/components/ui/form-field';
import MultiSelectField from '@/components/ui/multi-select-field';
import SelectField from '@/components/ui/select-field';
import {
  cities,
  ethnicities,
  languages,
  orientations,
  provinces,
} from '@/lib/constants/onboarding/select-options';
import { useTranslations } from 'next-intl';
import DisabilityField from '../../shared/fields/disability-field';
import CommonLayout from './common-layout';

const PersonalInformation: React.FC = () => {
  const t = useTranslations('profile');
  const tField = (key: string) => t(`info.${key}`);
  const tOption = (key: string) => t(key);

  return (
    <CommonLayout title={t('info.title')}>
      <FormField name="firstName" label={tField('fullName')} required />
      <FormField name="lastName" label={tField('fullName')} required />
      <FormField name="email" label={tField('email')} type="email" required />
      <FormField name="phone" label={tField('phone')} type="tel" required />
      <FormField name="jobTitle" label={tField('jobTitle')} required />
      <FormField name="username" label="Username" required />

      <SelectField
        name="location.province"
        label={tField('location')}
        options={provinces.map(({ value, labelKey }) => ({
          value,
          label: tOption(labelKey),
        }))}
        required
      />

      <SelectField
        name="location.city"
        label={tField('city')}
        options={cities.map(({ value, labelKey }) => ({
          value,
          label: tOption(labelKey),
        }))}
        required
      />

      <div className="lg:col-span-2">
        <FormField
          name="brief"
          label={tField('brief')}
          placeholder="Tell us about yourself..."
          multiline
        />
      </div>

      <div className="lg:col-span-2">
        <MultiSelectField
          name="languages"
          label={tField('languagesSpoken')}
          options={languages}
        />
      </div>

      <SelectField
        name="ethnicity"
        label={tField('ethnicity')}
        options={ethnicities.map(({ value, labelKey }) => ({
          value,
          label: tOption(labelKey),
        }))}
      />

      <SelectField
        name="orientation"
        label={tField('sexualOrientation')}
        options={orientations.map(({ value, labelKey }) => ({
          value,
          label: tOption(labelKey),
        }))}
      />

      <DisabilityField />
    </CommonLayout>
  );
};

export default PersonalInformation;
