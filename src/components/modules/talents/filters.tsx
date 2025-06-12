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

  const onSubmit = (data: FiltersData) => {
    console.log('Apply filters:', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
        <h2 className="font-semibold text-lg text-dark-900 flex justify-between items-center">
          {t('title')}
          <span className="ml-2 bg-dark-900 text-white text-xs w-[34px] h-[29px] rounded-full flex items-center justify-center">
            4
          </span>
        </h2>

        <div className="flex flex-col gap-3">
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

        <div className="flex justify-between">
          <Button
            variant="secondary"
            size="sm"
            color="black"
            type="button"
            onClick={() => reset()}
          >
            {t('clear')}
          </Button>
          <Button size="sm" type="submit">
            {t('apply')}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default TalentFilters;
