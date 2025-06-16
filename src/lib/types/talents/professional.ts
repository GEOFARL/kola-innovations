import { StaticImageData } from 'next/image';

export type Professional = {
  id: string;
  name: string;
  title: string;
  avatar: StaticImageData;
  rating: number;
  votes: number;
  endorsements: number;
  bio?: string;
  tags?: string[];
  languages?: string[];
};
