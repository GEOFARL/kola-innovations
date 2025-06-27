'use client';

import Header from '@/components/modules/shared/header/header';
import Analytics from '@/components/modules/talents/analytics';
import TalentsFilters from '@/components/modules/talents/filters';
import TalentsSidebar from '@/components/modules/talents/sidebar';
import SimilarTalents from '@/components/modules/talents/similar-talents';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, ReactNode } from 'react';

type RouteType =
  | 'professional:detail'
  | 'talent:detail'
  | 'talents:list'
  | 'settings'
  | 'default';

const getRouteType = (pathname: string): RouteType => {
  const [, , ...rest] = pathname?.split('/') ?? [];
  const normalizedPath = rest.join('/');

  const isProfessionalDetails =
    normalizedPath.startsWith(APP_ROUTES.PROFESSIONALS.slice(1)) &&
    rest.length === 2;

  const isTalentDetails =
    normalizedPath.startsWith(APP_ROUTES.TALENTS.slice(1)) && rest.length === 2;

  const isTalentsList =
    normalizedPath.startsWith(APP_ROUTES.TALENTS.slice(1)) && rest.length === 1;
  const isSettings = normalizedPath.startsWith(APP_ROUTES.SETTINGS.slice(1));

  if (isProfessionalDetails) return 'professional:detail';
  if (isTalentDetails) return 'talent:detail';
  if (isTalentsList) return 'talents:list';
  if (isSettings) return 'settings';

  return 'default';
};

const LayoutProfessionals: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const t = useTranslations('talents.analytics');
  const routeType = getRouteType(pathname);

  const rightSidebarContentMap: Record<RouteType, ReactNode> = {
    'professional:detail': (
      <Analytics
        title={t('title')}
        items={[{ label: t('vouches'), value: 30 }]}
      />
    ),
    'talents:list': <SimilarTalents />,
    'talent:detail': null,
    'settings': null,
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
