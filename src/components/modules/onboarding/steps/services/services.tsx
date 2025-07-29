'use client';

import AddButton from '@/components/modules/shared/onboarding/add-button';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';
import { ServiceData } from '@/lib/types/onboarding/services';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ServiceCard from './service-card';
import ServiceDialog from './service-dialog';

const Services: React.FC = () => {
  const { data, setStepData } = useOnboardingStore();
  const t = useTranslations('onboarding.services');

  const services = data.services?.services || [];
  const isActive = data.services?.isActive ?? false;

  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSave = (service: ServiceData) => {
    const updatedServices =
      editIndex !== null
        ? services.map((s, i) => (i === editIndex ? service : s))
        : [...services, service];

    setStepData('services', {
      isActive,
      services: updatedServices,
    });
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setStepData('services', {
      isActive,
      services: updatedServices,
    });
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <AddButton
        label={t('buttons.addService')}
        onClick={() => setOpen(true)}
      />

      {services.map((service, idx) => (
        <ServiceCard
          key={idx}
          service={service}
          editLabel={t('buttons.edit')}
          deleteLabel={t('buttons.delete')}
          onEdit={() => {
            setEditIndex(idx);
            setOpen(true);
          }}
          onDelete={() => handleDelete(idx)}
        />
      ))}

      {open && (
        <ServiceDialog
          open={open}
          onClose={() => {
            setOpen(false);
            setEditIndex(null);
          }}
          onSubmit={handleSave}
          defaultValues={editIndex !== null ? services[editIndex] : undefined}
        />
      )}
    </div>
  );
};

export default Services;
