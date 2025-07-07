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
      <MaxWidthWrapper className="relative flex-col items-center lg:flex-row flex justify-between py-3 sm:py-12 sm:pb-24 lg:pb-20 lg:py-20 mb-4 sm:mb-0">
        <article className="flex flex-col items-start max-w-[708px] sm:py-[50px] xl:py-[111px]">
          <header className="mb-4">
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full flex gap-2 h-[36px] text-[12px]! sm:text-[14px] sm:h-[40px] px-3 py-2"
            >
              <StarIcon />
              {t('exploreOpportunities')}
            </Button>
          </header>

          <h1 className="h1 mb-4 sm:mb-6">{t('headline')}</h1>

          <div className="border-l-[2px] border-primary sm:mb-12">
            <p className="h6-rg text-dark-700 ml-4">{t('subtext')}</p>
          </div>

          <HeroSearchBox className="hidden lg:block" />
        </article>

        <div className="shrink-0 w-full sm:w-auto flex-1 justify-end flex lg:self-start">
          <div className="w-full sm:w-[500px] xl:w-[658px] my-4 sm:my-0">
            <Image
              src={heroCircle}
              alt="hero circle"
              layout="responsive"
              width={658}
              height={618}
            />
          </div>
        </div>
        <HeroSearchBox className="block lg:hidden" />
        <HeroStatBubble />
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
