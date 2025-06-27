'use client';

import Check from '@/assets/icons/check-green.svg';
import profileImage from '@/assets/images/profile.jpg';
import Card from '@/components/ui/card';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const VouchInfo: React.FC = () => {
  const [isShown, setIsShown] = useState(true);
  const t = useTranslations('profile.vouch');
  if (!isShown) return null;

  return (
    <Card className="relative px-4 py-6 sm:px-6 md:px-10 md:py-8">
      <div
        className="absolute top-4 right-4 text-gray-500 hover:text-black h-5 w-5 flex items-center justify-center rounded-full border-[1.5px] border-[#292D32] cursor-pointer"
        onClick={() => setIsShown(false)}
      >
        <X className="w-3 h-3 text-[#292D32]" />
      </div>

      <div className="space-y-8 md:space-y-10">
        <div className="space-y-3 text-center">
          <h6 className="body-2 text-dark-600">{t('whatIs')}</h6>
          <p className="body-1-rg text-dark-900">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 items-center">
          <Image
            src={profileImage}
            alt="Studio"
            width={355}
            height={264}
            className="w-full h-auto max-h-[264px] object-cover rounded-lg"
            priority
          />

          <div>
            <h6 className="body-2 text-dark-900 mb-3">
              {t('keyAspects.title')}
            </h6>
            <ul className="space-y-3">
              {t.raw('keyAspects.items').map((text: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-2 body-2-rg text-dark-700"
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

export default VouchInfo;
