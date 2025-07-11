'use client';

import InstagramIcon from '@/assets/icons/social/instagram-color.svg';
import LinkedinIcon from '@/assets/icons/social/linkedin.svg';
import Image, { StaticImageData } from 'next/image';
import TagChip from '@/components/ui/tag-chip';
import { useTranslations } from 'next-intl';

type Props = {
  name: string;
  title: string;
  avatar: StaticImageData;
  bio: string;
  tags: string[];
  languages: string[];
};

const ProfessionalMain: React.FC<Props> = ({
  name,
  title,
  avatar,
  bio,
  tags,
  languages,
}) => {
  const t = useTranslations('talents.details');

  return (
    <div className="bg-white rounded-2xl py-6 px-3 lg:py-8 lg:px-10">
      <div className="flex flex-col items-center space-y-4 lg:space-y-6">
        <div className="w-20 h-20 lg:w-[100px] lg:h-[100px] relative">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="text-center">
          <h2 className="font-semibold sm:font-semibold text-[20px] sm:text-[20px] leading-[140%] tracking-[-0.3px]">
            {name}
          </h2>
          <p className="body-2-md text-dark-600 mt-2">{title}</p>
        </div>

        <div className="flex items-center gap-2">
          <LinkedinIcon />
          <InstagramIcon />
        </div>

        <p className="body-2-rg text-dark-700 text-center max-w-2xl">{bio}</p>

        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <TagChip
              className="py-1 px-3 small-2-md text-dark-900"
              key={tag}
              label={tag}
              variant="static"
            />
          ))}
        </div>

        <div className="self-start">
          <p className="small-1 text-dark-900 mb-4">{t('languages')}</p>
          <div className="flex gap-2 flex-wrap">
            {languages.map((lang) => (
              <TagChip
                className="py-1 px-3 small-1-md text-dark-900"
                key={lang}
                label={lang}
                variant="static"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalMain;
