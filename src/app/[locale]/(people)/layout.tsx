'use client';

import Header from '@/components/modules/shared/header/header';
import TalentsFilters from '@/components/modules/talents/filters';
import ProfessionalAnalytics from '@/components/modules/talents/professional-analytics';
import TalentsSidebar from '@/components/modules/talents/sidebar';
import SimilarTalents from '@/components/modules/talents/similar-talents';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

const LayoutProfessionals: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const [, _, ...rest] = pathname?.split('/') ?? [];
  const normalizedPath = rest.join('/');

  const routeType = (() => {
    const isDetails =
      normalizedPath.startsWith(APP_ROUTES.PROFESSIONALS.slice(1)) &&
      rest.length === 2;
    const isTalents =
      normalizedPath.startsWith(APP_ROUTES.TALENTS.slice(1)) &&
      rest.length === 1;

    if (isDetails) return 'professional:detail';
    if (isTalents) return 'talents:list';
    return 'default';
  })();

  const rightSidebarContentMap: Record<string, React.ReactNode> = {
    'professional:detail': <ProfessionalAnalytics />,
    'talents:list': <SimilarTalents />,
    default: <TalentsFilters />,
  };

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
          {rightSidebarContentMap[routeType]}
        </aside>
      </MaxWidthWrapper>
    </>
  );
};

export default LayoutProfessionals;
