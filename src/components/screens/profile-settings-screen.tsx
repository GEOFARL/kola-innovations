'use client';

import { profileSettingsSchema } from '@/lib/schemas/profile/settings-schema';
import { ProfileSettingsData } from '@/lib/types/profile';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import ProfileHeader from '../modules/profile/header';
import PersonalInformation from '../modules/profile/settings/personal-information';
import Skills from '../modules/profile/settings/skills';
import Socials from '../modules/profile/settings/socials';
import Button from '../ui/button/button';

const initialData: ProfileSettingsData = {
  firstName: 'Cameron',
  lastName: 'Williamson',
  email: 'cameron.w@gmail.com',
  phone: '(416) 555-1234',
  jobTitle: 'Musician',
  username: 'cameron.w12',
  location: { province: 'quebec', city: 'montreal' },
  brief: '',
  languages: ['english', 'french'],
  ethnicity: '',
  orientation: '',
  hasDisability: true,
  disability: 'vision',
  skills: [],
  socials: {
    twitter: '',
    linkedin: '',
    instagram: '',
    youtube: '',
  },
};

const ProfileSettingsScreen: React.FC = () => {
  const t = useTranslations('profile');
  const methods = useForm<ProfileSettingsData>({
    resolver: zodResolver(profileSettingsSchema),
    defaultValues: initialData,
  });
  const handleCancel = () => methods.reset(initialData);
  const handleSave = methods.handleSubmit((data) => console.log('Save', data));

  return (
    <div className="space-y-6 h-full overflow-auto pb-20">
      <ProfileHeader title={t('header.settings')} />

      <FormProvider {...methods}>
        <form onSubmit={handleSave} className="space-y-6">
          <PersonalInformation />
          <Skills />
          <Socials />

          <div className="absolute bottom-0 left-0 w-full bg-white py-4 px-8 shadow-[0_4px_4px_rgba(0,0,0,1)] z-50 flex items-center gap-4 justify-end">
            <Button
              onClick={handleCancel}
              type="button"
              variant="secondary"
              color="black"
            >
              Cancel
            </Button>
            <Button type="submit" color="black">
              Save
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProfileSettingsScreen;
