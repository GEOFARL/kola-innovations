'use client';

import LogoIcon from '@/assets/icons/logo.svg';
import VerifiedIcon from '@/assets/icons/verified.svg';
import formBgImage from '@/assets/images/form-bg.png';
import peopleImage from '@/assets/images/people.png';
import ramonImage from '@/assets/images/ramon.png';
import starsRatingImage from '@/assets/images/stars-rating.png';
import Button from '@/components/ui/button/button';
import { cn } from '@/lib/cn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement>;

const AuthNetworkingOpportunities: React.FC<Props> = ({ className }) => {
  const t = useTranslations('landing.authModal');

  return (
    <div
      className={cn(
        'px-[55px] py-6 lg:p-10 bg-primary-100 hidden md:flex flex-col gap-[34px] lg:gap-[78px] relative overflow-hidden',
        className,
      )}
    >
      <LogoIcon className="hidden lg:block" />

      <Image
        src={formBgImage}
        alt="form bg image"
        width={306}
        height={306}
        className="absolute -right-[240px] top-[50%] translate-y-[-50%] z-0 md:block hidden"
      />

      <div className="lg:flex-1 max-w-[260px] lg:max-w-[360px] mx-auto">
        <div className="mb-[20px] lg:mb-[53px] text-center">
          <h6 className="font-semibold text-[14px] sm:text-[20px] leading-[140%] tracking-[-0.22px] mb-2 text-dark-900">
            {t('left.title')}
          </h6>
          <p className="text-dark-700 small-2-rg font-[400]!">
            {t('left.description')}
          </p>
        </div>
        <ConnectCard />
      </div>

      <div className="flex items-center -ml-[30px] lg:ml-0 gap-4">
        <Image src={peopleImage} alt="people" width={132} height={42} />
        <p className="max-w-[132px] small-1 font-[400]! text-dark-900">
          <span className="font-[600]">100+</span> {t('left.bubble')}
        </p>
      </div>
    </div>
  );
};

const ConnectCard: React.FC = () => {
  const t = useTranslations('landing.authModal.connectCard');

  return (
    <div className="relative p-3 lg:p-4 rounded-[12px] lg:rounded-[16px] border-[1px] border-dark-100 bg-dark-white shadow-[0_0px_4px_rgba(0,0,0,0.12)]">
      <div className="flex justify-between items-start mb-3 lg:mb-4">
        <Image
          src={ramonImage}
          alt="Ramon Alberto"
          width={48}
          height={48}
          className="h-9 w-9 lg:h-12 lg:w-12"
        />
        <Button className="hidden lg:flex">{t('connect')}</Button>
        <Button size="sm" className="lg:hidden text-[10px]!">
          {t('connect')}
        </Button>
      </div>

      <div className="mb-6">
        <h6 className="font-semibold text-[14px] sm:text-[20px] leading-[140%] tracking-[-0.3px] text-dark-900">
          {t('name')}
        </h6>
        <p className="text-dark-600 font-semibold text-[10px] lg:text-[14px] leading-[150%]">
          {t('title')}
        </p>
      </div>

      <p className="line-clamp-3 small-1-md text-dark-700">{t('bio')}</p>

      <div className="absolute bg-dark-white rounded-[8px] -left-[30px] -bottom-[10px] p-2 flex flex-col gap-2 lg:gap-[12px] shadow-[0_0px_4px_rgba(0,0,0,0.12)] w-[80px] lg:w-auto">
        <Image
          src={starsRatingImage}
          alt="stars rating"
          width={103}
          height={16}
          className="scale-75 text-left lg:scale-100"
        />
        <p className="font-medium text-[10px] sm:text-[14px] leading-[150%] text-dark-700">
          {t('rating')}
        </p>
      </div>

      <div className="absolute bg-dark-white items-center rounded-[8px] -right-[30px] top-[80px] p-[6px] lg:p-2 flex gap-[9px] lg:gap-[12px] shadow-[0_0px_4px_rgba(0,0,0,0.12)]">
        <p className="font-medium text-[9px] lg:text-[14px] leading-[150%] text-dark-700">
          {t('verified')}
        </p>
        <VerifiedIcon className="scale-75 lg:scale-100" />
      </div>
    </div>
  );
};

export default AuthNetworkingOpportunities;
