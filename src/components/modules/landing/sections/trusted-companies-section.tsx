'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import facebook from '@/assets/images/logos/facebook.png';
import google from '@/assets/images/logos/google.png';
import spotify from '@/assets/images/logos/spotify.png';
import youtube from '@/assets/images/logos/youtube.png';
import youtubeMusic from '@/assets/images/logos/youtube-music.png';
import pandora from '@/assets/images/logos/pandora.png';

const logos = [
  { src: google, alt: 'Google' },
  { src: spotify, alt: 'Spotify' },
  { src: facebook, alt: 'Facebook' },
  { src: youtube, alt: 'YouTube' },
  { src: pandora, alt: 'Pandora' },
  { src: youtubeMusic, alt: 'YouTube Music' },
];

const TrustedCompaniesSection: React.FC = () => {
  const t = useTranslations('landing.trustedCompanies');

  return (
    <section className="py-6 sm:py-10 sm:min-h-[180px]">
      <div className="ml-3 sm:ml-0 sm:text-center font-semibold leading-[140%] text-[12px] sm:text-[18px] text-gray-600 mb-6 sm:mb-10">
        {t('label')}
      </div>

      <Marquee gradient={false} speed={40} pauseOnHover>
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="px-3 sm:px-15 flex items-center justify-center shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={35}
              className="h-[28px] sm:h-[35px] w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustedCompaniesSection;
