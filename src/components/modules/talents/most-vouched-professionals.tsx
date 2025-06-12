'use client';

import { useTranslations } from 'next-intl';
import BadgeIcon from '@/assets/icons/badge.svg';
import StarIcon from '@/assets/icons/yellow-star.svg';
import Button from '@/components/ui/button/button';
import { Professional } from '@/lib/types/talents/professional';
import Image from 'next/image';

type Props = {
  professionals: Professional[];
};

const MostVouchedProfessionals: React.FC<Props> = ({ professionals }) => {
  const t = useTranslations('talents.mostVouched');

  return (
    <div className="mt-6 bg-white border border-dark-100 rounded-2xl p-6">
      <h2 className="body-1 text-dark-900 mb-4">{t('title')}</h2>
      <div className="flex gap-4 overflow-x-auto">
        {professionals.map((pro) => (
          <ProfessionalCard key={pro.name} pro={pro} />
        ))}
      </div>
    </div>
  );
};

type ProfessionalCardProps = {
  pro: Professional;
};

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ pro }) => {
  const t = useTranslations('talents.mostVouched');

  return (
    <div className="flex-shrink-0 w-[275px] border border-dark-100 rounded-2xl p-4 bg-white">
      <div className="flex justify-between items-start">
        <Image
          src={pro.avatar}
          alt={pro.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <Button
          size="sm"
          variant="secondary"
          className="text-primary px-3 py-1"
        >
          {t('connect')}
        </Button>
      </div>
      <div className="mt-4">
        <p className="h6 text-dark-900">{pro.name}</p>
        <p className="text-dark-600 small-1">{pro.title}</p>
      </div>
      <div className="flex items-center gap-6 mt-6 text-dark-700 small-1 text-sm">
        <div className="flex items-center gap-1">
          <StarIcon />
          <span>{pro.rating}</span>
          <span>({pro.votes.toLocaleString()})</span>
        </div>
        <div className="flex items-center gap-1">
          <BadgeIcon />
          <span>{pro.endorsements}</span>
        </div>
      </div>
    </div>
  );
};

export default MostVouchedProfessionals;
