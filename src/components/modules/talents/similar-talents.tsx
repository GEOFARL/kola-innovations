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
    <div className="p-6">
      <h2 className="h6 text-dark-900 mb-6">{t('title')}</h2>

      <div className="space-y-6">
        {sampleProfessionals.slice(0, 3).map((talent, idx) => (
          <Fragment key={talent.id}>
            <div className={cn('flex gap-4')}>
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={talent.avatar}
                  alt={talent.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <p className="body-2 text-dark-900">{talent.name}</p>
                <p className="small-1 text-dark-700 mt-1">{talent.title}</p>
                <Button
                  variant="text-link"
                  onClick={() => {
                    router.push(APP_ROUTES.TALENT_DETAILS(talent.id));
                  }}
                  className="p-0 mt-4 min-h-5!"
                  color="black"
                >
                  {t('viewProfile')} ↗
                </Button>
              </div>
            </div>
            {idx !== 2 && <div className="h-[1px] bg-dark-100" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SimilarTalents;
