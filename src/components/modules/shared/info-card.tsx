'use client';

import Check from '@/assets/icons/check-green.svg';
import Card from '@/components/ui/card';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

type Props = {
  withClose?: boolean;
  title: string;
  description: string;
  items: {
    title: string;
    values: string[];
  };
  image: StaticImageData;
};

const InfoCard: React.FC<Props> = ({
  title,
  description,
  items,
  image,
  withClose = false,
}) => {
  const [isShown, setIsShown] = useState(true);
  const t = useTranslations('profile.vouch');
  if (!isShown && withClose) return null;

  return (
    <Card className="relative pt-10 pb-6 px-3 lg:px-4 lg:py-6 sm:px-6 md:px-10 md:py-8 rounded-[6px] lg:rounded-[16px]">
      {withClose && (
        <div
          className="absolute top-10 lg:top-4 right-4 text-gray-500 hover:text-black h-5 w-5 flex items-center justify-center rounded-full border-[1.5px] border-[#292D32] cursor-pointer"
          onClick={() => setIsShown(false)}
        >
          <X className="w-3 h-3 text-[#292D32]" />
        </div>
      )}

      <div className="space-y-8 md:space-y-10">
        <div className="space-y-2 lg:space-y-3 lg:text-center">
          <h6 className="body-2 text-dark-600">{title}</h6>
          <p className="body-1-rg text-dark-600 lg:text-dark-900">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-8 md:gap-10 items-center">
          <Image
            src={image}
            alt="Studio"
            width={355}
            height={264}
            className="w-full h-auto lg:max-h-[264px] min-h-[327px] lg:min-h-auto object-cover rounded-lg"
            priority
          />

          <div>
            <h6 className="body-2 text-dark-900 mb-4 lg:mb-3">{items.title}</h6>
            <ul className="space-y-3">
              {items.values.map((text: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-2 body-2-rg text-[14px]! lg:text-[16px]! font-[500]! text-dark-700"
                >
                  <Check className="min-w-5 mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;
