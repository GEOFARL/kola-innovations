'use client';

import BookmarkIcon from '@/assets/icons/header/save.svg';
import LocationIcon from '@/assets/icons/talents/location.svg';
import BadgeIcon from '@/assets/icons/talents/badge.svg';
import Button from '@/components/ui/button/button';
import { Professional } from '@/lib/types/talents/professional';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type Props = {
  professionals: Professional[];
};

const AllProfessionals: React.FC<Props> = ({ professionals }) => {
  const t = useTranslations('talents.all');

  return (
    <div className="mt-6">
      <h2 className="body-1 text-dark-900 mb-6">{t('title')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {professionals.map((pro) => (
          <div
            key={pro.name}
            className="border-[1px] border-dark-100 rounded-2xl p-4 bg-white relative"
          >
            <Button
              iconOnly
              size="sm"
              iconCircle
              className="absolute top-4 right-4"
            >
              <BookmarkIcon />
            </Button>

            <div className="flex flex-col gap-4">
              <Image
                src={pro.avatar}
                alt={pro.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="h6 text-dark-900 mb-1">{pro.name}</p>
                <p className="small-1 text-dark-600">{pro.title}</p>
              </div>
            </div>

            <p className="small-1-md text-dark-700 mt-4 line-clamp-2">
              Interdum donec laoreet malesuada a gravida vivamus tempor. Eu
              magnis lectus in molestie ultricies eu...
            </p>

            <div className="flex items-center text-dark-700 small-1 mt-6 gap-6">
              <p className="flex gap-2 items-center flex-1">
                <LocationIcon /> Pickering, ON
              </p>
              <p className="flex-1 flex gap-2 items-center">
                <BadgeIcon />
                {pro.endorsements}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-dark-100 px-3 py-1 rounded-full small-2-md text-dark-900">
                Vocal Technique
              </span>
              <span className="bg-dark-100 px-3 py-1 rounded-full small-2-md text-dark-900">
                Music Composition
              </span>
              <span className="bg-dark-100 px-3 py-1 rounded-full small-2-md text-dark-900">
                +2
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProfessionals;
