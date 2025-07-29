'use client';

import DollarIcon from '@/assets/icons/dollar.svg';
import Button from '@/components/ui/button/button';
import FileUploadField from '@/components/ui/file-upload-field';
import FormField from '@/components/ui/form-field';
import Modal from '@/components/ui/modal';
import { serviceSchema } from '@/lib/schemas/onboarding/services.schema';
import { ServiceData } from '@/lib/types/onboarding/services';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (service: ServiceData) => void;
  defaultValues?: ServiceData;
};

const ServiceDialog: React.FC<Props> = ({
  open,
  onClose,
  onSubmit,
  defaultValues,
}) => {
  const t = useTranslations('onboarding.services');

  const methods = useForm<ServiceData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: defaultValues ?? {
      service: '',
      brief: '',
      fixedCost: { min: undefined, max: undefined },
      fixedCostBenefits: '',
      hourlyCost: { min: undefined, max: undefined },
      hourlyCostBenefits: '',
      dayRate: { min: undefined, max: undefined },
      dayRateBenefits: '',
      image: undefined,
    },
  });

  const { register, handleSubmit } = methods;

  const handleSave = handleSubmit((values: ServiceData) => {
    const image =
      values.image instanceof File
        ? URL.createObjectURL(values.image)
        : values.image;
    onSubmit({ ...values, image });
    onClose();
  });

  return (
    <Modal
      open={open}
      onOpenChange={onClose}
      className="max-w-[830px] w-[calc(100%-32px)] rounded-lg"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSave} className="flex flex-col">
          <div className="space-y-4 p-6">
            <h2 className="text-lg font-semibold">
              {defaultValues ? t('editService') : t('addService')}
            </h2>

            <FormField name="service" label={t('fields.service')} required />
            <FormField
              name="brief"
              label={t('fields.brief')}
              multiline
              rows={4}
              required
            />

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-[10px] lg:text-[14px] leading-[150%] text-dark-600 mb-1">
                  {t('fields.fixedCost')}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    placeholder={t('fields.min')}
                    type="number"
                    rightIcon={<DollarIcon />}
                    {...register('fixedCost.min', { valueAsNumber: true })}
                  />
                  <FormField
                    placeholder={t('fields.max')}
                    type="number"
                    rightIcon={<DollarIcon />}
                    {...register('fixedCost.max', { valueAsNumber: true })}
                  />
                </div>
              </div>
              <FormField
                name="fixedCostBenefits"
                label={t('fields.fixedCostBenefits')}
                multiline
                rows={2}
              />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-[10px] lg:text-[14px] leading-[150%] text-dark-600 mb-1">
                  {t('fields.hourlyCost')}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    placeholder={t('fields.min')}
                    type="number"
                    rightIcon={<DollarIcon />}
                    {...register('hourlyCost.min', { valueAsNumber: true })}
                  />
                  <FormField
                    placeholder={t('fields.max')}
                    type="number"
                    rightIcon={<DollarIcon />}
                    {...register('hourlyCost.max', { valueAsNumber: true })}
                  />
                </div>
              </div>
              <FormField
                name="hourlyCostBenefits"
                label={t('fields.hourlyCostBenefits')}
                multiline
                rows={2}
              />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-[10px] lg:text-[14px] leading-[150%] text-dark-600 mb-1">
                  {t('fields.dayRate')}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    placeholder={t('fields.min')}
                    type="number"
                    rightIcon={<DollarIcon />}
                    {...register('dayRate.min', { valueAsNumber: true })}
                  />
                  <FormField
                    placeholder={t('fields.max')}
                    type="number"
                    rightIcon={<DollarIcon />}
                    {...register('dayRate.max', { valueAsNumber: true })}
                  />
                </div>
              </div>
              <FormField
                name="dayRateBenefits"
                label={t('fields.dayRateBenefits')}
                multiline
                rows={2}
              />
            </div>

            <FileUploadField
              name="image"
              label={t('fields.image')}
              accept=".jpeg,.jpg,.png"
              hint={t('fields.imageHint')}
              iconVariant="red"
            />
          </div>

          <div className="flex justify-end gap-4 py-4 px-8 mt-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <Button
              type="button"
              variant="secondary"
              color="black"
              onClick={onClose}
            >
              {t('buttons.cancel')}
            </Button>
            <Button type="submit" color="black">
              {defaultValues ? t('buttons.edit') : t('buttons.save')}
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default ServiceDialog;
