'use client';

import AccountSidebar from '@/components/modules/settings/account-sidebar';
import CommonLayout from '@/components/modules/shared/layouts/common-layout';
import Analytics from '@/components/modules/talents/analytics';
import TalentsFilters from '@/components/modules/talents/filters';
import TalentsSidebar from '@/components/modules/talents/sidebar';
import SimilarTalents from '@/components/modules/talents/similar-talents';
import { APP_ROUTES } from '@/lib/constants/routing/routes';
import { User } from '@clerk/nextjs/server';
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

const PeopleLayout: React.FC<PropsWithChildren<{ user: User | null }>> = ({
  children,
  user,
}) => {
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
    'settings': <AccountSidebar />,
    default: <TalentsFilters />,
  };

  return (
    <CommonLayout
      leftAsideContent={<TalentsSidebar />}
      rightAsideContent={rightSidebarContentMap[routeType]}
      user={user}
    >
      {children}
    </CommonLayout>
  );
};

export default PeopleLayout;
