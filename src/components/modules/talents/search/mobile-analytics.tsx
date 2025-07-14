import { useSidebar } from '@/lib/stores/sidebar';
import { useTranslations } from 'next-intl';
import Analytics from '../analytics';
import MoreButton from './more-button';

const MobileAnalytics: React.FC = () => {
  const { open } = useSidebar();
  return <MoreButton onClick={() => open('analytics')} />;
};

const Content: React.FC = () => {
  const t = useTranslations('talents.analytics');
  return (
    <Analytics
      title={t('title')}
      items={[{ label: t('vouches'), value: 30 }]}
    />
  );
};

const MobileAnalyticsComponent = MobileAnalytics as React.FC & {
  Content: React.FC;
};

MobileAnalyticsComponent.Content = Content;

export default MobileAnalyticsComponent;
