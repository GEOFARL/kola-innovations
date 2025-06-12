import { StaticImageData } from 'next/image';

export type Professional = {
  name: string;
  title: string;
  avatar: StaticImageData;
  rating: number;
  votes: number;
  endorsements: number;
};
