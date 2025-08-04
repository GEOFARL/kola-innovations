'use client';

import Button from '@/components/ui/button/button';
import FormField from '@/components/ui/form-field';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { SignUpSchema } from '@/lib/schemas/auth/sign-up.schema';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import { SignUpFormData } from '@/lib/types/auth/sign-up';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import AuthForm from './auth-form';
import { useSignUp } from '@clerk/nextjs';
import { toast } from 'sonner';

const SignUpForm: React.FC = () => {
  const t = useTranslations('common.auth');
  const tf = (key: string) => t(`fields.${key}`);
  const tp = (key: string) => t(`placeholders.${key}`);
  const { setView } = useAuthModalStore();
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    if (!isLoaded) return;

    try {
      const result = await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });

        toast.success('Signed up successfully!');
        router.push(APP_ROUTES.ONBOARDING);
      } else if (
        result.status === 'missing_requirements' &&
        result.unverifiedFields?.includes('email_address')
      ) {
        await signUp.prepareEmailAddressVerification({
          strategy: 'email_code',
        });

        toast.info('We sent a verification code to your email.');
        router.push(APP_ROUTES.VERIFY_EMAIL);
      } else {
        toast.error('Unexpected signup flow, please try again.');
      }
    } catch (err: any) {
      const message =
        err?.errors?.[0]?.longMessage ?? err?.message ?? 'Sign-up failed';
      toast.error(message);
    }
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
