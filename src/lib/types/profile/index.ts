import { StaticImageData } from 'next/image';

export type User = {
  fullName: string;
  avatarUrl: string | StaticImageData;
  location: string;
  email: string;
  phone: string;
  ethnicity: string;
  brief: string;
  job: string;
};
