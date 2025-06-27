'use client';

import FormField from '@/components/ui/form-field';
import { changePasswordSchema } from '@/lib/schemas/settings/change-password-schema';
import { ChangePasswordData } from '@/lib/types/settings/change-password';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import SettingsFormSection from './settings-form-section';

const ChangePassword: React.FC = () => {
  const t = useTranslations('settings.password');

  const methods = useForm<ChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  return (
    <SettingsFormSection
      title={t('title')}
      methods={methods}
      onSubmit={(data) => console.log(data)}
      submitLabel={t('actions.save')}
    >
      <FormField
        name="currentPassword"
        label={t('fields.current')}
        type="password"
        required
        className="flex-1"
      />

      <h5 className="small-1 text-dark-900 mb-2">{t('newPasswordTitle')}</h5>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            name="newPassword"
            label={t('fields.new')}
            type="password"
            required
          />
          <FormField
            name="confirmPassword"
            label={t('fields.confirm')}
            type="password"
            required
          />
        </div>
        <p className="text-xs text-gray-600 mt-2">{t('note')}</p>
      </div>
    </SettingsFormSection>
  );
};

export default ChangePassword;
