import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import {
  OnboardingDataMap,
  onboardingSchemas,
  StepKey,
} from '@/lib/types/onboarding/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';
import { ZodType } from 'zod';

type Props<T extends StepKey> = {
  stepKey: T;
  children: (methods: UseFormReturn<OnboardingDataMap[T]>) => React.ReactNode;
};

const OnboardingStepForm = <T extends StepKey>({
  stepKey,
  children,
}: Props<T>) => {
  const namespace = `onboarding.steps.${stepKey}` as const;
  const t = useTranslations(namespace as Parameters<typeof useTranslations>[0]);
  const { setStepData, setFormSubmitTrigger, next } = useOnboardingStore();

  useOnboardingStore();
  const schema = onboardingSchemas[stepKey] as ZodType<OnboardingDataMap[T]>;
  const methods = useForm<OnboardingDataMap[T]>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setFormSubmitTrigger(
      methods.handleSubmit((formData) => {
        setStepData(stepKey as any, formData);
        next();
      }),
    );
    return () => setFormSubmitTrigger(null);
  }, [methods, stepKey, setStepData, setFormSubmitTrigger, next]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-6 mt-4 lg:mt-10"
      >
        <div>
          <h2 className="h5 text-dark-900">{t('title')}</h2>
          <p className="text-[#1E1E1E] mt-2 text-sm leading-[130%]">
            {t('description')}
          </p>
        </div>
        {children(methods)}
      </form>
    </FormProvider>
  );
};

export default OnboardingStepForm;
