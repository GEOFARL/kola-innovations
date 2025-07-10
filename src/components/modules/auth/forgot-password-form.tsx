'use client';

import Button from '@/components/ui/button/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import AuthForm from './auth-form';
import FormField from '@/components/ui/form-field';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import { useTranslations } from 'next-intl';
import { ForgotPasswordSchema } from '@/lib/schemas/auth/forgot-password.schema';
import { ForgotPasswordFormData } from '@/lib/types/auth/forgot-password';
import { toast } from 'sonner';

const ForgotPasswordForm: React.FC = () => {
  const t = useTranslations('common.auth');
  const toastT = useTranslations('toast.auth');
  const tp = (key: string) => t(`placeholders.${key}`);
  const { setView } = useAuthModalStore();

  const methods = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit = methods.handleSubmit((data) => {
    toast.success(toastT('forgotPassword'));
  });

  return (
    <FormProvider {...methods}>
      <AuthForm className="flex flex-col">
        <AuthForm.Header
          title={t('forgotPassword')}
          description={<p>{t('resetInstruction')}</p>}
        />

        <form onSubmit={onSubmit} className="space-y-4 flex-1 flex flex-col">
          <AuthForm.Fields className="flex-1">
            <FormField
              name="email"
              label={t('fields.email')}
              placeholder={tp('email')}
              type="email"
              required
            />
          </AuthForm.Fields>

          <AuthForm.Footer className="flex flex-col gap-3">
            <div className="flex w-full gap-2">
              <Button
                variant="secondary"
                color="black"
                type="button"
                className="w-full"
                onClick={() => setView('signIn')}
                responsiveSize={{ base: 'md', lg: 'lg' }}
              >
                {t('back')}
              </Button>
              <Button
                className="w-full"
                color="black"
                type="submit"
                responsiveSize={{ base: 'md', lg: 'lg' }}
              >
                {t('sendEmail')}
              </Button>
            </div>

            <div className="flex items-center small-1-rg text-dark-700">
              {t('noAccount')}?{' '}
              <Button
                variant="text-link"
                onClick={() => setView('signUp')}
                className="pl-1"
                type="button"
              >
                {t('signup')}
              </Button>
            </div>
          </AuthForm.Footer>
        </form>
      </AuthForm>
    </FormProvider>
  );
};

export default ForgotPasswordForm;
