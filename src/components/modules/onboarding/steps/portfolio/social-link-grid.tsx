'use client';

import { Controller, Control } from 'react-hook-form';
import { OnboardingDataMap } from '@/lib/types/onboarding/store';
import FormField from '@/components/ui/form-field';
import { socialPlatforms } from '@/lib/constants/onboarding/socials-config';

type Props = {
  control: Control<OnboardingDataMap['portfolio']>;
};

const SocialLinkGrid: React.FC<Props> = ({ control }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 mt-6">
      {socialPlatforms.map(({ name, label, Icon }, index) => (
        <Controller
          key={name}
          name={`links.${index}.url`}
          control={control}
          render={({ field }) => (
            <FormField
              {...field}
              name={`links.${index}.url`}
              placeholder={label}
              leftIcon={<Icon className="scale-90" />}
            />
          )}
        />
      ))}
    </div>
  );
};

export default SocialLinkGrid;
