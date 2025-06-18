'use client';

import Header from '@/components/modules/shared/header/header';
import TalentsFilters from '@/components/modules/talents/filters';
import ProfessionalAnalytics from '@/components/modules/talents/professional-analytics';
import TalentsSidebar from '@/components/modules/talents/sidebar';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

const LayoutProfessionals: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const [, _, ...rest] = pathname?.split('/') ?? [];
  const normalizedPath = rest.join('/');

  const isDetailsPage =
    normalizedPath.startsWith('talents/') && rest.length === 2;

  return (
    <>
      <Header />
      <MaxWidthWrapper className="grid grid-cols-[220px_1fr_342px] h-[calc(100vh-88px)]">
        <aside className="sticky top-0 h-full overflow-y-auto border-r border-dark-100 bg-white">
          <TalentsSidebar />
        </aside>

        <section className="overflow-y-auto p-6 bg-[#FAFAFA]">
          {children}
        </section>

        <aside className="sticky top-0 h-full overflow-y-auto border-l border-dark-100 bg-white">
          {isDetailsPage ? <ProfessionalAnalytics /> : <TalentsFilters />}
        </aside>
      </MaxWidthWrapper>
    </>
  );
};

export default LayoutProfessionals;
