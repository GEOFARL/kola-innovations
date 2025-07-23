'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/ui/button/button';
import Checkbox from '@/components/ui/checkbox';
import FormField from '@/components/ui/form-field';
import Modal from '@/components/ui/modal';
import SelectField from '@/components/ui/select-field';

import { experienceItemSchema } from '@/lib/schemas/onboarding/experience.schema';
import { ExperienceItem } from '@/lib/types/onboarding/experience';

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
            <h2 className="body-1">Add Experience</h2>

            <div className="flex flex-col gap-4">
              <FormField name="jobTitle" label="Job Title" required />
              <div className="grid grid-cols-2 gap-4">
                <FormField name="companyName" label="Company name" required />
                <FormField name="companyWebsite" label="Company website" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  name="startDate.month"
                  label="Start Month"
                  placeholder="MM"
                  required
                />
                <FormField
                  name="startDate.year"
                  label="Start Year"
                  placeholder="YYYY"
                  required
                />
              </div>

              <Checkbox
                label="I am currently working in this role"
                checked={currentlyWorking}
                onChange={() => setValue('currentlyWorking', !currentlyWorking)}
              />

              {!currentlyWorking && (
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    name="endDate.month"
                    label="End Month"
                    placeholder="MM"
                  />
                  <FormField
                    name="endDate.year"
                    label="End Year"
                    placeholder="YYYY"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <FormField name="location.province" label="Province" required />
                <FormField name="location.city" label="City" required />
              </div>

              <SelectField
                name="workType"
                label="Work Type"
                options={[
                  { value: 'remote', label: 'Remote' },
                  { value: 'hybrid', label: 'Hybrid' },
                  { value: 'in-office', label: 'In Office' },
                ]}
                required
              />

              <FormField name="primaryRole" label="Your primary role" />
              <FormField
                name="description"
                label="About your role"
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
              size="lg"
            >
              Cancel
            </Button>
            <Button type="submit" color="black" size="lg">
              {defaultValues ? 'Save Changes' : 'Add Experience'}
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default AddExperienceDialog;
