'use client';

import Button from '@/components/ui/button/button';
import { SignInSchema } from '@/lib/schemas/auth/sign-in.schema';
import { SignInFormData } from '@/lib/types/auth/sign-in';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import AuthForm from './auth-form';
import FormField from '@/components/ui/form-field';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

const SignInForm: React.FC = () => {
  const t = useTranslations('common.auth');
  const toastT = useTranslations('toast.auth');
  const tf = (key: string) => t(`fields.${key}`);
  const tp = (key: string) => t(`placeholders.${key}`);
  const { setView } = useAuthModalStore();

  const methods = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = methods.handleSubmit((data) => {
    toast.success(toastT('signInSuccess'));
  });

  return (
    <FormProvider {...methods}>
      <AuthForm className="flex flex-col">
        <AuthForm.Header
          title={t('login')}
          description={
            <>
              <p>{t('signInDescription.line1')}</p>
              <p className="-mt-[4px]">{t('signInDescription.line2')}</p>
            </>
          }
        />
        <form
          onSubmit={onSubmit}
          className="space-y-2 lg:space-y-4 flex-1 flex flex-col"
        >
          <AuthForm.Fields className="flex-1">
            <FormField
              name="email"
              label={tf('email')}
              placeholder={tp('email')}
              type="email"
              required
            />
            <FormField
              name="password"
              label={tf('password')}
              placeholder={tp('password')}
              type="password"
              required
            />
            <Button
              type="button"
              className="mx-auto lg:mr-0 lg:ml-auto"
              variant="text-link"
              color="black"
              onClick={() => setView('forgot')}
            >
              {t('forgotPassword')}
            </Button>
          </AuthForm.Fields>
          <AuthForm.Footer>
            <Button
              className="w-full"
              color="black"
              type="submit"
              responsiveSize={{ base: 'md', lg: 'lg' }}
            >
              {t('login')}
            </Button>
            <div className="flex items-center small-1-rg text-dark-700">
              {t('noAccount')}?
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

export default SignInForm;
