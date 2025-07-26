'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/ui/button/button';
import Checkbox from '@/components/ui/checkbox';
import Modal from '@/components/ui/modal';
import MultiSelectField from '@/components/ui/multi-select-field';
import RadioGroupField from '@/components/ui/radio-group-field';
import SelectField from '@/components/ui/select-field';

import LocationFields from '@/components/modules/shared/fields/location-fields';
import { jobPreferenceSchema } from '@/lib/schemas/onboarding/experience.schema';
import { JobPreference } from '@/lib/types/onboarding/job-preference';
import {
  ethnicities,
  industryKeys,
  orientations,
  preferredJobTypes,
  preferredRoles,
} from '@/lib/constants/onboarding/select-options';
import MultiSelectWithSuggestions from '@/components/modules/shared/fields/multiselect-with-suggestions';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: JobPreference) => void;
  defaultValues?: JobPreference;
};

const JobPreferenceDialog: React.FC<Props> = ({
  open,
  onClose,
  onSubmit,
  defaultValues,
}) => {
  const t = useTranslations('onboarding.experience.jobPreference');
  const tSelect = useTranslations('onboarding.experience');
  const tPersonalInfo = useTranslations('onboarding.personalInfo');

  const methods = useForm<JobPreference>({
    resolver: zodResolver(jobPreferenceSchema),
    defaultValues: defaultValues || {
      preferredRoles: [],
      preferredJobTypes: [],
      workModes: [],
      holdingOtherOffers: false,
      preferredIndustries: [],
      location: { province: '', city: '' },
      ethnicity: '',
      orientation: '',
    },
  });

  const { control, handleSubmit } = methods;

  return (
    <Modal
      open={open}
      onOpenChange={onClose}
      className="max-w-[830px] w-[calc(100%-32px)] rounded-lg"
    >
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((values) => {
            onSubmit(values);
            onClose();
          })}
          className="flex flex-col"
        >
          <div className="space-y-6 p-6">
            <h2 className="body-1">{t('title')}</h2>

            <div className="grid grid-cols-2 gap-4">
              <MultiSelectField
                name="preferredRoles"
                label={t('fields.preferredRoles')}
                options={preferredRoles.map((r) => ({
                  value: r.value,
                  label: tSelect(r.labelKey),
                }))}
              />

              <MultiSelectField
                name="preferredJobTypes"
                label={t('fields.preferredJobTypes')}
                options={preferredJobTypes.map((j) => ({
                  value: j.value,
                  label: tSelect(j.labelKey),
                }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <LocationFields />
            </div>

            <Controller
              control={control}
              name="workModes"
              render={({ field }) => (
                <div className="flex gap-4">
                  {['remote', 'hybrid', 'in-office'].map((mode) => (
                    <Checkbox
                      key={mode}
                      className="gap-[6px]"
                      checked={field.value.includes(
                        mode as JobPreference['workModes'][number],
                      )}
                      onChange={() =>
                        field.value.includes(
                          mode as JobPreference['workModes'][number],
                        )
                          ? field.onChange(
                              field.value.filter((v: string) => v !== mode),
                            )
                          : field.onChange([...field.value, mode])
                      }
                      label={t(
                        `fields.${mode === 'in-office' ? 'inOffice' : mode}`,
                      )}
                    />
                  ))}
                </div>
              )}
            />

            <Controller
              control={control}
              name="holdingOtherOffers"
              render={({ field }) => (
                <RadioGroupField
                  variant="basic"
                  name={field.name}
                  label={t('fields.holdingOtherOffers')}
                  options={[
                    {
                      value: 'true',
                      component: <span>{t('fields.yes')}</span>,
                    },
                    {
                      value: 'false',
                      component: <span>{t('fields.no')}</span>,
                    },
                  ]}
                  value={String(field.value)}
                  onValueChange={(val) => field.onChange(val === 'true')}
                />
              )}
            />

            <MultiSelectWithSuggestions
              name="preferredIndustries"
              labelKey="industries.searchLabel"
              suggestionTitleKey="industries.suggested"
              values={[...industryKeys]}
              translationPrefix="industries.values"
            />

            <div className="grid grid-cols-2 gap-4">
              <SelectField
                name="ethnicity"
                label={tPersonalInfo('fields.ethnicity')}
                placeholder={tPersonalInfo('placeholders.ethnicity')}
                options={ethnicities.map(({ value, labelKey }) => ({
                  value,
                  label: tPersonalInfo(labelKey),
                }))}
              />
              <SelectField
                name="orientation"
                label={tPersonalInfo('fields.orientation')}
                placeholder={tPersonalInfo('placeholders.orientation')}
                options={orientations.map(({ value, labelKey }) => ({
                  value,
                  label: tPersonalInfo(labelKey),
                }))}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 py-4 px-8 mt-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <Button
              type="button"
              variant="secondary"
              color="black"
              onClick={onClose}
              size="lg"
            >
              {t('buttons.cancel')}
            </Button>
            <Button type="submit" color="black" size="lg">
              {t('buttons.save')}
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default JobPreferenceDialog;
