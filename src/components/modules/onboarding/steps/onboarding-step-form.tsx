import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import {
  OnboardingDataMap,
  onboardingSchemas,
  StepKey,
} from '@/lib/types/onboarding/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import {
  DefaultValues,
  FormProvider,
  useForm,
  UseFormReturn,
} from 'react-hook-form';

type Props<T extends StepKey> = {
  stepKey: T;
  defaultValues?: DefaultValues<OnboardingDataMap[T]>;
  skipFormSave?: boolean;
  onSubmit?: (values: any) => void;
  children: (methods: UseFormReturn<OnboardingDataMap[T]>) => React.ReactNode;
};

const onboardingStepKeys = Object.keys(onboardingSchemas) as StepKey[];
const OnboardingStepForm = <T extends StepKey>({
  stepKey,
  children,
  defaultValues,
  onSubmit,
  skipFormSave,
}: Props<T>) => {
  const namespace = `onboarding.${stepKey}` as const;
  const t = useTranslations(namespace as Parameters<typeof useTranslations>[0]);
  const { setStepData, setFormSubmitTrigger, next } = useOnboardingStore();

  const schema = onboardingSchemas[stepKey] as any;
  const methods = useForm<OnboardingDataMap[T]>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);

  const isLastStep =
    onboardingStepKeys.indexOf(stepKey) === onboardingStepKeys.length - 1;

  useEffect(() => {
    setFormSubmitTrigger(
      methods.handleSubmit((formData) => {
        if (!skipFormSave) {
          const prevData = useOnboardingStore.getState().data[stepKey] || {};
          setStepData(stepKey as any, { ...prevData, ...formData });
        }
        if (!isLastStep) next();
      }),
    );
    return () => setFormSubmitTrigger(null);
  }, [methods, stepKey, setStepData, setFormSubmitTrigger, next, isLastStep]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.(methods.getValues());
        }}
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
