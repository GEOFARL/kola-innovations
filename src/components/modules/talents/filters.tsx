'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import SelectField from '@/components/ui/select-field';
import MultiSelectField from '@/components/ui/multi-select-field';
import Button from '@/components/ui/button/button';
import { FiltersData } from '@/lib/types/talents/filters';

const TalentFilters: React.FC = () => {
  const t = useTranslations('talents.filters');
  const methods = useForm<FiltersData>({
    defaultValues: {
      professions: [],
      profileTags: '',
      skills: '',
      country: '',
      city: '',
    },
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = (data: FiltersData) => {};

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 lg:p-6 h-full lg:h-auto flex flex-col justify-between lg:block"
      >
        <h2 className="font-semibold text-lg text-dark-900 hidden lg:flex justify-between items-center">
          {t('title')}
          <span className="ml-2 bg-dark-900 text-white text-xs w-[34px] h-[29px] rounded-full flex items-center justify-center">
            4
          </span>
        </h2>

        <div className="flex flex-col gap-3 py-6 px-[10px] lg:px-0 lg:py-0">
          <MultiSelectField
            name="professions"
            label={t('profession')}
            placeholder={t('selectProfession')}
            options={[
              { value: 'photographer', label: 'Photographer' },
              { value: 'audio_engineer', label: 'Audio Engineer' },
              { value: 'music_composition', label: 'Music Composition' },
            ]}
          />
          <SelectField
            name="profileTags"
            label={t('profileTags')}
            placeholder={t('selectTags')}
            options={[
              { value: 'creative', label: 'Creative' },
              { value: 'technical', label: 'Technical' },
              { value: 'leadership', label: 'Leadership' },
              { value: 'communication', label: 'Communication' },
            ]}
          />

          <SelectField
            name="skills"
            label={t('skills')}
            placeholder={t('selectSkills')}
            options={[
              { value: 'photoshop', label: 'Adobe Photoshop' },
              { value: 'logic_pro', label: 'Logic Pro X' },
              { value: 'mixing', label: 'Mixing' },
              { value: 'video_editing', label: 'Video Editing' },
              { value: 'project_management', label: 'Project Management' },
            ]}
          />

          <SelectField
            name="country"
            label={t('country')}
            placeholder={t('selectCountry')}
            options={[
              { value: 'ca', label: 'Canada' },
              { value: 'us', label: 'United States' },
            ]}
          />

          <SelectField
            name="city"
            label={t('city')}
            placeholder={t('selectCity')}
            options={[
              { value: 'toronto', label: 'Toronto' },
              { value: 'vancouver', label: 'Vancouver' },
            ]}
          />
        </div>

        <div className="flex justify-between gap-[10px] lg:gap-0 py-[20px] px-[10px] lg:px-0 lg:py-0 lg:border-none border-t-[1px] border-dark-200">
          <Button
            variant="secondary"
            responsiveSize={{ 'base': 'md', lg: 'sm' }}
            color="black"
            type="button"
            className="flex-1 lg:flex-none"
            onClick={() => reset()}
          >
            {t('clear')}
          </Button>
          <Button
            responsiveSize={{ 'base': 'md', lg: 'sm' }}
            type="submit"
            className="flex-1 lg:flex-none"
          >
            {t('apply')}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default TalentFilters;
