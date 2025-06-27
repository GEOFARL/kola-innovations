'use client';

import EmailIcon from '@/assets/icons/onboarding/email.svg';
import PhoneIcon from '@/assets/icons/onboarding/phone.svg';
import FormField from '@/components/ui/form-field';
import { contactInfoSchema } from '@/lib/schemas/settings/contact-info-schema';
import { ContactInfoData } from '@/lib/types/settings/contact-info';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import SettingsFormSection from './settings-form-section';

const ContactInformation: React.FC = () => {
  const t = useTranslations('settings.account');

  const methods = useForm<ContactInfoData>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: {
      email: '',
      phone: '',
    },
  });

  return (
    <SettingsFormSection
      title={t('title')}
      methods={methods}
      onSubmit={() => {}}
      submitLabel={t('actions.save')}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <FormField
          name="email"
          label={t('fields.email')}
          placeholder="john.doe@gmail.com"
          type="email"
          required
          rightIcon={<EmailIcon />}
        />
        <FormField
          name="phone"
          label={t('fields.phone')}
          placeholder="+ 450 123-4567"
          type="tel"
          rightIcon={<PhoneIcon />}
        />
      </div>
    </SettingsFormSection>
  );
};

export default ContactInformation;
