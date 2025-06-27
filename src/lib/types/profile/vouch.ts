import { StaticImageData } from 'next/image';

export type VouchRequest = {
  name: string;
  relationship: string;
  image: StaticImageData;
};
