'use client';

import { skillsSchema } from '@/lib/schemas/onboarding/skills-schema';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { SkillsData } from '@/lib/types/onboarding/step';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SkillsField from '../../shared/skills-field';

const SkillsStep: React.FC = () => {
  const t = useTranslations('skills.onboarding');
  const { setStepData, setFormSubmitTrigger, data } = useOnboardingStore();

  const methods = useForm<SkillsData>({
    resolver: zodResolver(skillsSchema),
    defaultValues: data.skills ?? {
      skills: [],
    },
  });

  useEffect(() => {
    setStepData('skills', methods.getValues());
    setFormSubmitTrigger(
      methods.handleSubmit((formData) => {
        setStepData('skills', formData);
      }),
    );
    return () => setFormSubmitTrigger(null);
  }, [methods, setStepData, setFormSubmitTrigger]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(() => {})}
        className="space-y-6 mt-10"
      >
        <div>
          <h2 className="h5 text-dark-900">{t('title')}</h2>
          <p className="text-[#1E1E1E] mt-2 text-sm leading-[130%]">
            {t('description')}
          </p>
        </div>

        <SkillsField />
      </form>
    </FormProvider>
  );
};

export default SkillsStep;
