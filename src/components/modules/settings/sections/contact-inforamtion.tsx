'use client';

import EmailIcon from '@/assets/icons/onboarding/email.svg';
import PhoneIcon from '@/assets/icons/onboarding/phone.svg';
import Button from '@/components/ui/button/button';
import Card from '@/components/ui/card';
import FormField from '@/components/ui/form-field';
import { contactInfoSchema } from '@/lib/schemas/settings/contact-info-schema';
import { ContactInfoData } from '@/lib/types/settings/contact-info';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

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
    <div className="space-y-6">
      <h4 className="body-1 text-dark-900 text-center">{t('title')}</h4>

      <Card>
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-6 items-end"
            onSubmit={methods.handleSubmit(() => {})}
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

            <Button size="sm" color="black" type="submit">
              {t('actions.save')}
            </Button>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default ContactInformation;
