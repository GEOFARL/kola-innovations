import Card from '@/components/ui/card';
import TagChip from '@/components/ui/tag-chip';
import { DEFAULT_USER } from '@/lib/constants/profile';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

const ProfileDetails: React.FC = () => {
  const t = useTranslations('profile.info');
  const tSkills = useTranslations('common.skills');
  const allSkills = useMemo(
    () =>
      DEFAULT_USER.skills?.map((key) => ({
        value: key,
        label: tSkills(`values.${key}`),
      })),
    [tSkills],
  );

  return (
    <Card className="space-y-4 lg:space-y-6 lg:p-6 px-3 py-6 rounded-[6px] lg:rounded-[16px]">
      <div className="grid xl:grid-cols-2 gap-3 lg:gap-6">
        <InfoItem title={t('fullName')} value={DEFAULT_USER.fullName} />
        <InfoItem title={t('jobTitle')} value={DEFAULT_USER.job} />
        <InfoItem title={t('email')} value={DEFAULT_USER.email} />
        <InfoItem title={t('phone')} value={DEFAULT_USER.phone} />
        <InfoItem title={t('location')} value={DEFAULT_USER.location} />
        <InfoItem title={t('ethnicity')} value={DEFAULT_USER.ethnicity} />
      </div>
      <InfoItem title="Brief" value={DEFAULT_USER.brief} />
      <div className="flex flex-wrap gap-2">
        {allSkills?.map((v) => (
          <TagChip
            variant="static"
            className="small-2-md text-dark-900"
            key={v.value}
            label={v.label}
          />
        ))}
      </div>
    </Card>
  );
};

const InfoItem: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="space-y-2">
      <p className="body-2-md text-dark-600">{title}</p>
      <p className="text-dark-900 body-2 font-bold! lg:font-semibold!">
        {value}
      </p>
    </div>
  );
};

export default ProfileDetails;
