'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FileUploadField from '@/components/ui/file-upload-field';
import FormField from '@/components/ui/form-field';
import MultiSelectField from '@/components/ui/multi-select-field';
import SelectField from '@/components/ui/select-field';

import { personalInfoSchema } from '@/lib/schemas/onboarding/personal-info.schema';
import { localUserStorage } from '@/lib/storage/user-storage';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';

import EmailIcon from '@/assets/icons/onboarding/email.svg';
import PhoneIcon from '@/assets/icons/onboarding/phone.svg';
import {
  cities,
  ethnicities,
  languages,
  orientations,
  provinces,
} from '@/lib/constants/onboarding/select-options';
import { PersonalInfoData } from '@/lib/types/onboarding/step';
import DisabilityField from '../../shared/fields/disability-field';
import PersonalInfoSkeleton from './personal-info-skeleton';

function getInitialPersonalInfoData(): PersonalInfoData {
  const user =
    typeof window !== 'undefined' ? localUserStorage.getUser() : null;

  return {
    firstName: user?.firstName ?? '',
    lastName: user?.lastName ?? '',
    email: user?.email ?? '',
    phone: user?.phone ?? '',
    jobTitle: '',
    username: '',
    location: { province: '', city: '' },
    brief: '',
    languages: [],
    ethnicity: '',
    orientation: '',
    hasDisability: false,
    disability: '',
    resume: undefined,
  };
}

const PersonalInfoStep: React.FC = () => {
  const t = useTranslations('onboarding.personalInfo');
  const { setStepData, setFormSubmitTrigger, next, data } =
    useOnboardingStore();

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const initialValues = getInitialPersonalInfoData();

  const methods = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: data.personalInfo ?? initialValues,
  });

  const submitHandler = useCallback(
    methods.handleSubmit((formData) => {
      setStepData('personalInfo', formData);
      next();
    }),
    [methods, setStepData, next],
  );

  useEffect(() => {
    setFormSubmitTrigger(submitHandler);
    return () => setFormSubmitTrigger(null);
  }, [setFormSubmitTrigger, submitHandler]);
  console.log('render');

  if (!hydrated) return <PersonalInfoSkeleton />;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(() => {})}
        className="space-y-6 mt-10"
      >
        <div>
          <h2 className="h5 text-dark-900">{t('title')}</h2>
          <p className="text-[#1E1E1E] mt-2 text-sm leading-[130%]">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <FormField
            name="firstName"
            label={t('fields.firstName')}
            placeholder={t('placeholders.firstName')}
            required
            disabled={!!initialValues.firstName}
          />
          <FormField
            name="lastName"
            label={t('fields.lastName')}
            placeholder={t('placeholders.lastName')}
            required
            disabled={!!initialValues.lastName}
          />
          <FormField
            name="email"
            label={t('fields.email')}
            placeholder={t('placeholders.email')}
            type="email"
            required
            disabled={!!initialValues.email}
            rightIcon={<EmailIcon />}
          />
          <FormField
            name="phone"
            label={t('fields.phone')}
            placeholder={t('placeholders.phone')}
            type="tel"
            disabled={!!initialValues.phone}
            rightIcon={<PhoneIcon />}
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
          <SelectField
            name="location.province"
            label={t('fields.province')}
            placeholder={t('placeholders.province')}
            options={provinces.map(({ value, labelKey }) => ({
              value,
              label: t(labelKey),
            }))}
            required
            className="flex-1"
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
            className="flex-1"
          />
          <div className="col-span-2">
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
      </form>
    </FormProvider>
  );
};

export default PersonalInfoStep;
