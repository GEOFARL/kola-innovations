'use client';

import { useTranslations } from 'next-intl';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { OnboardingDataMap } from '@/lib/types/onboarding/store';
import { provinces, cities } from '@/lib/constants/onboarding/select-options';
import ReviewCard from './review-card';

type PersonalInfoData = OnboardingDataMap['personalInfo'];

const getProvinceLabel = (
  value: string,
  t: ReturnType<typeof useTranslations>,
) =>
  provinces.find((p) => p.value === value)?.labelKey
    ? t(provinces.find((p) => p.value === value)!.labelKey)
    : value;

const getCityLabel = (value: string, t: ReturnType<typeof useTranslations>) =>
  cities.find((c) => c.value === value)?.labelKey
    ? t(cities.find((c) => c.value === value)!.labelKey)
    : value;

const Field: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="flex flex-col">
    <span className="body-2-md mb-2 text-dark-600">{label}</span>
    <span className="body-2">{value}</span>
  </div>
);

const PersonalInfoReviewCard: React.FC<{ data: PersonalInfoData }> = ({
  data,
}) => {
  const t = useTranslations('onboarding.personalInfo');
  const { setStep } = useOnboardingStore();

  return (
    <ReviewCard title={t('title')} onEdit={() => setStep(0)}>
      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <Field
          label={`${t('fields.firstName')} / ${t('fields.lastName')}`}
          value={`${data.firstName} ${data.lastName}`}
        />
        <Field label={t('fields.jobTitle')} value={data.jobTitle} />
        <Field label={t('fields.email')} value={data.email} />
        <Field label={t('fields.phone')} value={data.phone || '—'} />
        <Field
          label={t('fields.location')}
          value={`${getCityLabel(data.location.city, t)}, ${getProvinceLabel(
            data.location.province,
            t,
          )}`}
        />
        {data.brief && (
          <div className="col-span-2">
            <Field label={t('fields.brief')} value={data.brief} />
          </div>
        )}
      </div>
    </ReviewCard>
  );
};

export default PersonalInfoReviewCard;
