'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SwiggleArrow from '@/assets/icons/swiggle-arrow.svg';
import people from '@/assets/images/people.png';

const HeroStatBubble: React.FC = () => {
  const t = useTranslations('landing.hero.bubble');

  return (
    <div className="absolute -bottom-[70px] xl:-bottom-[10px] left-[160px]">
      <SwiggleArrow />
      <div className="relative -top-[45px] left-[140px] shadow-[0_2px_4px_rgba(0,0,0,0.08)] px-3 py-2 rounded-[8px] flex items-center gap-4">
        <Image src={people} alt="people" width={112} height={32} />
        <p className="max-w-[180px] small-1 w-full">
          100+ <span className="font-[400]">{t('label')}</span>
        </p>
      </div>
    </div>
  );
};

export default HeroStatBubble;
