'use client';

import MedalIcon from '@/assets/icons/onboarding/medal.svg';
import PlusIcon from '@/assets/icons/onboarding/plus.svg';
import Button from '@/components/ui/button/button';
import { useTranslations } from 'next-intl';

const AddProjectButton: React.FC = () => {
  const t = useTranslations('onboarding.portfolio');

  return (
    <Button
      variant="secondary"
      color="red"
      size="md"
      className="w-full justify-start mt-6"
    >
      <MedalIcon className="mr-2 mb-[2px]" />
      {t('addProject')}
      <PlusIcon className="ml-auto" />
    </Button>
  );
};

export default AddProjectButton;
