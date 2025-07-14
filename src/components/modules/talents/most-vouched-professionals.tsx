'use client';

import BadgeIcon from '@/assets/icons/badge.svg';
import ConnectIcon from '@/assets/icons/connect.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import StarIcon from '@/assets/icons/yellow-star.svg';
import Button from '@/components/ui/button/button';
import { Professional } from '@/lib/types/talents/professional';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type Props = {
  professionals: Professional[];
};

const MostVouchedProfessionals: React.FC<Props> = ({ professionals }) => {
  const t = useTranslations('talents.mostVouched');

  return (
    <div className="mt-6 bg-white border border-dark-100 rounded-[8px] lg:rounded-2xl p-3 lg:p-6">
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
    <div className="flex-shrink-0 w-[275px] border border-dark-100 rounded-2xl p-3 lg:p-4 bg-white">
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
          className="text-primary px-3 py-1 hidden lg:flex"
        >
          {t('connect')}
        </Button>
        <button className="cursor-pointer hover:bg-dark-100 lg:hidden px-2 py-[7px] border-[1px] border-dark-200 rounded-[34px] flex items-center gap-1 [&_rect]:fill-primary text-dark-white">
          <ConnectIcon />
          <PlusIcon className="text-primary" />
        </button>
      </div>
      <div className="mt-4">
        <p className="font-semibold text-[18px] lg:text-[20px] leading-[140%] tracking-[-0.3px] text-dark-900">
          {pro.name}
        </p>
        <p className="text-dark-600 small-1">{pro.title}</p>
      </div>
      <div className="flex items-center gap-6 mt-[18px] lg:mt-6 text-dark-700 small-1 text-sm!">
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
