'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import StarIcon from '@/assets/icons/star.svg';
import heroCircle from '@/assets/images/hero-circle.png';
import Button from '@/components/ui/button/button';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import HeroSearchBox from '../hero/hero-search-box';
import HeroStatBubble from '../hero/hero-stat-bubble';

const HeroSection: React.FC = () => {
  const t = useTranslations('landing.hero');

  return (
    <section>
      <MaxWidthWrapper className="relative flex justify-between py-20">
        <article className="flex flex-col items-start max-w-[708px] py-[111px]">
          <header className="mb-4">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full flex gap-2 h-[40px] px-3 py-2"
            >
              <StarIcon />
              {t('exploreOpportunities')}
            </Button>
          </header>

          <h1 className="h1 mb-6">{t('headline')}</h1>

          <div className="border-l-[2px] border-primary mb-12">
            <p className="h6-rg text-dark-700 ml-4">{t('subtext')}</p>
          </div>

          <HeroSearchBox />
        </article>

        <div className="shrink-0 self-start">
          <Image height={618} width={658} src={heroCircle} alt="hero circle" />
        </div>

        <HeroStatBubble />
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
