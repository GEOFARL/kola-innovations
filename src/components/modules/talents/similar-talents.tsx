'use client';

import Button from '@/components/ui/button/button';
import { cn } from '@/lib/cn';
import { sampleProfessionals } from '@/lib/constants/professionals/sample-professionals';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

const SimilarTalents: React.FC = () => {
  const t = useTranslations('talents.similar');
  const router = useRouter();

  return (
    <div className="h-full lg:h-auto flex lg:block flex-col lg:p-6">
      <h2 className="h6 hidden lg:block text-dark-900 mb-6">{t('title')}</h2>

      <div className="py-6 px-[10px] space-y-[10px] lg:pace-y-6 flex-1">
        {sampleProfessionals.slice(0, 3).map((talent, idx) => (
          <Fragment key={talent.id}>
            <div className={cn('flex gap-4')}>
              <div className="overflow-hidden">
                <Image
                  src={talent.avatar}
                  alt={talent.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover h-12 w-12 lg:w-[56px] lg:h-[56px]"
                />
              </div>
              <div className="flex-1">
                <p className="body-2 text-dark-900">{talent.name}</p>
                <p className="small-1 font-[400]! text-dark-700 mt-1">
                  {talent.title}
                </p>
                <Button
                  variant="text-link"
                  onClick={() => {
                    router.push(APP_ROUTES.TALENT_DETAILS(talent.id));
                  }}
                  className="p-0 ml-auto text-[14px]! sm:text-[14px]! lg:ml-0 mt-4 min-h-5!"
                  color="black"
                >
                  {t('viewProfile')} ↗
                </Button>
              </div>
            </div>
            <div
              className={cn(
                'h-[1px] bg-dark-100',
                sampleProfessionals.length - 1 === idx && 'hidden lg:block',
              )}
            />
          </Fragment>
        ))}
      </div>

      <div className="py-[20px] border-t-[1px] lg:border-t-0 border-dark-200 lg:mt-6">
        <Button
          variant="text-link"
          className="p-0 mx-auto min-h-5! justify-start"
          onClick={() => router.push(APP_ROUTES.TALENTS)}
        >
          {t('exploreAll')} ↗
        </Button>
      </div>
    </div>
  );
};

export default SimilarTalents;
