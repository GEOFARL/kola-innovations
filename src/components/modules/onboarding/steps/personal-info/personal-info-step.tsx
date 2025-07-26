'use client';

import { useTranslations } from 'next-intl';

import FileUploadField from '@/components/ui/file-upload-field';
import FormField from '@/components/ui/form-field';
import MultiSelectField from '@/components/ui/multi-select-field';
import SelectField from '@/components/ui/select-field';

import EmailIcon from '@/assets/icons/onboarding/email.svg';
import PhoneIcon from '@/assets/icons/onboarding/phone.svg';
import DisabilityField from '@/components/modules/shared/fields/disability-field';
import LocationFields from '@/components/modules/shared/fields/location-fields';
import {
  ethnicities,
  languages,
  orientations,
} from '@/lib/constants/onboarding/select-options';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import OnboardingStepForm from '../onboarding-step-form';

const PersonalInfoStep: React.FC = () => {
  const t = useTranslations('onboarding.personalInfo');
  const initialValues = useOnboardingStore((s) => s.data['personalInfo']);
  console.log('Initial Values:', initialValues);

  return (
    <OnboardingStepForm stepKey="personalInfo" defaultValues={initialValues}>
      {() => (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <FormField
              name="firstName"
              label={t('fields.firstName')}
              placeholder={t('placeholders.firstName')}
              required
              disabled={!!initialValues?.firstName}
            />
            <FormField
              name="lastName"
              label={t('fields.lastName')}
              placeholder={t('placeholders.lastName')}
              required
              disabled={!!initialValues?.lastName}
            />
            <FormField
              name="email"
              label={t('fields.email')}
              placeholder={t('placeholders.email')}
              type="email"
              required
              disabled={!!initialValues?.email}
              rightIcon={<EmailIcon className="scale-80 lg:scale-100" />}
            />
            <FormField
              name="phone"
              label={t('fields.phone')}
              placeholder={t('placeholders.phone')}
              type="tel"
              disabled={!!initialValues?.phone}
              rightIcon={<PhoneIcon className="scale-80 lg:scale-100" />}
            />
            <FormField
              name="jobTitle"
              label={t('fields.jobTitle')}
              placeholder={t('placeholders.jobTitle')}
              required
            />
            <FormField
              name="username"
              label={t('fields.username')}
              placeholder={t('placeholders.username')}
              required
            />
            <LocationFields />
            <div className="lg:col-span-2">
              <FormField
                name="brief"
                label={t('fields.brief')}
                placeholder={t('placeholders.brief')}
                multiline
              />
            </div>
          </div>

          <MultiSelectField
            name="languages"
            label={t('fields.languages')}
            placeholder={t('placeholders.languages')}
            options={languages}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              name="ethnicity"
              label={t('fields.ethnicity')}
              placeholder={t('placeholders.ethnicity')}
              options={ethnicities.map(({ value, labelKey }) => ({
                value,
                label: t(labelKey),
              }))}
            />
            <SelectField
              name="orientation"
              label={t('fields.orientation')}
              placeholder={t('placeholders.orientation')}
              options={orientations.map(({ value, labelKey }) => ({
                value,
                label: t(labelKey),
              }))}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[64px]">
            <DisabilityField />
          </div>

          <FileUploadField
            iconVariant="red"
            name="resume"
            label={t('fields.resume')}
          />
        </>
      )}
    </OnboardingStepForm>
  );
};

export default PersonalInfoStep;
