'use client';

import ProfileSidebar from '@/components/modules/profile/sidebar';
import Header from '@/components/modules/shared/header/header';
import Analytics from '@/components/modules/talents/analytics';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';

const LayoutProfile: React.FC<PropsWithChildren> = ({ children }) => {
  const t = useTranslations('profile');

  return (
    <>
      <Header />
      <MaxWidthWrapper className="grid grid-cols-[220px_1fr_342px] h-[calc(100vh-88px)]">
        <aside className="sticky top-0 h-full overflow-y-auto border-r border-dark-100 bg-white">
          <ProfileSidebar />
        </aside>

        <section className="overflow-y-auto relative p-6 bg-[#FAFAFA]">
          {children}
        </section>

        <aside className="sticky top-0 h-full overflow-y-auto border-l border-dark-100 bg-white">
          <Analytics
            title={t('analytics.title')}
            items={[
              { label: t('analytics.profileViews'), value: 30 },
              { label: t('analytics.vouches'), value: 4 },
            ]}
          />
        </aside>
      </MaxWidthWrapper>
    </>
  );
};

export default LayoutProfile;
