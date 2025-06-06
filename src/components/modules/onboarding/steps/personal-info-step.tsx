'use client';

import { useEffect, useState } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import FormField from '@/components/ui/form-field';
import SelectField from '@/components/ui/select-field';
import MultiSelectField from '@/components/ui/multi-select-field';
import ToggleField from '@/components/ui/toggle-field';
import FileUploadField from '@/components/ui/file-upload-field';

import {
  personalInfoSchema,
  PersonalInfoData,
} from '@/lib/schemas/onboarding/personal-info.schema';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { localUserStorage } from '@/lib/storage/user-storage';

import EmailIcon from '@/assets/icons/onboarding/email.svg';
import PhoneIcon from '@/assets/icons/onboarding/phone.svg';

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

  const hasDisability = useWatch({
    control: methods.control,
    name: 'hasDisability',
  });

  useEffect(() => {
    if (!hasDisability) {
      methods.setValue('disability', '', { shouldValidate: true });
    }
  }, [hasDisability, methods]);

  useEffect(() => {
    setFormSubmitTrigger(
      methods.handleSubmit((formData) => {
        setStepData('personalInfo', formData);
        next();
      }),
    );
    return () => setFormSubmitTrigger(null);
  }, [methods, next, setStepData, setFormSubmitTrigger]);

  if (!hydrated) return null;

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
            options={[
              { value: 'quebec', label: t('provinces.quebec') },
              { value: 'ontario', label: t('provinces.ontario') },
              { value: 'alberta', label: t('provinces.alberta') },
            ]}
            required
            className="flex-1"
          />
          <SelectField
            name="location.city"
            label={t('fields.city')}
            placeholder={t('placeholders.city')}
            options={[
              { value: 'montreal', label: t('cities.montreal') },
              { value: 'toronto', label: t('cities.toronto') },
              { value: 'calgary', label: t('cities.calgary') },
            ]}
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
          options={[
            { value: 'english', label: 'English' },
            { value: 'french', label: 'French' },
            { value: 'german', label: 'German' },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="ethnicity"
            label={t('fields.ethnicity')}
            placeholder={t('placeholders.ethnicity')}
            options={[
              { value: 'asian', label: t('ethnicities.asian') },
              { value: 'black', label: t('ethnicities.black') },
              { value: 'hispanic', label: t('ethnicities.hispanic') },
              { value: 'white', label: t('ethnicities.white') },
              { value: 'mixed', label: t('ethnicities.mixed') },
              { value: 'other', label: t('ethnicities.other') },
            ]}
          />
          <SelectField
            name="orientation"
            label={t('fields.orientation')}
            placeholder={t('placeholders.orientation')}
            options={[
              { value: 'heterosexual', label: t('orientations.heterosexual') },
              { value: 'homosexual', label: t('orientations.homosexual') },
              { value: 'bisexual', label: t('orientations.bisexual') },
              { value: 'asexual', label: t('orientations.asexual') },
              { value: 'other', label: t('orientations.other') },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[64px]">
          <ToggleField name="hasDisability" label={t('fields.disability')} />
          {hasDisability && (
            <SelectField
              name="disability"
              label={t('fields.disability')}
              placeholder={t('placeholders.disability')}
              options={[
                { value: 'none', label: t('disabilities.none') },
                { value: 'vision', label: t('disabilities.vision') },
                { value: 'hearing', label: t('disabilities.hearing') },
                { value: 'mobility', label: t('disabilities.mobility') },
                { value: 'cognitive', label: t('disabilities.cognitive') },
                { value: 'other', label: t('disabilities.other') },
              ]}
            />
          )}
        </div>

        <FileUploadField name="resume" label={t('fields.resume')} />
      </form>
    </FormProvider>
  );
};

export default PersonalInfoStep;
