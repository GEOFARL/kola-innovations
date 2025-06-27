'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import SelectField from '@/components/ui/select-field';
import { accountDeactivationSchema } from '@/lib/schemas/settings/account-deactivation.schema';
import { AccountDeactivationData } from '@/lib/types/settings/account-deactivation';
import SettingsFormSection from './settings-form-section';

const AccountDeactivation: React.FC = () => {
  const t = useTranslations('settings.deactivation');

  const methods = useForm<AccountDeactivationData>({
    resolver: zodResolver(accountDeactivationSchema),
    defaultValues: {
      reason: '',
    },
  });

  const reasonOptions = [
    { value: 'not_useful', label: t('reasons.notUseful') },
    { value: 'privacy', label: t('reasons.privacy') },
    { value: 'found_alternative', label: t('reasons.foundAlternative') },
    { value: 'other', label: t('reasons.other') },
  ];

  return (
    <SettingsFormSection
      title={t('title')}
      methods={methods}
      onSubmit={(data) => console.log('Deactivate:', data)}
      submitLabel={t('deleteButton')}
    >
      <p className="text-dark-600 small-1-md">{t('description')}</p>

      <SelectField
        name="reason"
        label={t('reasonLabel')}
        placeholder={t('selectReason')}
        options={reasonOptions}
        required
      />
    </SettingsFormSection>
  );
};

export default AccountDeactivation;
