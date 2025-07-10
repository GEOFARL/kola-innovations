'use client';

import Button from '@/components/ui/button/button';
import FormField from '@/components/ui/form-field';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { SignUpSchema } from '@/lib/schemas/auth/sign-up.schema';
import { localUserStorage } from '@/lib/storage/user-storage';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import { SignUpFormData } from '@/lib/types/auth/sign-up';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import AuthForm from './auth-form';

const SignUpForm: React.FC = () => {
  const t = useTranslations('common.auth');
  const toastT = useTranslations('toast.auth');
  const tf = (key: string) => t(`fields.${key}`);
  const tp = (key: string) => t(`placeholders.${key}`);
  const { setView } = useAuthModalStore();
  const router = useRouter();

  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = methods.handleSubmit((data) => {
    const user = {
      id: v4(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };

    localUserStorage.saveUser(user);
    router.push(APP_ROUTES.ONBOARDING);
  });

  return (
    <FormProvider {...methods}>
      <AuthForm className="flex flex-col">
        <AuthForm.Header
          title={t('signup')}
          description={
            <>
              <p>{t('signUpDescription.line1')}</p>
              <p className="-mt-[4px]">{t('signUpDescription.line2')}</p>
            </>
          }
        />
        <form onSubmit={onSubmit} className="space-y-4 flex-1 flex flex-col">
          <AuthForm.Fields className="flex-1">
            <FormField
              name="firstName"
              label={tf('firstName')}
              placeholder={tp('firstName')}
              required
            />
            <FormField
              name="lastName"
              label={tf('lastName')}
              placeholder={tp('lastName')}
              required
            />
            <FormField
              name="phone"
              label={tf('mobile')}
              placeholder={tp('mobile')}
              type="tel"
            />
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
            <FormField
              name="confirmPassword"
              label={tf('confirmPassword')}
              placeholder={tp('confirmPassword')}
              type="password"
              required
            />
          </AuthForm.Fields>
          <AuthForm.Footer>
            <Button
              responsiveSize={{ base: 'md', lg: 'lg' }}
              color="black"
              type="submit"
              className="w-full"
            >
              {t('signup')}
            </Button>
            <div className="flex items-center small-1-rg text-dark-700">
              {t('haveAccount')}?
              <Button
                variant="text-link"
                onClick={() => setView('signIn')}
                className="pl-0"
                type="button"
              >
                {t('login')}
              </Button>
            </div>
          </AuthForm.Footer>
        </form>
      </AuthForm>
    </FormProvider>
  );
};

export default SignUpForm;
