'use client';

import SwiggleArrow from '@/assets/icons/swiggle-arrow.svg';
import people from '@/assets/images/people.png';
import { cn } from '@/lib/cn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HeroStatBubble: React.FC = () => {
  const t = useTranslations('landing.hero.bubble');

  return (
    <div
      className={cn(
        'relative self-end sm:self-auto top-[30px] sm:top-auto right-[40px] sm:right-auto sm:absolute sm:-bottom-[90px] xl:-bottom-[10px] sm:left-[160px] scale-60 sm:scale-80 lg:scale-100',
      )}
    >
      <SwiggleArrow className="-rotate-[30deg] scale-80 sm:scale-100 absolute -top-[90px] -left-[30px] sm:static sm:rotate-0" />
      <div className="relative -top-[45px] left-[140px] shadow-[0_2px_4px_rgba(0,0,0,0.08)] px-3 py-2 rounded-[8px] flex items-center gap-4">
        <Image src={people} alt="people" width={112} height={32} />
        <p className="max-w-[120px] sm:max-w-[180px] small-1 text-[12px] sm:text-[14px] w-full">
          100+ <span className="font-[400]">{t('label')}</span>
        </p>
      </div>
    </div>
  );
};

export default HeroStatBubble;
