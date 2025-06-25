import { profileSettingsSchema } from '@/lib/schemas/profile/settings-schema';
import { StaticImageData } from 'next/image';
import { z } from 'zod';

export type User = {
  fullName: string;
  avatarUrl: string | StaticImageData;
  location: string;
  email: string;
  phone: string;
  ethnicity: string;
  brief: string;
  job: string;
  skills?: string[];
};

export type ProfileSettingsData = z.infer<typeof profileSettingsSchema>;
