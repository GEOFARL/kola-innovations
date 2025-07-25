'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/ui/button/button';
import Checkbox from '@/components/ui/checkbox';
import FormField from '@/components/ui/form-field';
import Modal from '@/components/ui/modal';
import SelectField from '@/components/ui/select-field';

import { experienceItemSchema } from '@/lib/schemas/onboarding/experience.schema';
import { ExperienceItem } from '@/lib/types/onboarding/experience';

import LinkIcon from '@/assets/icons/link.svg';
import CalendarIcon from '@/assets/icons/calendar.svg';
import LocationFields from '@/components/modules/shared/fields/location-fields';
import {
  primaryRoles,
  workTypes,
} from '@/lib/constants/onboarding/select-options';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (exp: ExperienceItem) => void;
  defaultValues?: ExperienceItem;
};

const AddExperienceDialog: React.FC<Props> = ({
  open,
  onClose,
  onSubmit,
  defaultValues,
}) => {
  const t = useTranslations('onboarding.experience.fields');
  const tb = useTranslations('onboarding.experience.buttons');
  const tOption = useTranslations('onboarding.experience');

  const methods = useForm<ExperienceItem>({
    resolver: zodResolver(experienceItemSchema),
    defaultValues: defaultValues ?? {
      jobTitle: '',
      companyName: '',
      companyWebsite: '',
      startDate: { month: '', year: '' },
      endDate: { month: '', year: '' },
      currentlyWorking: false,
      location: { province: '', city: '' },
      workType: 'remote',
      primaryRole: '',
      description: '',
    },
  });

  const { handleSubmit, watch, setValue } = methods;
  const currentlyWorking = watch('currentlyWorking');

  const submitHandler = handleSubmit((values) => {
    if (values.currentlyWorking) values.endDate = undefined;
    onSubmit(values);
    onClose();
  });

  return (
    <Modal
      open={open}
      onOpenChange={onClose}
      className="max-w-[830px] w-[calc(100%-32px)] rounded-lg"
    >
      <FormProvider {...methods}>
        <form onSubmit={submitHandler} className="flex flex-col">
          <div className="space-y-6 p-6">
            <h2 className="body-1">
              {defaultValues ? tb('save') : tb('submit')}
            </h2>

            <div className="flex flex-col gap-4">
              <FormField name="jobTitle" label={t('jobTitle')} required />
              <div className="grid lg:grid-cols-2 gap-4">
                <FormField
                  name="companyName"
                  label={t('companyName')}
                  required
                />
                <FormField
                  name="companyWebsite"
                  label={t('companyWebsite')}
                  rightIcon={<LinkIcon />}
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                <FormField
                  name="startDate.month"
                  label={t('startMonth')}
                  placeholder="MM"
                  required
                  rightIcon={<CalendarIcon />}
                />
                <FormField
                  name="startDate.year"
                  label={t('startYear')}
                  placeholder="YYYY"
                  required
                  rightIcon={<CalendarIcon />}
                />
              </div>

              <Checkbox
                label={t('currentlyWorking')}
                checked={currentlyWorking}
                onChange={() => setValue('currentlyWorking', !currentlyWorking)}
              />

              {!currentlyWorking && (
                <div className="grid lg:grid-cols-2 gap-4">
                  <FormField
                    name="endDate.month"
                    label={t('endMonth')}
                    placeholder="MM"
                    rightIcon={<CalendarIcon />}
                  />
                  <FormField
                    name="endDate.year"
                    label={t('endYear')}
                    placeholder="YYYY"
                    rightIcon={<CalendarIcon />}
                  />
                </div>
              )}

              <div className="grid lg:grid-cols-2 gap-4">
                <LocationFields />
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                <SelectField
                  name="workType"
                  label={t('workType')}
                  options={workTypes.map(({ value, labelKey }) => ({
                    value,
                    label: tOption(labelKey),
                  }))}
                  required
                />

                <SelectField
                  name="primaryRole"
                  label={t('primaryRole')}
                  options={primaryRoles.map(({ value, labelKey }) => ({
                    value,
                    label: tOption(labelKey),
                  }))}
                  required
                />
              </div>
              <FormField
                name="description"
                label={t('description')}
                multiline
                rows={3}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 py-4 px-8 mt-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <Button
              type="button"
              variant="secondary"
              color="black"
              onClick={onClose}
              responsiveSize={{
                'base': 'md',
                'lg': 'lg',
              }}
            >
              {tb('cancel')}
            </Button>
            <Button
              type="submit"
              color="black"
              responsiveSize={{
                'base': 'md',
                'lg': 'lg',
              }}
            >
              {defaultValues ? tb('save') : tb('submit')}
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default AddExperienceDialog;
