'use client';

import MultiSelectField from '@/components/ui/multi-select-field';
import TagChip from '@/components/ui/tag-chip';
import { skillsSchema } from '@/lib/schemas/onboarding/skills-schema';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { SkillsData } from '@/lib/types/onboarding/step';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const skillKeys = [
  'musicComposition',
  'instrumentProficiency',
  'guitars',
  'musicTheory',
  'pianos',
  'audioInterfaces',
  'musicProduction',
  'collaboration',
  'effectPedals',
  'performer',
  'musicDirector',
  'soundEngineer',
  'songwriter',
  'musicLibrarian',
] as const;

const SkillsStep: React.FC = () => {
  const t = useTranslations('onboarding.skills');
  const { setStepData, setFormSubmitTrigger, next, data } =
    useOnboardingStore();

  const methods = useForm<SkillsData>({
    resolver: zodResolver(skillsSchema),
    defaultValues: data.skills ?? {
      skills: [],
    },
  });

  const selectedSkills = methods.watch('skills') ?? [];

  const allSkills = useMemo(
    () =>
      skillKeys.map((key) => ({
        value: key,
        label: t(`values.${key}`),
      })),
    [t],
  );

  const filteredSuggestions = allSkills.filter(
    (skill) => !selectedSkills.includes(skill.value),
  );

  const addSkill = (skillValue: string) => {
    if (!selectedSkills.includes(skillValue)) {
      methods.setValue('skills', [...selectedSkills, skillValue], {
        shouldValidate: true,
      });
    }
  };

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

        <MultiSelectField
          name="skills"
          label={t('searchLabel')}
          options={allSkills}
          maxVisibleTags={7}
        />

        {filteredSuggestions.length > 0 && (
          <div>
            <p className="small-1 text-dark-900 mb-4">{t('suggested')}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {filteredSuggestions.map((skill) => (
                <TagChip
                  key={skill.value}
                  label={skill.label}
                  onClick={() => addSkill(skill.value)}
                  variant="add"
                />
              ))}
            </div>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default SkillsStep;
